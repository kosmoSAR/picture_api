import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Componentes
import { AppComponent } from './app.component';
import { DlgAddComponent } from './components/dlg-add/dlg-add.component';
import { PictureListComponent } from './components/picture-list/picture-list.component';
import { DlgDeleteComponent } from './components/dlg-delete/dlg-delete.component';

//Modulos
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AppRoutingModule } from './app-routing.module';
import { FormatoNumeroModule } from './formato-numero/formato-numero.module';
import { ImagesComponent } from './pages/images/images.component';

@NgModule({
  declarations: [
    AppComponent,
    PictureListComponent,
    DlgAddComponent,
    DlgDeleteComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    NgxDropzoneModule,
    AppRoutingModule,
    FormatoNumeroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
