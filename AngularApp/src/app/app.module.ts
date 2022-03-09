import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/admin/employee/employee.component';
import { TeamComponent } from './pages/admin/team/team.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { LocationComponent } from './pages/admin/location/location.component';


const routes: Routes = [
  {
   path:'admin',
   component:AdminComponent,
   children: [
    { path:'location',component:LocationComponent },
    { path:'team',component:TeamComponent },
    { path:'employee',component:EmployeeComponent }
    ]
}
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
    EmployeeComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
