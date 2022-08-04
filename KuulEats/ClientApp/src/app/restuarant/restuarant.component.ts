import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { RestuarantService } from '../services/restuarant.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-restuarant',
  templateUrl: './restuarant.component.html',
  styleUrls: ['./restuarant.component.scss']
})
export class RestuarantComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['restuarantName','actions'];
  //dataSource = ELEMENT_DATA;
  //listData: MatTableDataSource<any>;
   dataSource: any;

  constructor(private restuarantService : RestuarantService,public dialog: MatDialog,
    private router : Router) { }

  ngOnInit(): void {

    this.restuarantService.getAllResturant().subscribe(allRestuarant=>{
      console.log(allRestuarant);
      this.dataSource = new MatTableDataSource<any>(allRestuarant),
      this.dataSource.sort = this.sort,

      this.dataSource.paginator = this.paginator;
    })
  }
  updateDialog(id:any) {
    console.log(id)
   

  }

  openDialog(){}

}
