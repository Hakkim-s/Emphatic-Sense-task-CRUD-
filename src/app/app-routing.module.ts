import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudOperationComponent } from './crud-operation/crud-operation.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

// const routes: Routes = [];
const routes: Routes = [
  { path: "", redirectTo: "/employee-details", pathMatch: "full" },
  { path: "employee-details", component: EmployeeDetailsComponent },
  { path: "crud-operation", component: CrudOperationComponent }, 
  { path: "*", component: EmployeeDetailsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
