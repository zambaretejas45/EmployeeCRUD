import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Employee } from '../pojo/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCRUDService {
 baseURL: string="http://localhost:8080/employeecrud/employee";
 
 updateEmployee(employee:Employee): Observable<boolean>{
  
  return this.http.put<boolean>(this.baseURL,employee)

 }

 getSingleEmployee(employeeId:number): Observable<Employee>{
  console.log('in getSingleEmployee()'+employeeId);
  return this.http.get<Employee>(this.baseURL+'/'+employeeId)

 }

 getDetails(employeeId:number){
   console.log(employeeId);
 }

 deleteEmployee(employeeId: number): Observable<boolean>{
console.log('In deleteEmployee'+employeeId)

   return this.http.delete<boolean>(this.baseURL+ '/'+employeeId)
 }

getAllEmployees() : Observable<Employee[]>{
  return this.http.get<Employee[]>(this.baseURL);
}

 addEmployee(employee :Employee): Observable<boolean>{
   console.log("in EmployeeCRUDService");
   console.log(employee);
   console.log("EmployeeCRUDService end")
   return this.http.post<boolean>(this.baseURL,employee);

 }

  constructor(private http: HttpClient) { }
}
