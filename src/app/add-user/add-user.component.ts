import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  firstName: String;
  lastName: String;
  empId: String;
  responseData: boolean;
  jsonData: JSON;
  constructor(private _service: SharedService) { 
    this._service.Get_Users().subscribe(p => this.jsonData = p);
  }
  AddUser() {
    this._service.Add_User(this.firstName, this.lastName, this.empId)
      .subscribe(p => this.responseData = p);
      this._service.Get_Users().subscribe(p => this.jsonData = p);
  }
  reset() {
    this.firstName = null; this.lastName = null; this.empId = null;
  }
  ngOnInit() {
  }

}
