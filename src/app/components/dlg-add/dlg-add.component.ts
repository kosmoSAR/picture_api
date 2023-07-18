import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Pictures, PicturesDTO } from 'src/app/interfaces/picture.interfaces';

@Component({
  selector: 'dlg-add',
  templateUrl: './dlg-add.component.html',
  styleUrls: ['./dlg-add.component.css']
})
export class DlgAddComponent {

  // public forms: FormGroup;

  constructor(private fb:FormBuilder, private dialogRef: MatDialogRef<DlgAddComponent>){
    // this.forms = this.fb.group({
    //   FECHA:['', Validators.required],
    // })
  }

  createPicture(){
    const picture: any = {
      // FECHA: this.forms.value.FECHA,
      NOMBRE: this.files[0]
    }
    this.dialogRef.close( picture )
  }

  files: File[] = [];

  onSelect(event: any) {
    this.files.pop();
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
