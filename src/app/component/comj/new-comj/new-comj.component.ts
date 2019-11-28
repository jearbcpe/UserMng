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
  public mode : string;
  public comjIdForEdit : string;
  public comj = new COMJ();
  public selectNewComjDivnId : string = "0";
  public txtComjNo : string;
  public txtComjFullName : string;
  public txtComjDivnName : string;
  public selectComjDivnId : string;
  public txtComjCenterName : string;
  public txtComjPosition : string;
  public txtRegCardBy : string;
  public txtRegCardDT : string;
  public txtCardExp : string;
  public txtComjUsername : string;
  public txtComjPassword : string;
  public txtComjRePassword : string;
  public selectComjStatus : string = "0";
  public result : Object;
  
  ngOnInit() {
    this.selectNewComjDivnId = "0";
    this.txtComjNo = "";
    this.txtComjFullName = "";
    this.txtComjDivnName = "";
    this.selectComjDivnId = "";
    this.txtComjCenterName = "";
    this.txtComjPosition = "";
    this.txtRegCardBy = "";
    this.txtRegCardDT = "";
    this.txtCardExp = "";
    this.txtComjUsername = "";
    this.txtComjPassword = "";
    this.txtComjRePassword = "";
    this.selectComjStatus = "0";
  }

  showModal(mode:string,comjId:string = ""){
    this.mode = mode;
    if(mode == "edit")
    {
      this.comjIdForEdit = comjId;
      this.txtComjNo = "No0001";
    }

      jQuery(this.modalComjDetail.nativeElement).modal('show'); 
      
  }

  saveComj(mode:string){
    if(this.mode == "new")
      this.addNewComj();
    else if(this.mode == "edit")
      this.editComj(this.comjIdForEdit);
  }

  editComj(comjId:string)
  {
    alert("edit");
  }

  addNewComj(){
    alert("new");
    this.comj.setComjNo = this.txtComjNo;
    this.comj.setComjFullName = this.txtComjFullName;
    this.comj.setComjDivnName = this.txtComjDivnName;
    this.comj.setComjDivnId = this.ddlDivn.selectComjDivnId;
    this.comj.setComjCenterName = this.txtComjCenterName;
    this.comj.setComjPosition = this.txtComjPosition;
    this.comj.setRegCardBy = this.txtRegCardBy;
    this.comj.setRegCardDT = this.txtRegCardDT;
    this.comj.setCardExp = this.txtCardExp;
    this.comj.setStatus = this.selectComjStatus
    this.comj.setComjUsername = this.txtComjUsername;
    this.comj.setComjPassword = this.txtComjPassword;

    this.comjService.addNewComj(this.comj).subscribe((data)=> {
      if(data=="1")
        alert("success");  
        jQuery(this.modalComjDetail.nativeElement).modal('hide');  
    });
    

  }

}
