import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewEmployeeComponent } from './employee/add-new-employee/add-new-employee.component';
import { GetAllEmployeesComponent } from './employee/get-all-employees/get-all-employees.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { UpdateEmployeeDetailsComponent } from './employee/update-employee-details/update-employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewEmployeeComponent,
    GetAllEmployeesComponent,
    EmployeeDetailsComponent,
    UpdateEmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
