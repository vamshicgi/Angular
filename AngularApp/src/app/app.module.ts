import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/admin/employee/employee.component';
import { TeamComponent } from './pages/admin/team/team.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { LocationComponent } from './pages/admin/location/location.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error/error.component';
import {TabViewModule} from 'primeng/tabview';
import { LocationService } from './shared/location.service';

import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
    EmployeeComponent,
    TeamComponent,
    LocationComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    ErrorComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule ,
    AppRoutingModule,
    HttpClientModule,
    TabViewModule,
    FormsModule,
    TableModule
  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
