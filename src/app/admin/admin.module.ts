import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";

import {AdminLayoutComponent} from "./shared/admin-layout/admin-layout.component";
import {AddPageComponent} from './add-page/add-page.component';
import {DashbordComponent} from './dashbord/dashbord.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import {OrdersPageComponent} from './orders-page/orders-page.component';


@NgModule({
  imports: [

    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginComponent},
          {path: 'dashboard', component: DashbordComponent},
          {path: 'add', component: AddPageComponent},
          {path: 'orders', component: OrdersPageComponent},
          {path: 'product/:id/edit', component: EditPageComponent},


        ]
      }, ])
  ],
  exports: [RouterModule],

  declarations: [
    AddPageComponent,
    DashbordComponent,
    EditPageComponent,
    OrdersPageComponent,
    AdminLayoutComponent
  ]
})

export class AdminModule {

}
