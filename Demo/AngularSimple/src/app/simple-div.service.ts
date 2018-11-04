import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { MyDiv } from './MyDiv';
import { KeyValue } from '@angular/common';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class SimpleDivService {

  constructor(private http: HttpClient) { }

  public Ping(): Observable<string> {
    const url = environment.urlAPI + '/api/simplediv/ping' ;

    console.log(url);
    return this.http.get(url, { responseType: 'text' })
      .pipe(
        retry(3), //
        catchError(this.handleError)
      )
    ;
  }
  public MakeDivPOST(s: MyDiv): Observable<KeyValue<string, number> > {

    const url = environment.urlAPI + '/api/simpleDiv/DivAsPOST' ;
    console.log(url);

    const json = JSON.stringify(s);
    console.log(json);
    return this.http.post<KeyValue<string, number>>(url, json, httpOptions);

  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
