import { Component, Input, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { DDLDivnComponent } from '../../master/ddl-divn/ddl-divn.component';
import { ComjapiService } from '../../../service/comjapi.service';
import { COMJ } from 'src/app/class/comj';
declare var jQuery:any;

@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrls: ['./modal-detail.component.css']
})
export class ModalDetailComponent implements OnInit {
  @ViewChild('myModal', {static: false}) public modalComjDetail:ElementRef;
  @ViewChild(DDLDivnComponent ,{static: false}) public ddlDivn;
  @Input() refComjId: string;

  public detailComjFullName : string;
  public result : Object;
  public comj = new COMJ;

  constructor(private comjService: ComjapiService) { }

  ngOnInit() {
  }

  retrieveComjDetail()
  {
    this.comjService.retrieveComjDetail(this.refComjId)
    .subscribe((data)=>{
      this.result = data
      this.displayComjDetail()
    });
  }

  displayComjDetail()
  {
    var obj = JSON.stringify(this.result);
    var sizeofObj = Object.keys(JSON.parse(obj)).length;
    for (let i = 0; i <= sizeofObj; i++)
    {
      this.comj.setComjId = this.result[i]["comjId"];
      this.comj.setComjNo = this.result[i]["comjNo"];
      this.comj.setComjFullName = this.result[i]["comjFullName"];
      this.comj.setComjPosition = this.result[i]["comjPosition"];
      this.comj.setComjDivnName = this.result[i]["comjDivnName"];
      this.comj.setComjCenterName = this.result[i]["comjCenterName"];
    }
  }

  showModal(){
    // Show modal with jquery
    jQuery(this.modalComjDetail.nativeElement).modal('show'); 
    this.detailComjFullName = ""
    //jQuery(this.modalDetail.modalComjDetail.nativeElement).modal('show'); 
  }
 
}
