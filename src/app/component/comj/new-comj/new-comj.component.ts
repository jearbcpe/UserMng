import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { COMJ } from 'src/app/class/comj';
import { DDLDivnComponent } from '../../master/ddl-divn/ddl-divn.component';
import { ComjapiService } from '../../../service/comjapi.service';

declare var jQuery:any;
@Component({
  selector: 'app-new-comj',
  templateUrl: './new-comj.component.html',
  styleUrls: ['./new-comj.component.css']
})
export class NewComjComponent implements OnInit {
  @ViewChild('myModal', {static: false}) public modalComjDetail:ElementRef;
  @ViewChild(DDLDivnComponent ,{static: false}) public ddlDivn;

  constructor(private comjService: ComjapiService) { }
  public comj = new COMJ();
  public selectNewComjDivnId : string = "0";
  public txtComjNo : string;
  public txtComjFullName : string;
  public txtComjDivnName : string;
  public txtComjCenterName : string;
  public txtComjPosition : string;
  public txtRegCardBy : string;
  public txtRegCardDT : string;
  public txtCardExp : string;
  public result : Object;
  
  ngOnInit() {
  }

  showModal(){
    // Show modal with jquery
    jQuery(this.modalComjDetail.nativeElement).modal('show'); 
  }

  addNewCom(){
    //alert(this.ddlDivn.selectComjDivnId);
    this.comj.setComjNo = this.txtComjNo;
    this.comj.setComjFullName = this.txtComjFullName;
    this.comj.setComjDivnName = this.txtComjDivnName;
    this.comj.setComjCenterName = this.txtComjCenterName;
    this.comj.setComjPosition = this.txtComjPosition;
    this.comj.setRegCardBy = this.txtRegCardBy;
    this.comj.setRegCardDT = this.txtRegCardDT
    this.comj.setCardExp = this.txtCardExp;

    this.comjService.addNewComj(this.txtRegCardDT).subscribe((data)=> {
      this.result = data
    });
    
    jQuery(this.modalComjDetail.nativeElement).modal('hide'); 
    

  }

}
