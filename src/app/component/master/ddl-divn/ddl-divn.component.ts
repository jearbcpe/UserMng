import { Component, OnInit } from '@angular/core';
import { MasterapiService } from '../../../service/masterapi.service';

@Component({
  selector: 'app-ddl-divn',
  templateUrl: './ddl-divn.component.html',
  styleUrls: ['./ddl-divn.component.css']
})
export class DDLDivnComponent implements OnInit {

  public divnList = new Array();
  public selectComjDivnId : string = "";

  constructor(private master : MasterapiService) { }

  ngOnInit() {
    this.selectComjDivnId = "0"
    this.master.getDivn()
    .subscribe((data)=>{
      var obj = JSON.stringify(data);
      var sizeofObj = Object.keys(JSON.parse(obj)).length;
      for (let i =0;i<sizeofObj;i++)
      {
        this.divnList.push([data[i]["divnId"],data[i]["divnName"]]);      
      }  
    });
  }

}
