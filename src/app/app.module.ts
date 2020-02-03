import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule,MatFormFieldModule,MatInputModule,MatSortModule,MatDialogModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { routingArr } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginDisplayComponent } from './login/login-display/login-display.component';
import { SignupdisplayComponent } from './signup/signupdisplay/signupdisplay.component';
import { UserDisplayComponent } from './user/user-display/user-display.component';
import { ProductDisplayComponent } from './product/product-display/product-display.component';
import { ProductViewMoreComponent } from './product/product-view-more/product-view-more.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { CategoryDisplayComponent } from './category/category-display/category-display.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { ColorDisplayComponent } from './color/color-display/color-display.component';
import { ColorEditComponent } from './color/color-edit/color-edit.component';
import { EmployeeDisplayComponent } from './employee/employee-display/employee-display.component';
import { EmpViewmoreComponent } from './employee/emp-viewmore/emp-viewmore.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { StockDisplayComponent } from './stock/stock-display/stock-display.component';
import { SlotDisplayComponent } from './slot/slot-display/slot-display.component';
import { SupplierDisplayComponent } from './supplier/supplier-display/supplier-display.component';
import { SlotViewmoreComponent } from './slot/slot-viewmore/slot-viewmore.component';
import { SlotAddComponent } from './slot/slot-add/slot-add.component';
import { UserViewMoreComponent } from './user/user-view-more/user-view-more.component';
import { UseraddComponent } from './user/useradd/useradd.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { APP_BASE_HREF } from '@angular/common';
import { CartDisplayComponent } from './cart/cart-display/cart-display.component';
import { CartviewmoreComponent } from './cart/cartviewmore/cartviewmore.component';
import { CartaddComponent } from './cart/cartadd/cartadd.component';
import { CarteditComponent } from './cart/cartedit/cartedit.component';
import { cart } from './cart/cart';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderDetailsmoreComponent } from './order-details/order-detailsmore/order-detailsmore.component';
import { SlotEditComponent } from './slot/slot-edit/slot-edit.component';
import { ColorAddComponent } from './color/color-add/color-add.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { StockEditComponent } from './stock/stockEdit/stock-edit/stock-edit.component';
import { StockViewmoreComponent } from './stock/stockViewMore/stock-viewmore/stock-viewmore.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UserDisplayComponent,
    ProductDisplayComponent,
    ProductViewMoreComponent,
    ProductEditComponent,
    CategoryDisplayComponent,
    ProductAddComponent,
    ColorDisplayComponent,
    ColorEditComponent,
    EmployeeDisplayComponent,
    EmpViewmoreComponent,
    EmployeeEditComponent,
    StockDisplayComponent,
    SlotDisplayComponent,
    SupplierDisplayComponent,
    SlotViewmoreComponent,
    UserViewMoreComponent,
    LoginDisplayComponent,
    SignupdisplayComponent,
    UseraddComponent,
    StockViewmoreComponent,
    UserEditComponent,
    PageNotFoundComponent,
    SlotEditComponent,
    CategoryAddComponent,
    ColorAddComponent,
    CartDisplayComponent,
    CartviewmoreComponent,
    CartaddComponent,
    CarteditComponent,
    OrderDetailsComponent,
    OrderDetailsmoreComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    routingArr,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatSortModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    CategoryAddComponent,
    ProductViewMoreComponent,
    StockViewmoreComponent,
    EmpViewmoreComponent,
    UserViewMoreComponent,
    SlotViewmoreComponent,
    CartviewmoreComponent,
    OrderDetailsmoreComponent,
    CategoryAddComponent
     ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
