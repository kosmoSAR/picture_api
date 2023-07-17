import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import { map, tap } from 'rxjs';
import * as fileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http:HttpClient) { }

  getFile(name:string, url:string, type: string){
    return this.http.get(url, {responseType: 'blob'})
    .pipe(
      tap( contect => {
        const blob = new Blob([contect], {type});
        fileSaver.saveAs(blob, name)
      }),
      map( () => true )
    )
  }

  uploadPife(file: Blob, url:string){
    const dto = new FormData();
    dto.append('file',file);
    return this.http.post(url, dto)
  }

}
