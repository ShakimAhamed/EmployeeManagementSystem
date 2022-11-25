import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular_task';

  constructor( 
    private router: Router 
  ) { } 
  ngOnInit(): void {
     
     
    if(window.location.pathname != '/employee'){
      this.router.navigate(['/authentication']);
    }
    else{
      
    }
    
  }


}
