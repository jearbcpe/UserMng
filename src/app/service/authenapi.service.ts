import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenapiService {

  constructor(private httpClient: HttpClient) { }
  public webApi = "http://10.222.4.234/msc_dev/index.php?r=ws/wsComj";
  
  public verifyToken()
  {
    var jsonData = {"func": "verifyToken" , "token" : localStorage.getItem("token")}
    return this.httpClient.post(this.webApi, jsonData ,{ responseType: 'json' });
  }

  public logout()
  {
    var jsonData = {"func": "logout" , "token" : localStorage.getItem("token")}
    return this.httpClient.post(this.webApi, jsonData ,{ responseType: 'json' });
  }

  public verifyUser(username:string,password:string)
  {
    var jsonData = { "func": "verifyUser" , "username" : username,"password" : password }
    return this.httpClient.post(this.webApi, jsonData ,{ responseType: 'json' });
  }

  public getUserDetail()
  {
    var jsonData = {"func": "getUserDetail" , "token" : localStorage.getItem("token")}
    return this.httpClient.post(this.webApi, jsonData ,{ responseType: 'json' });
  }
}
