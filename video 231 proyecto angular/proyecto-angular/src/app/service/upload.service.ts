import { Injectable } from '@angular/core';
import { Global } from './global';



@Injectable({
  providedIn: 'root'
})
export class UploadService {

public url: string;



  constructor() {
    this.url = Global.url;
  }

  // makeFileRequest(url: del api, params: Array<string> posibles parametros q se pueden enviar, files: Array<File> arreglo de tipo file ya en angular viene ese arreglo, name: string  el nombre del parametro que va a recibir el backend )
  makeFIleRequest(url: string, params: Array<any>, files: Array<File>, name: string) {
    return new Promise(  (resolve: any, reject: any) => {
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < files.length; i++) {

         formData.append(name, files[i], files[i].name);

      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              resolve(JSON.parse(xhr.response));
            } else {
              reject(xhr.response);
            }
        }
      };

      xhr.open('POST', url, true);
      xhr.send(formData);

    });
  }



}
