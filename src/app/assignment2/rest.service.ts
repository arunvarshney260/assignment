import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://jsonplaceholder.typicode.com/users';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient) { }

  getdata(): Observable<any> {
    return this.http.get(endpoint).pipe(
      map(this.extractData));
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

}
