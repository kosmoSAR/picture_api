import { Injectable } from '@angular/core';
import { Pictures } from '../interfaces/picture.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  private ELEMENT_DATA: Pictures[] = [
    {FECHA: "15/20/2023", NOMBRE:"miFoto.jpg"},
    {FECHA: "17/20/202", NOMBRE:"miFoto2.png"},
  ];

  constructor() { }

  getPictures():Pictures[]{
    return this.ELEMENT_DATA;
  }
}
