import { ReservationsService } from './../services/reservations.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
    @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['reservationId','description','actions'];
  //dataSource = ELEMENT_DATA;
  //listData: MatTableDataSource<any>;
   dataSource: any;
  minDate = new Date();
  maxDate = new Date(2022,12,31);
  myForm: FormGroup ;
  restuarantId: any
  userId :any;
  constructor(private route: ActivatedRoute,
      private reservations : ReservationsService
      ) { }

  ngOnInit(): void {

    this.reservations.getAllReservations().subscribe(allReservation=>{
     console.log(allReservation)

      this.dataSource = new MatTableDataSource<any>(allReservation),
      this.dataSource.sort = this.sort,

      this.dataSource.paginator = this.paginator;
     } );



       this.restuarantId= this.route.snapshot.paramMap.get('id')
      console.log(this.restuarantId);
      this.userId=   localStorage.getItem("currentUser");
      //console.log(this.user.)
     this.myForm= new FormGroup({
      UserId: new FormControl(this.userId ,[Validators.required]),
      RestuarantId: new FormControl(this.restuarantId ,[Validators.required]),
      StartDate: new FormControl('' ,[Validators.required]),
      StartTime: new FormControl('' ,[Validators.required]),
      People: new FormControl('' ,[Validators.required]),
      Description: new FormControl('', [Validators.required]),
      ReservationStatusId:new FormControl(1, [Validators.required])

    });
  }
  onSubmit(form: any) {
    console.log(form.value)
   // this.authService.Register(form.value);
    this.reservations.AddReservation(form.value)
    }

    updateDialog(id: any){

    }
}
