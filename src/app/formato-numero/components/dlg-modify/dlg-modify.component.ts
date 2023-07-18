import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Format } from 'src/app/interfaces/format.interface';

@Component({
  selector: 'app-dlg-modify',
  templateUrl: './dlg-modify.component.html',
  styleUrls: ['./dlg-modify.component.css']
})
export class DlgModifyComponent {

  public forms: FormGroup;

  constructor(private fb:FormBuilder, private dialogRef: MatDialogRef<DlgModifyComponent>){
    this.forms = this.fb.group({
      format:['', Validators.required],
      number:['', [Validators.required, Validators.minLength(2)]]
    })
  }

  modify(){
    const format: Format = {
      format: this.forms.value.format,
      number: this.forms.value.number
    }

    this.dialogRef.close(format)

  }

}
