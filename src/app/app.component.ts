import { Component, OnInit } from '@angular/core';
import { Pictures, PicturesDTO } from './interfaces/picture.interfaces';
import { PictureService } from './services/picture.service';
import { MatDialog } from '@angular/material/dialog';
import { DlgAddComponent } from './components/dlg-add/dlg-add.component';
import { DlgDeleteComponent } from './components/dlg-delete/dlg-delete.component';
import { FilesService } from './services/files.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  public pictureList: Pictures[] = [];

  constructor(private _pictureService:PictureService, private _dialog: MatDialog,
    private _fileService: FilesService){}

  ngOnInit(): void {
    this.loadPictures()
  }

  loadPictures(){
    this._pictureService.getPictures().subscribe({
      next: ( pictures ) => {
        console.log(pictures);
        this.pictureList = pictures;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  openDialogAdd(): void{
    const dialogRef = this._dialog.open(DlgAddComponent);
    dialogRef.beforeClosed().subscribe({
      next: ( picture: any ) => {
        if ( picture ) {
          const file = picture.NOMBRE;
          const nombre = picture.NOMBRE.name

          this._fileService.uploadFile(file, nombre).subscribe({
            next: (resp) => {
              console.log(resp);
            },
            error: (error) => {
              console.log(error);
            }
          })
        }
      }
    })
  }

  openDialogDelete( picture: Pictures ){
    const dialogRef = this._dialog.open(DlgDeleteComponent, { data:picture });
    dialogRef.beforeClosed().subscribe({
      next: ( picture: Pictures ) => {
        console.log( picture );
      }
    })
  }

}
