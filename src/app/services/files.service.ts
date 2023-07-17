import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import { map, tap } from 'rxjs';
import * as fileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private url:string = 'http://kosmetikon.myqnapcloud.com:44444'

  constructor(private http:HttpClient) { }

  getFile(name:string){
    return this.http.get(`${this.url}/files/getFileList`, {responseType: 'blob'})
    .pipe(
      tap( contect => {
        const blob = new Blob([contect]);
        fileSaver.saveAs(blob, name)
      }),
      map( () => true )
    )
  }

  uploadFile(file: Blob, nombre: string){
    const dto = new FormData();
    dto.append('ENLACE', nombre );
    dto.append('ARCHIVO', file );
    return this.http.post(`${this.url}/files/newFile` , dto )
  }

}
