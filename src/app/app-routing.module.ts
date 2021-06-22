import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrdersComponent } from './add-orders/add-orders.component';
import { EditOrdersComponent } from './edit-orders/edit-orders.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'list', component: OrdersComponent},
  {path: 'update/:id', component: EditOrdersComponent},
  {path: 'add', component: AddOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
