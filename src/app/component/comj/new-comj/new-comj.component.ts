import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { COMJ } from 'src/app/class/comj';
import { DDLDivnComponent } from '../../master/ddl-divn/ddl-divn.component';
import { ComjapiService } from '../../../service/comjapi.service';
import { MasterapiService } from 'src/app/service/masterapi.service';

declare var jQuery:any;
@Component({
  selector: 'app-new-comj',
  templateUrl: './new-comj.component.html',
  styleUrls: ['./new-comj.component.css']
})
export class NewComjComponent implements OnInit {
  @ViewChild('myModal', {static: false}) public modalComjDetail:ElementRef;
  @ViewChild(DDLDivnComponent ,{static: false}) public ddlDivn;

  constructor(private comjService: ComjapiService,private masterService : MasterapiService) { }
  public mode : string;
  public comj = new COMJ();
  public comjIdForEdit : string;
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
      this.initialComjDetail(comjId);
      this.comjIdForEdit = comjId
    }
      jQuery(this.modalComjDetail.nativeElement).modal('show'); 
  }

  initialComjDetail(comjId:string)
  {
    this.comjService.retrieveComjDetail(comjId)
    .subscribe((data)=>{
      this.result = data
      this.displayInitialComjDetail()
    });
  }

  displayInitialComjDetail()
  {
    var obj = JSON.stringify(this.result);
    var sizeofObj = Object.keys(JSON.parse(obj)).length;
    this.txtComjNo = this.result[0]["comjNo"];
    this.txtComjFullName = this.result[0]["comjFullName"];
    this.txtComjPosition = this.result[0]["comjPosition"];
    this.ddlDivn.selectComjDivnId = this.result[0]["comjDivnId"];
    this.txtComjCenterName = this.result[0]["comjCenterName"];
    this.txtRegCardDT = this.result[0]["regCardDT"];
    this.txtRegCardBy = this.result[0]["regCardBy"];
    this.txtCardExp= this.result[0]["cardExp"];
    //this.selectComjStatus = this.result[0]["status"];
    if(this.result[0]["status"] == "0")
      this.selectComjStatus = "2";
    else if(this.result[0]["status"] == "1")
      this.selectComjStatus = "1";
    this.txtComjUsername = this.result[0]["comjUsername"];
  }

  saveComj(mode:string){
    if(this.mode == "new")
      this.addNewComj();
    else if(this.mode == "edit")
      this.editComj(this.comjIdForEdit);
  }

  editComj(comjId:string)
  {
    this.comj = new COMJ();
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
    this.comj.setComjId = comjId;
    this.comjService.editComj(this.comj).subscribe((data)=> {
      if(data=="1")
      {
        alert("แก้ไขข้อมูลสำเร็จ");  
        jQuery(this.modalComjDetail.nativeElement).modal('hide');  
      }
      else
        alert("พบข้อผิดพลาด แก้ไขข้อมูลไม่สำเร็จ");  
        
    });
  }

  addNewComj(){
    this.comj = new COMJ();
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
      {
        alert("เพิ่มข้อมูลสำเร็จ");  
        jQuery(this.modalComjDetail.nativeElement).modal('hide');  
      }
      else
        alert("พบข้อผิดพลาด เพิ่มข้อมูลไม่สำเร็จ");  
       
    });
    

  }

}
