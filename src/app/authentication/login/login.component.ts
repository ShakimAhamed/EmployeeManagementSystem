import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup; 

  constructor(
    private formbuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
     
 

    this.loginForm = this.formbuilder.group({
      UserName: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      UserPassword: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
      

  }

  onSubmit() {
    var loginData = this.loginForm.value;
    this.router.navigate(['/employee']);
    this.loginForm.reset();

    // this.loginMethod(loginData);
  }
}
