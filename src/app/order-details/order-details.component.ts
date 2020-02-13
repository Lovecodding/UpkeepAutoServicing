import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderDetailsmoreComponent } from '../order-details/order-detailsmore/order-detailsmore.component';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator } from '@angular/material';
import { OrderDetailsdataService } from '../order-details/order-detailsdata.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { order_details } from '../order-details/order_details';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  displayedColoumns:string[]=['order_details_id','quantity','Action'];
  orderarr:order_details[]=[];
  dataSource:MatTableDataSource<order_details>;
  @ViewChild(MatPaginator,{static:true}) paginator :MatPaginator;
  @ViewChild(MatSort ,{static:true}) sort: MatSort;

  constructor(private _data:OrderDetailsdataService,private _dialog:MatDialog,private _router:Router) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this._data.getAllOrder_Details().subscribe(
      (data:any)=>{
        //this.cartarr=data;
        this.dataSource.data=data;
      }
    );
  }
  applyFilter(filtervalue:string)
  {
    this.dataSource.filter = filtervalue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onViewMore(row)
  {
      console.log(row)
      this._dialog.open(OrderDetailsmoreComponent,{data:row});
  }
}