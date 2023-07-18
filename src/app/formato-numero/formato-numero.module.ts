import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatoNumeroComponent } from './formato-numero.component';
import { SharedModule } from '../shared/shared.module';
import { DlgModifyComponent } from './components/dlg-modify/dlg-modify.component';
import { FormatPipe } from './pipes/format.pipe';



@NgModule({
  declarations: [
    FormatoNumeroComponent,
    DlgModifyComponent,
    FormatPipe
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FormatoNumeroComponent
  ]
})
export class FormatoNumeroModule { }
