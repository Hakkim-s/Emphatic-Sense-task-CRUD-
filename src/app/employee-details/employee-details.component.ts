import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-employee-details",
  templateUrl: "./employee-details.component.html",
  styleUrls: ["./employee-details.component.css"],
})
export class EmployeeDetailsComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createemployeeForm();
  }
  ngOnInit(): void {}
  createemployeeForm() {
    this.employeeForm = this.formBuilder.group({
      empId: [""],
      firstName: [""],
      lastName: [""],
      emailId: [""],
    });
  }
  onSubmit() {
    console.log('Your form data : ', this.employeeForm.value );
}
}
