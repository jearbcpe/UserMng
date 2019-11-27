import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { COMJ } from 'src/app/class/comj';

@Injectable({
  providedIn: 'root'
})
export class ComjapiService {

  constructor(private httpClient: HttpClient) { }
  public webApi = "http://msc.moj.go.th/index.php?r=ws/wsComj";
  public searchComj(comjNo:string,comjFullName:string,comjDivnId:string,comjCenterName:string){
    var jsonData = { "func": "getListComj" ,
                    "comjNo" : comjNo.trim(),
                    "comjFullName":comjFullName.trim(),
                    "comjDivnId" : comjDivnId,
                    "comjCenterName" : comjCenterName.trim(),
                  }
    //let params = new HttpParams().set('id', '5');
    return this.exportData(jsonData)
  }

  public retrieveComjDetail(comjId:string)
  {
    var jsonData = { "func": "retrieveComjDetail" , "comjId" : comjId}
    return this.exportData(jsonData)
  }

  private exportData(send_data:Object)
  {
    return this.httpClient.post(this.webApi, send_data ,{ responseType: 'json' });
  }

  public addNewComj(comj:string)
  {
    var jsonData = { "func": "addNewComj" }
    //let params = new HttpParams().set('id', '5');
    return this.exportData(jsonData)
  }
  
}
