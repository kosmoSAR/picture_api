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

export class AppComponent {


}
