import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminIndexComponent } from './pages/admin-index/admin-index.component';
import { LoginComponent } from './pages/login/login.component';
import { ManageSalesComponent } from './pages/manage-sales/manage-sales.component';
import { ManageProductsComponent } from './pages/manage-products/manage-products.component';
import { SalesReportComponent } from './pages/sales-report/sales-report.component';
import { UserLogsComponent } from './pages/user-logs/user-logs.component';
import { SaleIndexComponent } from './pages/sale-index/sale-index.component';
import { SaleTransactionComponent } from './pages/sale-transaction/sale-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminIndexComponent,
    LoginComponent,
    ManageSalesComponent,
    ManageProductsComponent,
    SalesReportComponent,
    UserLogsComponent,
    SaleIndexComponent,
    SaleTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
