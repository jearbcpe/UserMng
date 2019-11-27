import { Component, OnInit } from '@angular/core';
import { ComjapiService } from '../../../service/comjapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private comjService: ComjapiService) { }
  
  ngOnInit() {
  
  }

}
