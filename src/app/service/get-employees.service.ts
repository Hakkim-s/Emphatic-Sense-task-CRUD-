import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetEmployeesService {

  constructor(private http: HttpClient) {
    this.getUserData();
  }
  getUserData() {
    return this.http.get<any>('http://localhost:3000/employees/');
  }
}
