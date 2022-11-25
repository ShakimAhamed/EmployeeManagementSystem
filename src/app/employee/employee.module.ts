import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common'; 
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component'; 
import { ReactiveFormsModule } from '@angular/forms'; 
import { IonicStorageModule } from '@ionic/storage-angular'; 


@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    AddNewEmployeeComponent
  ],
  providers: [
    DatePipe 
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    IonicStorageModule.forRoot(), 
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
