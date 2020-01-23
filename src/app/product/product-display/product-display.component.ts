import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { Product } from '../product';
import { MatTableDataSource, MatDialog, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { ProductViewMoreComponent } from '../product_view_more/product-view-more/product-view-more.component';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {
  displayedColumns:string[]=['product_name','product_price','Action'];
  productarr:Product[]=[];
  dataSource: MatTableDataSource<Product>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _data:ProductdataService,private _dialog: MatDialog,private _router:Router) {

  this.dataSource = new MatTableDataSource();
}
  ngOnInit() {
    this._data.getAllProduct().subscribe(
      (data:any)=>{
            console.log(data);
            //this.productarr.splice(this.productarr.indexOf(data),1)
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
  onDelete(row)
  {
    let x:number = this.productarr.indexOf(row);
    if(confirm("ARE YOU SURE YOU WANT TO DELETE ?"))
    {
      this._data.deleteProduct(row.product_id).subscribe(
        (data:any)=>{
          console.log(data);
          this.productarr.splice(x,1);
          this.dataSource.data=this.productarr;
          this._router.navigate(['/nav/product']);
        }
      );
    }
    // this._data.deleteProduct
  }
  onAddClick()
  {
    this._router.navigate(['/nav/productAdd']);
  }
  onEdit(row)
  {
    this._router.navigate(['/nav/productEdit/'+row.product_id]);
  }
  onViewMore(row)
  {
      this._dialog.open(ProductViewMoreComponent,{data:row});
  }
}