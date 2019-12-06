import { Component, Input, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { DDLDivnComponent } from '../../master/ddl-divn/ddl-divn.component';
import { ComjapiService } from '../../../service/comjapi.service';
import { COMJ } from 'src/app/class/comj';
import { MasterapiService } from 'src/app/service/masterapi.service';
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

  constructor(private comjService: ComjapiService,private masterService : MasterapiService) { }

  ngOnInit() {
  }

  retrieveComjDetail(comjId:string)
  {
    this.comjService.retrieveComjDetail(comjId)
    .subscribe((data)=>{
      this.result = data;
      this.displayComjDetail();
    });
  }

  displayComjDetail()
  {
    var obj = JSON.stringify(this.result);
    var sizeofObj = Object.keys(JSON.parse(obj)).length;
    //alert(this.result[0]["comjFullName"])

    this.comj.setComjId = this.result[0]["comjId"];
    this.comj.setComjNo = this.result[0]["comjNo"];
    this.comj.setComjFullName = this.result[0]["comjFullName"];
    this.comj.setComjPosition = this.result[0]["comjPosition"];
    this.comj.setComjDivnName = this.result[0]["comjDivnName"];
    this.comj.setComjCenterName = this.result[0]["comjCenterName"];
    this.comj.setRegCardDT = this.masterService.convertDate(this.result[0]["regCardDT"]);
    this.comj.setRegCardBy = this.result[0]["regCardBy"];
    this.comj.setCardExp = this.result[0]["cardExp"];
    this.comj.setStatus = this.masterService.convertNumStatusToStr(this.result[0]["status"]);
  }

  showModal(comjId:string){
    // Show modal with jquery
    jQuery(this.modalComjDetail.nativeElement).modal('show'); 
    this.retrieveComjDetail(comjId);
    this.detailComjFullName = ""
    //jQuery(this.modalDetail.modalComjDetail.nativeElement).modal('show'); 
  }
 
}
