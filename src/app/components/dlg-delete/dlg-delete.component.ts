import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pictures } from 'src/app/interfaces/picture.interfaces';

@Component({
  selector: 'app-dlg-delete',
  templateUrl: './dlg-delete.component.html',
  styleUrls: ['./dlg-delete.component.css']
})
export class DlgDeleteComponent {

  constructor(
    public dialogRef: MatDialogRef<DlgDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Pictures ) {

    }

  deleteUser(){
    this.dialogRef.close( this.data )
  }

  closedlg(){
    this.dialogRef.close( 'null' )
  }
}
