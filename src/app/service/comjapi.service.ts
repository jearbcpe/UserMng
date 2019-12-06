import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { COMJ } from 'src/app/class/comj';

@Injectable({
  providedIn: 'root'
})

export class ComjapiService {

  constructor(private httpClient: HttpClient) { }
  public webApi = "http://10.222.4.234/msc_dev/index.php?r=ws/wsComj";
  private token = localStorage.getItem("token");

  public searchComj(comjNo:string,comjFullName:string,comjDivnId:string,comjCenterName:string,comjStatus:string){
      var jsonData = { "token" : this.token,
      "func": "getListComj" ,
      "comjNo" : comjNo.trim(),
      "comjFullName":comjFullName.trim(),
      "comjDivnId" : comjDivnId,
      "comjCenterName" : comjCenterName.trim(),
      "comjStatus" : comjStatus
      }
      return this.exportData(jsonData);
   
  }

  public retrieveComjDetail(comjId:string)
  {
    var jsonData = { "token" : this.token, "func": "retrieveComjDetail" , "comjId" : comjId}
    return this.exportData(jsonData);
  }

  private exportData(send_data:Object)
  {
    return this.httpClient.post(this.webApi, send_data ,{ responseType: 'json' });
  }

  public addNewComj(comj:COMJ)
  {
    var jsonData = {  "token" : this.token,
                      "func":"addNewComj",
                      "volNo":comj.getComjNo,
                      "volFullName":comj.getComjFullName,
                      "volPosition":comj.getComjPosition,
                      "officeName":comj.getComjCenterName,
                      "regCardDT":comj.getRegCardDT,
                      "regCardBy":comj.getRegCardBy,
                      "cardExp":comj.getCardExp,
                      "volUsername":comj.getComjUsername,
                      "volPassword":comj.getComjPassword,
                      "divnId":comj.getComjDivnId,
                      "status":comj.getStatus
                    }
    //let params = new HttpParams().set('id', '5');
    return this.exportData(jsonData)
  }

  public editComj(comj:COMJ)
  {
    var jsonData = {  "token" : this.token,
                      "func":"updateNewComj",
                      "comjId":comj.getComjId,
                      "volNo":comj.getComjNo,
                      "volFullName":comj.getComjFullName,
                      "volPosition":comj.getComjPosition,
                      "officeName":comj.getComjCenterName,
                      "regCardDT":comj.getRegCardDT,
                      "regCardBy":comj.getRegCardBy,
                      "cardExp":comj.getCardExp,
                      "volUsername":comj.getComjUsername,
                      "volPassword":comj.getComjPassword,
                      "divnId":comj.getComjDivnId,
                      "status":comj.getStatus
                    }
    //let params = new HttpParams().set('id', '5');
    return this.exportData(jsonData)
  }

  public resetPassword(comjId:string)
  {
    var jsonData = { "token" : this.token,
                     "func": "resetPassword" , "comjId" : comjId}            
    return this.exportData(jsonData)
  }
  
}
