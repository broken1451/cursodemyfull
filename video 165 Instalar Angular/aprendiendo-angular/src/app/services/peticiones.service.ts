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
  getUser(userID: any) {
    // return this.httpClient.get( this.url + 'api/users/2' + userID);
  return this.httpClient.get( this.url + 'api/users/' + userID);
}









}
