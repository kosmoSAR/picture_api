import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Componentes
import { AppComponent } from './app.component';
import { DlgAddComponent } from './components/dlg-add/dlg-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PictureListComponent } from './components/picture-list/picture-list.component';
import { DlgDeleteComponent } from './components/dlg-delete/dlg-delete.component';

//Modulos
import { SharedModule } from './shared/shared.module';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [
    AppComponent,
    PictureListComponent,
    DlgAddComponent,
    DlgDeleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    NgxDropzoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
