import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
 
import Stepper from 'bs-stepper';
import { Observable } from 'rxjs';
import { BesicInfo } from 'src/app/model/besicInfo.model'; 
import { AddItemAction } from 'src/app/state/auth.action'; 
import { AppState } from 'src/app/store/app.state';

 

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.css']
})
export class AddNewEmployeeComponent implements OnInit{ 

  employeeDetails$!: Observable<Array<BesicInfo>>;

  private stepper!: Stepper;

  besicInfoForm!: FormGroup;
  
  maxDate: string |null;
  startDate: string |null;
  constructor(datePipe: DatePipe,private store:Store<AppState>){
    const dateFormat = 'yyyy-MM-dd';
    this.startDate = datePipe.transform(
      new Date().setDate(new Date().getDate() - 1),
      dateFormat
    );
    this.maxDate = this.startDate;
    
  }
  ngOnInit() { 
    this.stepper = new Stepper(document.querySelector('#stepper1')!, {
      linear: false,
      animation: true
    }) 
    this.besicInfoForm = new FormGroup({
      firstName: new FormControl('',[Validators.required]), 
      lastName: new FormControl(''),
      dob: new FormControl('',[Validators.required]),
      mobile: new FormControl('',[ Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(11), Validators.maxLength(11)]),
      gender: new FormControl('',[Validators.required]),
      skillName: new FormControl('',[Validators.required]),
      experience: new FormControl('',[ Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(1), Validators.maxLength(2)]),
      skillLevel: new FormControl('',[Validators.required]),
    });
 
    this.employeeDetails$ = this.store.select((store) => store.infos);
       
  }

  next(): void {

    let value = this.besicInfoForm.value;
    if(value.firstName == ''){return}
    if(value.dob == ''){return}
    if(value.mobile == ''){return}
    if(value.gender == ''){return}

    this.stepper.next();
  
  }
  SaveNext(): void {

    let value = this.besicInfoForm.value;
    if(value.skillName== ''){return}
    if(value.experience == ''){return}
    if(value.skillLevel== ''){return} 

    this.stepper.next();
    this.store.dispatch(new AddItemAction(this.besicInfoForm.value));
  
  }
  FilterGender(data){
    return data==1 ? 'Male':'Femele';
  }
  FilterSkillLevel(data){
    return data == 1 ? 'Beginner' : data == 2 ? 'Intermediate' : 'Advanced';
  }
  prev() {
    this.stepper.previous();
  }

  onSubmit() {
    if (this.besicInfoForm.invalid) {return;}
     
  }

  

  
}
