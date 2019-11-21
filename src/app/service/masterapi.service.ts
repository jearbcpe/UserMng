import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterapiService {
  constructor(private httpClient: HttpClient) { }
  public getDivn(){
    var jsonData = { "func": "getListDivn" };
    //let params = new HttpParams().set('id', '5');
    return this.httpClient.post(`http://msc.moj.go.th/index.php?r=ws/wsComj`, jsonData ,{ responseType: 'json' });
  }
}
