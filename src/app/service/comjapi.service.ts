import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComjapiService {

  constructor(private httpClient: HttpClient) { }

  public searchComj(comjNo:string,comjFullName:string,comjDivnId:string,comjCenterName:string){
    var jsonData = { "func": "getListComj" ,
                    "comjNo" : comjNo.trim(),
                    "comjFullName":comjFullName.trim(),
                    "comjDivnId" : comjDivnId,
                    "comjCenterName" : comjCenterName.trim()
                  }
    //let params = new HttpParams().set('id', '5');
    return this.httpClient.post(`http://msc.moj.go.th/index.php?r=ws/wsComj`, jsonData ,{ responseType: 'json' });
  }

  public retrieveComjDetail(comjId:string)
  {
    var jsonData = { "func": "retrieveComjDetail" , "comjId" : comjId}
    return this.httpClient.post(`http://msc.moj.go.th/index.php?r=ws/wsComj`, jsonData ,{ responseType: 'json' });
  }

  
}
