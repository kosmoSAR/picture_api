import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormatoNumeroComponent } from './formato-numero/formato-numero.component';
import { ImagesComponent } from './pages/images/images.component';

const routes: Routes = [
  { path:'images', component: ImagesComponent},
  { path:'format', component: FormatoNumeroComponent},
  { path:'**', redirectTo:'images', pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
