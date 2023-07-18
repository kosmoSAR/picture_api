import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DlgModifyComponent } from './components/dlg-modify/dlg-modify.component';

@Component({
  selector: 'formato-numero',
  templateUrl: './formato-numero.component.html',
  styleUrls: ['./formato-numero.component.css']
})

export class FormatoNumeroComponent {

  principal_number: number = 1000;
  formato: number = 1;

  constructor(private router:Router, private _dialog: MatDialog){}

  openModifyDialog(){
    const dialogRef = this._dialog.open(DlgModifyComponent);

    dialogRef.beforeClosed().subscribe(
      (value) => {
        if (value && value.number > 0) {
          this.principal_number = value.number;
          this.formato = value.format;
        }
      }
    )
  }

  imagePage(){
    this.router.navigate(['images'])
  }

}
