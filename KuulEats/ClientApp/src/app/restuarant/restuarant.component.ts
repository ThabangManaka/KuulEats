import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { RestuarantService } from '../services/restuarant.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-restuarant',
  templateUrl: './restuarant.component.html',
  styleUrls: ['./restuarant.component.scss']
})
export class RestuarantComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['RestuarantName','actions'];
  //dataSource = ELEMENT_DATA;
  //listData: MatTableDataSource<any>;
   dataSource: any;
  constructor(private restuarantService : RestuarantService,public dialog: MatDialog) { }

  ngOnInit(): void {

    this.restuarantService.getAllResturant().subscribe(allRestuarant=>{
      console.log(allRestuarant);
      this.dataSource = new MatTableDataSource<any>(allRestuarant),
      this.dataSource.sort = this.sort,

      this.dataSource.paginator = this.paginator;
    })
  }
  updateDialog() {

 
  }

  openDialog(){}

}
