import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
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
export class PictureListComponent implements OnChanges, OnInit{

  displayedColumns: string[] = ['FECHA', 'ENLACE', 'acciones']

  @Input() public pictureList: Pictures[] = [];
  public data!: any;
  public loading: boolean = true;

  constructor(private _fileService: FilesService){}

  ngOnInit(): void {
    console.log(this.loading);

  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.pictureList.length > 0) {
      this.loading = false
    }
    this.data = new MatTableDataSource<Pictures>(this.pictureList);
    this.data.paginator = this.paginator;
    console.log(this.loading);
  }

  @Output() picture: EventEmitter<any> = new EventEmitter();

  onDelete(pictureInput: Pictures){
    this.picture.emit(pictureInput)
  }

  downLoad(pictureInput: Pictures){
    this._fileService.getFile(pictureInput.ENLACE).subscribe(console.log)
  }


}
