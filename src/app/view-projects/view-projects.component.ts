import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.css']
})
export class ViewProjectsComponent implements OnInit {
  jsonData: JSON;
  userData: JSON;
  constructor(private _service: SharedService) {
    this._service.Get_Projects().subscribe(p => this.jsonData = p);
    this._service.Get_Users().subscribe(p => this.userData = p);
   }

  ngOnInit() {
  }

}
