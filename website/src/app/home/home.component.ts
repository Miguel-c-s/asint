import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';
import * as jwt_decode from "jwt-decode";
import { tokenName } from '@angular/compiler';
import { timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  token: any;
  res: any;
  istid: string;
  hideLogin = false;
  distance;
  message = "";

  position = {latitude:null, longitude:null}

  messages = [];

  usersRefreshTime = 5;
  messagesRefreshTime = 5;

  usersTimer = this.usersRefreshTime;
  messagesTimer = this.messagesRefreshTime;

  usersTimerOn = false;

  usersBuilding = [];
  usersLocation = [];

  building;


  constructor(
    public rest:RestService,
    private route: ActivatedRoute,
    ) {

    this.route.queryParams.subscribe(params => {
      let code = params['code'];
      console.log(code);
      if(code != null){
        this.rest.login(code).subscribe((res) => {
          console.log("2 " + res);
          this.token = res.token;
          let tokenInfo = this.getDecodedAccessToken(this.token); // decode token
          let expireDate = tokenInfo.exp; // get token expiration dateTime
          this.istid = tokenInfo.istid;
          this.distance = res.distance;
          console.log(tokenInfo); // show decoded token object in console
          if(this.token != null){
            this.hideLogin = true;
            this.refreshMessages();
          }
          console.log("1 " + this.token + this.hideLogin);
          });
        }



      /*this.token = params['token'];
      let tokenInfo = this.getDecodedAccessToken(this.token); // decode token
      let expireDate = tokenInfo.exp; // get token expiration dateTime
      this.istid = tokenInfo.istid;
      console.log(tokenInfo); // show decoded token object in console
      if(this.token != null){
        this.hideLogin = true;
      }
      console.log("1 " + this.token + this.hideLogin);*/
    });
  }

  ngOnInit() {
  /*  console.log(this.token)
    if(this.token != null){
      this.rest.login(this.token).subscribe((data: {}) => {
        console.log("2 " + data);
        this.res = data;
      });
    }*/
  }

  loginRedirect() {
    let url = '***REMOVED***';
    window.open(url, '_self');
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.position.latitude = position.coords.latitude;
        this.position.longitude = position.coords.longitude;

        console.log("Latitude: " + position.coords.latitude);
        console.log("Longitude: " + position.coords.longitude);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  sendLocation() {
    let data = {latitude:this.position.latitude, longitude:this.position.longitude}
    this.rest.sendLocation(data, this.token).subscribe((res) => {
      this.building = res.building;
      this.refreshUsers();
      this.getNearbyUsers();
    });

  }

  setDistance() {
    let data = {distance:this.distance}
    this.rest.setDistance(data, this.token).subscribe((res) => {
      this.res = res;
    });

  }

  sendMessage() {
    let data = {message:this.message}
    this.rest.sendMessage(data, this.token).subscribe((res) => {
      this.res = res;
    });

  }

  getMessages() {
    this.rest.getMessages(this.token).subscribe((res) => {
      this.messages = this.messages.concat(res.messages);
    });

  }

  clearMessages() {
    this.messages = [];
  }

  getNearbyUsers() {
    this.rest.getNearbyUsers(this.token).subscribe((res) => {
      this.usersBuilding = res.users.building;
      this.usersLocation = res.users.location;
    });

  }


  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

  refreshUsers() {
    if(this.usersTimerOn == false){
      this.usersTimerOn = true;
      const source = timer(0, 1000);
      const abc = source.subscribe(val => {
        this.usersTimer--;
        if(this.usersTimer == 0){
          this.usersTimer = this.usersRefreshTime;
          this.getNearbyUsers();
        }
      });
    }
  }

  refreshMessages() {
    const source = timer(0, 1000);
    const abc = source.subscribe(val => {
      this.messagesTimer--;
      if(this.messagesTimer == 0){
        this.messagesTimer = this.messagesRefreshTime;
        this.getMessages();
      }
    });
  }
}
