import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenapiService {

  constructor(private httpClient: HttpClient) { }

  private token = localStorage.getItem("token");
  public webApi = "http://10.222.4.234/msc_dev/index.php?r=ws/wsComj";
  
  public verifyToken()
  {
    //var jsonData = {"func": "verifyToken" , "token" : this.token}
    //return this.httpClient.post(this.webApi, jsonData ,{ responseType: 'json' });
  }
}
