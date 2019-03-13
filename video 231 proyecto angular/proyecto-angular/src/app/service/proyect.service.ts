import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyect } from '../models/proyect';
import { Global } from './global';



@Injectable({
  providedIn: 'root'
})
export class ProyectService {

  public url: string;

  constructor(private httpClient: HttpClient) {
    this.url = Global.url;
  }

  testService() {
    return 'Probando el servicio de angular';
  }


}
