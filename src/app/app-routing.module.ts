import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminIndexComponent } from './pages/admin-index/admin-index.component';
import { ManageSalesComponent } from './pages/manage-sales/manage-sales.component';
import { ManageProductsComponent } from './pages/manage-products/manage-products.component';
import { SalesReportComponent } from './pages/sales-report/sales-report.component';
import { UserLogsComponent } from './pages/user-logs/user-logs.component';
import { SaleIndexComponent } from './pages/sale-index/sale-index.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin-index', component: AdminIndexComponent },
  { path: 'manage-sales', component: ManageSalesComponent },
  { path: 'manage-products', component: ManageProductsComponent },
  { path: 'sales-report', component: SalesReportComponent },
  { path: 'user-logs', component: UserLogsComponent },
  { path: 'sale-index', component: SaleIndexComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
