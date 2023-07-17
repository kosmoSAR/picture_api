import { Component, EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table';
import { Pictures } from 'src/app/interfaces/picture.interfaces';
import { FilesService } from 'src/app/services/files.service';

@Component({
  selector: 'picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.css']
})
export class PictureListComponent implements OnChanges{

  displayedColumns: string[] = ['FECHA', 'NOMBRE', 'acciones']

  @Input() public pictureList: Pictures[] = [];
  public data!: any;

  constructor(private _fileService: FilesService){}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.pictureList);
    this.data = this.pictureList;
  }

  @Output() picture: EventEmitter<any> = new EventEmitter();

  onDelete(pictureInput: Pictures){
    this.picture.emit(pictureInput)
  }

  downLoad(pictureInput: Pictures){
    this._fileService.getFile(pictureInput.NOMBRE, '', 'png').subscribe(console.log)
  }


}
