(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");




var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'website';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n    margin-bottom: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">ASInt Project</a>\n    <a [hidden]=\"!hideLogin\" class=\"navbar-brand\" href=\"#\">Logout</a>\n</nav>\n\n<div [hidden]=\"hideLogin\" class=\"container text-center\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"loginRedirect()\">Login</button>\n</div>\n\n\n<div [hidden]=\"!hideLogin\" class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-6\">\n            <h1>Welcome {{istid}}!</h1>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-6\">\n            <form class=\"mb-4\">\n                <div class=\"form-group mb-3\">\n                    <label>Latitude:</label>\n                    <input type=\"text\" class=\"form-control\" id=\"latitude\" [(ngModel)]=\"position.latitude\" name=\"latitude\">\n                </div>\n                <div class=\"form-goup mb-3\">\n                    <label>Longitude:</label>\n                    <input type=\"text\" class=\"form-control\" id=\"longitude\" [(ngModel)]=\"position.longitude\" name=\"longitude\">\n                </div>\n                <button type=\"button\" class=\"btn btn-primary mr-3\" (click)=\"getLocation()\">Get Location <i class=\"fas fa-location-arrow\"></i></button>\n                <button type=\"button\" class=\"btn btn-primary mr-3\" (click)=\"sendLocation()\">Send Location</button>\n            </form>\n\n            <form class=\"mb-4\">\n                <div class=\"form-group mb-3\">\n                    <input type=\"text\" class=\"form-control\" id=\"distance\" [(ngModel)]=\"distance\" name=\"distance\">\n                </div>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"setDistance()\">Set distance</button>\n            </form>\n\n            <form class=\"mb-4\">\n                <div class=\"form-group mb-3\">\n                    <input type=\"text\" class=\"form-control\" id=\"message\" [(ngModel)]=\"message\" name=\"message\">\n                </div>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"sendMessage()\">Send message</button>\n            </form>\n\n            <form class=\"mb-4\">\n                <button type=\"button\" class=\"btn btn-primary mr-3\" (click)=\"getMessages()\">Get messages</button>\n                <button type=\"button\" class=\"btn btn-danger mr-3\" (click)=\"clearMessages()\">Clear messages</button>\n                Refresh time:\n                <select [(ngModel)]=\"messagesRefreshTime\" name=\"name\">\n                    <option>1</option>\n                    <option>2</option>\n                    <option>5</option>\n                    <option>10</option>\n                </select> s\n            </form>\n\n            <ul class=\"list-group list-group-flush\">\n                <li class=\"list-group-item\" *ngFor=\"let message of messages\">\n                    {{message}}\n                </li>\n            </ul>\n\n        </div>\n        <div class=\"col-6\">\n            <h2>Nearby users:</h2>\n            <div class=\"mb-3\">\n                Refresh time:\n                <select [(ngModel)]=\"usersRefreshTime\">\n                    <option>1</option>\n                    <option>2</option>\n                    <option>5</option>\n                    <option>10</option>\n                </select> s\n            </div>\n            <div class=\"row\" class=\"mb-3\">\n                <div class=\"col\">\n                    <p>In {{distance}} meters range:</p>\n                    <ul class=\"list-group\">\n                        <li class=\"list-group-item\" *ngFor=\"let user of usersLocation\">\n                            {{user}}\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"row\" class=\"mb-3\">\n                <div class=\"col\">\n                    <p>Building: {{building}}</p>\n                    <ul class=\"list-group\">\n                        <li class=\"list-group-item\" *ngFor=\"let user of usersBuilding\">\n                            {{user}}\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(rest, route) {
        var _this = this;
        this.rest = rest;
        this.route = route;
        this.hideLogin = false;
        this.message = "";
        this.position = { latitude: null, longitude: null };
        this.messages = [];
        this.usersRefreshTime = 5;
        this.messagesRefreshTime = 5;
        this.usersTimer = this.usersRefreshTime;
        this.messagesTimer = this.messagesRefreshTime;
        this.usersTimerOn = false;
        this.usersBuilding = [];
        this.usersLocation = [];
        this.route.queryParams.subscribe(function (params) {
            var code = params['code'];
            console.log(code);
            if (code != null) {
                _this.rest.login(code).subscribe(function (res) {
                    console.log("2 " + res);
                    _this.token = res.token;
                    var tokenInfo = _this.getDecodedAccessToken(_this.token); // decode token
                    var expireDate = tokenInfo.exp; // get token expiration dateTime
                    _this.istid = tokenInfo.istid;
                    _this.distance = res.distance;
                    console.log(tokenInfo); // show decoded token object in console
                    if (_this.token != null) {
                        _this.hideLogin = true;
                        _this.refreshMessages();
                    }
                    console.log("1 " + _this.token + _this.hideLogin);
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
    HomeComponent.prototype.ngOnInit = function () {
        /*  console.log(this.token)
          if(this.token != null){
            this.rest.login(this.token).subscribe((data: {}) => {
              console.log("2 " + data);
              this.res = data;
            });
          }*/
    };
    HomeComponent.prototype.loginRedirect = function () {
        var url = 'https://fenix.tecnico.ulisboa.pt/oauth/userdialog?client_id=570015174623317&redirect_uri=http://localhost:5000';
        window.open(url, '_self');
    };
    HomeComponent.prototype.getLocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.position.latitude = position.coords.latitude;
                _this.position.longitude = position.coords.longitude;
                console.log("Latitude: " + position.coords.latitude);
                console.log("Longitude: " + position.coords.longitude);
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    };
    HomeComponent.prototype.sendLocation = function () {
        var _this = this;
        var data = { latitude: this.position.latitude, longitude: this.position.longitude };
        this.rest.sendLocation(data, this.token).subscribe(function (res) {
            _this.building = res.building;
            _this.refreshUsers();
            _this.getNearbyUsers();
        });
    };
    HomeComponent.prototype.setDistance = function () {
        var _this = this;
        var data = { distance: this.distance };
        this.rest.setDistance(data, this.token).subscribe(function (res) {
            _this.res = res;
        });
    };
    HomeComponent.prototype.sendMessage = function () {
        var _this = this;
        var data = { message: this.message };
        this.rest.sendMessage(data, this.token).subscribe(function (res) {
            _this.res = res;
        });
    };
    HomeComponent.prototype.getMessages = function () {
        var _this = this;
        this.rest.getMessages(this.token).subscribe(function (res) {
            _this.messages = _this.messages.concat(res.messages);
        });
    };
    HomeComponent.prototype.clearMessages = function () {
        this.messages = [];
    };
    HomeComponent.prototype.getNearbyUsers = function () {
        var _this = this;
        this.rest.getNearbyUsers(this.token).subscribe(function (res) {
            _this.usersBuilding = res.users.building;
            _this.usersLocation = res.users.location;
        });
    };
    HomeComponent.prototype.getDecodedAccessToken = function (token) {
        try {
            return jwt_decode__WEBPACK_IMPORTED_MODULE_4__(token);
        }
        catch (Error) {
            return null;
        }
    };
    HomeComponent.prototype.refreshUsers = function () {
        var _this = this;
        if (this.usersTimerOn == false) {
            this.usersTimerOn = true;
            var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(0, 1000);
            var abc = source.subscribe(function (val) {
                _this.usersTimer--;
                if (_this.usersTimer == 0) {
                    _this.usersTimer = _this.usersRefreshTime;
                    _this.getNearbyUsers();
                }
            });
        }
    };
    HomeComponent.prototype.refreshMessages = function () {
        var _this = this;
        var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(0, 1000);
        var abc = source.subscribe(function (val) {
            _this.messagesTimer--;
            if (_this.messagesTimer == 0) {
                _this.messagesTimer = _this.messagesRefreshTime;
                _this.getMessages();
            }
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/rest.service.ts":
/*!*********************************!*\
  !*** ./src/app/rest.service.ts ***!
  \*********************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var endpoint = 'http://localhost:5000/api/users/';
/*const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};*/
var RestService = /** @class */ (function () {
    function RestService(http) {
        this.http = http;
    }
    RestService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    RestService.prototype.httpOptions = function (token) {
        return { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            }) };
    };
    RestService.prototype.login = function (code) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('code', code);
        return this.http.get(endpoint + 'login', { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    RestService.prototype.sendLocation = function (data, token) {
        console.log(data);
        return this.http.post(endpoint + 'sendLocation', JSON.stringify(data), this.httpOptions(token)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) { return console.log(res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('sendLocation')));
    };
    RestService.prototype.setDistance = function (data, token) {
        console.log(data);
        return this.http.post(endpoint + 'setDistance', JSON.stringify(data), this.httpOptions(token)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) { return console.log(res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('setDistance')));
    };
    RestService.prototype.sendMessage = function (data, token) {
        console.log(data);
        return this.http.post(endpoint + 'sendMessage', JSON.stringify(data), this.httpOptions(token)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) { return console.log(res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('sendMessage')));
    };
    RestService.prototype.getMessages = function (token) {
        return this.http.get(endpoint + 'getMessages', this.httpOptions(token)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    RestService.prototype.getNearbyUsers = function (token) {
        return this.http.get(endpoint + 'getNearbyUsers', this.httpOptions(token)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    RestService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error("REST ERROR: " + error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    RestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RestService);
    return RestService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/joao/Documentos/ASInt/asint-project/website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map