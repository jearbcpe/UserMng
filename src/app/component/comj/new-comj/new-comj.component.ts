import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { COMJ } from 'src/app/class/comj';
import { DDLDivnComponent } from '../../master/ddl-divn/ddl-divn.component';
import { ComjapiService } from '../../../service/comjapi.service';
import { MasterapiService } from 'src/app/service/masterapi.service';

import {NgForm} from '@angular/forms';

declare var jQuery:any;
@Component({
  selector: 'app-new-comj',
  templateUrl: './new-comj.component.html',
  styleUrls: ['./new-comj.component.css']
})
export class NewComjComponent implements OnInit {
  @ViewChild('myModal', {static: false}) public modalComjDetail:ElementRef;
  @ViewChild('formComj', {static: false}) public formComj:NgForm;
  @ViewChild(DDLDivnComponent ,{static: false}) public ddlDivn;

  constructor(private comjService: ComjapiService,private masterService : MasterapiService) { }
  public mode : string;
  public comj = new COMJ();
  public comjId : string;
  public comjIdForEdit : string;
  public selectNewComjDivnId : string = "0";
  public txtComjNo : string;
  public txtComjFullName : string;
  public txtComjDivnName : string;
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
  public divnList = new Array();
  public selectComjDivnId : string;

  ngOnInit() {
   this.setDDLDivn();
  }

  setDDLDivn()
  {
    this.masterService.getDivn()
    .subscribe((data)=>{
      var obj = JSON.stringify(data);
      var sizeofObj = Object.keys(JSON.parse(obj)).length;
      for (let i =0;i<sizeofObj;i++)
      {
        this.divnList.push([data[i]["divnId"],data[i]["divnName"]]);      
      }  
    });
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
      this.result = data;
      this.displayInitialComjDetail();
    });
  }

  displayInitialComjDetail()
  {
    var obj = JSON.stringify(this.result);
    //var sizeofObj = Object.keys(JSON.parse(obj)).length;
    this.txtComjNo = this.result[0]["comjNo"];
    this.txtComjFullName = this.result[0]["comjFullName"];
    this.txtComjPosition = this.result[0]["comjPosition"];
    this.selectComjDivnId = this.result[0]["comjDivnId"];
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

  onSubmitNewComj(formObject:NgForm)
  {
    this.comj = new COMJ();
    this.comj.setComjNo = formObject.value["txtComjNo"];
    this.comj.setComjFullName = formObject.value["txtComjFullName"];
    this.comj.setComjDivnName = formObject.value["txtComjDivnName"];
    this.comj.setComjDivnId = formObject.value["selectComjDivnId"];
    this.comj.setComjCenterName = formObject.value["txtComjCenterName"];
    this.comj.setComjPosition = formObject.value["txtComjPosition"];
    this.comj.setRegCardBy = formObject.value["txtRegCardBy"];
    this.comj.setRegCardDT = formObject.value["txtRegCardDT"];
    this.comj.setCardExp = formObject.value["txtCardExp"];
    this.comj.setStatus = formObject.value["selectComjStatus"];
    this.comj.setComjUsername = formObject.value["txtComjUsername"];
    this.comj.setComjPassword = formObject.value["txtComjPassword"];
    if(this.mode == "edit")
      this.comj.setComjId =  this.comjIdForEdit;

    if(this.mode == "new")
    {
      this.comjService.addNewComj(this.comj).subscribe((data)=> {
        if(data["status"]=="success"){
          alert("เพิ่มข้อมูลสำเร็จ");  
          jQuery(this.modalComjDetail.nativeElement).modal('hide');  
        }
        else if(data["status"]=="fail")
          alert("พบข้อผิดพลาด เพิ่มข้อมูลไม่สำเร็จ");  
        else if(data["status"]=="expired")
          alert("Session ของคุณหมดอายุ"); 
      });
    }
    else if(this.mode=="edit")
    {
      this.comjService.editComj(this.comj).subscribe((data)=> {   
        if(data["status"]=="success"){
          alert("แก้ไขข้อมูลสำเร็จ");  
          jQuery(this.modalComjDetail.nativeElement).modal('hide');  
        }
        else if(data["status"]=="fail")
          alert("พบข้อผิดพลาด แก้ไขข้อมูลไม่สำเร็จ");  
        else if(data["status"]=="expired")
          alert("Session ของคุณหมดอายุ"); 
      });
    }
  
    
  }

}
