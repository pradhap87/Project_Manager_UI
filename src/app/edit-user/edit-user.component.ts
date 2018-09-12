import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  jsonData: JSON;
  responseData :boolean;
  userId:string;  

  constructor(private _service: SharedService, private route: ActivatedRoute) { 
    route.queryParams.subscribe(data => this.userId = data['UserId']);
    this._service.GetUser_ByID(this.userId).subscribe(p => this.jsonData = p); 
  }
  UpdateUser(jsonData)
  {   
    this._service.Update_User(jsonData)
       .subscribe(p=>this.responseData=p);       
  }
  ngOnInit() {
  }

}
