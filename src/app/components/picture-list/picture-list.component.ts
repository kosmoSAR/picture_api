import { Component, EventEmitter, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Input } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Pictures } from 'src/app/interfaces/picture.interfaces';
import { FilesService } from 'src/app/services/files.service';

@Component({
  selector: 'picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.css']
})
export class PictureListComponent implements OnChanges{

  displayedColumns: string[] = ['FECHA', 'ENLACE', 'acciones']

  @Input() public pictureList: Pictures[] = [];
  public data!: any;

  constructor(private _fileService: FilesService){}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.data.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.data = new MatTableDataSource<Pictures>(this.pictureList);
  }

  @Output() picture: EventEmitter<any> = new EventEmitter();

  onDelete(pictureInput: Pictures){
    this.picture.emit(pictureInput)
  }

  downLoad(pictureInput: Pictures){
    this._fileService.getFile(pictureInput.ENLACE).subscribe(console.log)
  }


}
