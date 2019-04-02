import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:5000/api/users/';
/*const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};*/

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  private httpOptions(token) {
    return {headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': token
    })}
  }

  login(code): Observable<any> {
    const params = new HttpParams().set('code', code);
    return this.http.get(endpoint + 'login', {params}).pipe(
      map(this.extractData));
  }

  sendLocation(data, token): Observable<any> {
    console.log(data);
    return this.http.post<any>(endpoint + 'sendLocation', JSON.stringify(data), this.httpOptions(token)).pipe(
      tap((res) => console.log(res)),
      catchError(this.handleError<any>('sendLocation'))
    );
  }

  setDistance(data, token): Observable<any> {
    console.log(data);
    return this.http.post<any>(endpoint + 'setDistance', JSON.stringify(data), this.httpOptions(token)).pipe(
      tap((res) => console.log(res)),
      catchError(this.handleError<any>('setDistance'))
    );
  }

  sendMessage(data, token): Observable<any> {
    console.log(data);
    return this.http.post<any>(endpoint + 'sendMessage', JSON.stringify(data), this.httpOptions(token)).pipe(
      tap((res) => console.log(res)),
      catchError(this.handleError<any>('sendMessage'))
    );
  }

  getMessages(token): Observable<any> {
    return this.http.get(endpoint + 'getMessages', this.httpOptions(token)).pipe(
      map(this.extractData));
    }

  getNearbyUsers(token): Observable<any> {
    return this.http.get(endpoint + 'getNearbyUsers', this.httpOptions(token)).pipe(
      map(this.extractData));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error("REST ERROR: " + error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
