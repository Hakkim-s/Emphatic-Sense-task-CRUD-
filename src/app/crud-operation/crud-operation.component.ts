import { Component, OnInit } from "@angular/core";
import { GetEmployeesService } from "../service/get-employees.service";

@Component({
  selector: "app-crud-operation",
  templateUrl: "./crud-operation.component.html",
  styleUrls: ["./crud-operation.component.css"],
})
export class CrudOperationComponent implements OnInit {
  data: any;
  empId: any;
  firstName: any;
  lastName: any;
  emailId: any;
  isDesc = false;
  columnToSort: string = "id";
  currentPageNo = 1;
  addNewflag = false;
  searchText : any;
  constructor(private _GetEmployeesService: GetEmployeesService) {}

  ngOnInit(): void {
    this.getJsonData();
  }

  getJsonData() {
    this._GetEmployeesService
      .getUserData()
      .subscribe((res) => (this.data = res));
  }

  addToList() {
    if (
      (this.empId == "" || this.empId == undefined) &&
      (this.firstName == "" || this.firstName == undefined) &&
      (this.lastName == "" || this.lastName == undefined) &&
      (this.emailId == "" || this.emailId == undefined)
    ) {
      return (this.addNewflag = true);
    } else {
      this.addNewflag = false;
      this.data.push({
        id: this.empId,
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.emailId,
      });
      this.empId = "";
      this.firstName = "";
      this.lastName = "";
      this.emailId = "";
      alert("Employee Succefully Added");
    }
  }
  deletedata(index) {
    console.log(index);
    this.data.splice(index, 1);
  }

  deleteAll() {
    this.data = [];
    this.addNewflag = false;
  }

  eventSortData(property) {
    this.isDesc = !this.isDesc; //change the direction
    this.columnToSort = property;
    let direction = this.isDesc ? 1 : -1;

    this.data.sort(function (a, b) {
      if (a[property] < b[property]) {
        return -1 * direction;
      } else if (a[property] > b[property]) {
        return 1 * direction;
      } else {
        return 0;
      }
    });
  }

  filterdataList(event) {
    this.currentPageNo = event;
  }

  clearaddNewflag() {
    if (
      this.empId == "" ||
      this.firstName == "" ||
      this.lastName == "" ||
      this.emailId == ""
    ) {
      this.addNewflag = true;
    } else {
      this.addNewflag = false;
    }
  }

  clearsearchText() {
    this.searchText = "";
  }

}
