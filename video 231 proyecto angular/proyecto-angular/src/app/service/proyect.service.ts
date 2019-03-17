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
    console.log('proyect service funcionando');
  }

  // testService() {
  //   return 'Probando el servicio de angular';
  // }


  // Servicio para guardar un Proyecto en el backend
  saveProyect( proyect: Proyect ): Observable<any> {

    const parametros = JSON.stringify(proyect); // parametros todos los datos del objeto a enviar

    const header = new HttpHeaders().set('Content-type', 'application/json'); // como se enviara la informacion y q la informacion viaje en ese formato

    // return this.httpClient.post( url del api + metodo del api , datos a guarda en el backend , { cabeceras});
    return this.httpClient.post(this.url + 'save-project', parametros, {headers: header});

  }



// Servicio para subir una imagen
   // makeFileRequest(url: del api, params: Array<string> posibles parametros q se pueden enviar, files: Array<File> arreglo de tipo file ya en angular viene ese arreglo, name: string  el nombre del parametro que va a recibir el backend )
makeFileRequest(url: string, params: Array<any>, files: Array<any>, name: string) {
   return new Promise( ( resolve, reject) => {

      // simular un formulario clasico
      const formData: any = new FormData(); // nos permitira crear un formulario dentro de un objeto

      const xhr = new XMLHttpRequest() ; // sinonimo de ajax (xhr) peticiones asincronas XMLHttpRequest

         // recorrer el archivo q puede estar llegando
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < files.length; i++) {

             formData.append(name, files[i], files[i].name);

             // files.forEach(element => {
             //      formData.append(name, element, element.name);
             // });
      }


      // PETICION AJAX
      xhr.onreadystatechange =  () =>  {

        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              resolve(JSON.parse(xhr.response));
              // console.log('El resolve de la promesa es: ', resolve);
            } else {
              reject(xhr.response);
              // console.log('El reject de la promesa es: ', reject);
            }
        }

      };


    // Peticion ajax por post
      xhr.open('POST', url, true);
      xhr.send(formData);

  });
}




 // Servicio para listar todos los proyecto en la BD
  getProyects(): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'application/json'); // como se enviara la informacion y q la informacion viaje en ese formato

    return this.httpClient.get(this.url + 'projects', {headers: header});

  }



  // Servicio para ver un proyecto en la BD
    getProyect(id: any): Observable<any> {
      const header = new HttpHeaders().set('Content-Type', 'application/json');
      return this.httpClient.get(this.url + 'project/' + id, {headers: header});
    }

  // Servicio para borrar
    deleteProyect(id: any): Observable<any> {
      const header = new HttpHeaders().set('Content-Type', 'application/json');
      return this.httpClient.delete(this.url + 'project/' + id, {headers: header});
    }


  // Servicio para editar un proyecto

  updateProyect(proyecto: any): Observable<any> {

    const parametros = JSON.stringify(proyecto);

    const header = new HttpHeaders().set('Content-Type', 'application/json');

    // return this.httpClient.put( url + 'metodo del api' + idDelProyectp, parametros a modificar , {cabeceras});
    return this.httpClient.put(this.url + 'project/' + proyecto._id, parametros , {headers: header});
  }



}
















































































































































































/*

  // Servicio para subir una imagen
    // makeFileRequest(url: del api, params: Array<string> posibles parametros q se pueden enviar, files: Array<File> arreglo de tipo file ya en angular viene ese arreglo, name: string  el nombre del parametro que va a recibir el backend )
// makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string) {
//   return new Promise( ( resolve, reject) => {

//       // simular un formulario clasico
//       const formData: any = new FormData(); // nos permitira crear un formulario dentro de un objeto

//       const xhr = new XMLHttpRequest() ; // sinonimo de ajax (xhr) peticiones asincronas XMLHttpRequest

//          // recorrer el archivo q puede estar llegando
//       for (let i = 0; i < files.length; i++) {

//              formData.append(name, files[i], files[i].name);
//              // files.forEach(element => {
//              //         formData.append(name, element, element.name);
//              //       });
//       }


//       // PETICION AJAX
//       xhr.onreadystatechange = function ()  {

//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//               resolve(JSON.parse(xhr.response));
//             } else {
//               reject(xhr.response);
//             }
//         }

//       };


//     // Peticion ajax por post
//       xhr.open('POST', url, true);
//       xhr.send(formData);

//   });
// }



*/
