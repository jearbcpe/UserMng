import { Component, OnInit } from '@angular/core';
import { COMJ } from 'src/app/class/comj';
import { ComjapiService } from '../../../service/comjapi.service';
import { ViewChild } from '@angular/core';
import { ModalDetailComponent } from '../modal-detail/modal-detail.component';
import { NewComjComponent } from '../new-comj/new-comj.component';
import { DDLDivnComponent } from '../../master/ddl-divn/ddl-divn.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  @ViewChild(ModalDetailComponent ,{static: false}) public modalDetail;
  @ViewChild(NewComjComponent ,{static: false}) public modalNewComj;
  @ViewChild(DDLDivnComponent ,{static: false}) public ddlDivn;
  constructor(private comjService: ComjapiService) { }
  public comj: COMJ;
  public searchComjNo : string = "";
  public searchComjFullName : string = "";
  public searchComjDivnId : string = "";
  public searchComjCenterName : string = "";
  public comjList = new Array();
  public divnList = new Array();
  public refComjId : string;
  public result : Object;
  public eachPage : number = 100;
  public currentPage : number;
  public numAllPage : number;
  public arrNumPage = new Array();
  public totalComj : number = 0;

  ngOnInit() {
    this.searchComjDivnId = "0"
  }

  onUserClick(){
    this.comjList = []
    this.arrNumPage = []
    this.comjService.searchComj(this.searchComjNo,this.searchComjFullName,this.ddlDivn.selectComjDivnId,this.searchComjCenterName)
    .subscribe((data)=>{
      this.result = data
      this.displayComjList(1)
    });
  }

  displayComjList(page:number)
  {
    this.currentPage = page;
    this.comjList = []
    this.arrNumPage = []
    var obj = JSON.stringify(this.result);
    var sizeofObj = Object.keys(JSON.parse(obj)).length;
    this.totalComj = sizeofObj;

    if(sizeofObj % this.eachPage == 0)
      this.numAllPage = sizeofObj/this.eachPage;
    else
      this.numAllPage = Math.floor(sizeofObj/this.eachPage) + 1

    for (let i = 1; i <= this.numAllPage; i++)
    {
      this.arrNumPage.push(i);
    }

    var startPage = (this.currentPage - 1) * this.eachPage;
    var endPage = startPage + this.eachPage;
    for (let i = startPage;i < endPage;i++)
    {
      this.comj = new COMJ;
      this.comj.setComjId = this.result[i]["comjId"];
      this.comj.setComjNo = this.result[i]["comjNo"];
      this.comj.setComjFullName = this.result[i]["comjFullName"];
      this.comj.setComjPosition = this.result[i]["comjPosition"];
      this.comj.setComjDivnName = this.result[i]["comjDivnName"];
      this.comj.setComjCenterName = this.result[i]["comjCenterName"];
      this.comjList.push(this.comj);      
    }  
  }

  increasePageNumber()
  {
    if(this.currentPage != this.numAllPage)
      this.displayComjList(this.currentPage+1)
  }

  decreasePageNumber()
  {
    if(this.currentPage != 1)
      this.displayComjList(this.currentPage-1)
  }
  //@ViewChild('myModal', {static: false}) modal:ElementRef;
  showModal(comjId : string){
    //this.refComjId = comjId
    this.modalDetail.showModal(comjId);
    //this.modalDetail.retrieveComjDetail()
    // jQuery(this.modal.nativeElement).modal('show'); 
  }
  showModalNewComj(){
    this.modalNewComj.showModal();
  }
  
}
