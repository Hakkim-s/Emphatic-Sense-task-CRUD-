import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CrudOperationComponent } from './crud-operation/crud-operation.component';
import { HttpClientModule } from "@angular/common/http";
import { GetEmployeesService } from './service/get-employees.service';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { NgxPaginationModule } from "ngx-pagination";
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    CrudOperationComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule 
  ],
  providers: [GetEmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
