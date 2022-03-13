import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./pages/admin/admin.component";
import { LocationComponent } from "./pages/admin/location/location.component";
import { TeamComponent } from "./pages/admin/team/team.component";
import { EmployeeComponent } from "./pages/admin/employee/employee.component";
import { ErrorComponent } from "./error/error/error.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";


const routes: Routes = [
    { path: "", redirectTo: "admin", pathMatch: "full" },
    {path:'dashboard',component:DashboardComponent},
    {
        path: "admin",
        component: AdminComponent,
        children: [
            { path:'location',component:LocationComponent },
            { path:'team',component:TeamComponent },
            { path:'employee',component:EmployeeComponent }
        ]
    } ,
    {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}