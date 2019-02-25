import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class PeticionesService {

  public url: string;

  constructor(private httpClient: HttpClient) {

    this.url = 'https://reqres.in/';

  }

// getUser(): Observable<any> {
  getUser(userID: any): Observable<any> {
  //  return this.httpClient.get( this.url + 'api/users/2' + userID);
  return this.httpClient.get( this.url + 'api/users/' + userID);
}


// getUser(): Observable<any> {
  // return this.httpClient.get( this.url + 'api/users/2' );
// return this.httpClient.get( this.url + 'api/users/' + userID);
// }


addUser(user: any): Observable<any> {

  const parametros = JSON.stringify(user);
  const header = new HttpHeaders().set('content-type', 'application/json');
// return this.httpClient.post(this.url + 'api/users', parametros a guardar, {headers: header});
  return this.httpClient.post(this.url + 'api/users', parametros, {headers: header});
}









}
