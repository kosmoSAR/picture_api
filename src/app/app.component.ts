import { Component, OnInit } from '@angular/core';
import { Pictures, PicturesDTO } from './interfaces/picture.interfaces';
import { PictureService } from './services/picture.service';
import { MatDialog } from '@angular/material/dialog';
import { DlgAddComponent } from './components/dlg-add/dlg-add.component';
import { DlgDeleteComponent } from './components/dlg-delete/dlg-delete.component';
import { FilesService } from './services/files.service';
import { lastValueFrom } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  public pictureList: Pictures[] = [];

  constructor(private _pictureService:PictureService, private _dialog: MatDialog,
    private _fileService: FilesService, private _snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.loadPictures()
  }

  loadPictures(){
    this._pictureService.getPictures().subscribe({
      next: ( pictures ) => {
        this.pictureList = pictures;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  async openDialogAdd(): Promise<void>{
    try{
      const dialogRef = this._dialog.open(DlgAddComponent);
      const observable1$ = dialogRef.beforeClosed();
      const resultado1 = await lastValueFrom(observable1$);
      if ( resultado1 ) {
        const file = resultado1.NOMBRE
        const nombre = resultado1.NOMBRE.name

        const observable2$ = this._fileService.uploadFile(file, nombre);
        const resultado2 = await lastValueFrom(observable2$);
        console.log(resultado2);

        const observable3$ = this._pictureService.getPictures();
        const resultado3 = await lastValueFrom(observable3$);
        this.pictureList = resultado3;

      }
    } catch ( error ) {
      console.log(error);
      this.errorSnackBar2(error)
    }


    // dialogRef.beforeClosed().subscribe({
    //   next: ( picture: any ) => {
    //     if ( picture ) {
    //       const file = picture.NOMBRE;
    //       const nombre = picture.NOMBRE.name

    //       this._fileService.uploadFile(file, nombre).subscribe({
    //         next: (resp) => {
    //           console.log(resp);
    //         },
    //         error: (error) => {
    //           console.log(error);
    //         },
    //       })
    //     }
    //   }
    // })
  }

  async openDialogDelete( picture: Pictures ): Promise<void>{
    try{
      const dialogRef = this._dialog.open(DlgDeleteComponent, { data:picture });
      const observable1$ = dialogRef.beforeClosed();
      const resultado1: Pictures = await lastValueFrom(observable1$);
      if ( resultado1 ) {
        const pictureId = { "ID_IMAGEN":resultado1.ID_IMAGEN }

        const observable2$ = this._pictureService.deletePictures(pictureId)
        const resultado2 = await lastValueFrom(observable2$);
        console.log(resultado2);

        const observable3$ = this._pictureService.getPictures();
        const resultado3 = await lastValueFrom(observable3$);
        this.pictureList = resultado3;
      }
    } catch (error) {
      this.errorSnackBar(error)
    }
  }

  errorSnackBar(error: any): void {
    this._snackBar.open(error.error.message, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  errorSnackBar2(error: any): void {
    this._snackBar.open(error.message, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

}
