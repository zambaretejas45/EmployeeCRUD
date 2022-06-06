import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/pojo/employee';
import { EmployeeCRUDService } from 'src/app/services/employee-crud.service';

@Component({
  selector: 'app-update-employee-details',
  templateUrl: './update-employee-details.component.html',
  styleUrls: ['./update-employee-details.component.css']
})
export class UpdateEmployeeDetailsComponent implements OnInit {

  employee : Employee=new Employee();
  employeeId:number = 0;
  submitted:boolean=false;
  constructor(private employeeCRUDService : EmployeeCRUDService, private route: ActivatedRoute, private router:Router) { }
  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params['employeeId']
    this.updateEmployee(this.employeeId);
  }

  updateEmployee(employeeId:number){
    this.employeeCRUDService.getSingleEmployee(employeeId).subscribe(
      Data   => {
         this.employee = Data;
       }
       );

      }
      onFormSubmit(){
        this.employeeCRUDService.updateEmployee(this.employee)
        .subscribe(data => {
          this.submitted=true;
          console.log(data);
        })
      }
      goToHome(){
        this.router.navigate(['/getallemployees']);
      }
}
