import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';  

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }

  getEmployeeList() {
    const endpoint = 'https://dummy.restapiexample.com/api/v1/employees';
    return this.http.get(endpoint);
  }

  
}
