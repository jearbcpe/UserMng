import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterapiService {
  constructor(private httpClient: HttpClient) { }
  public webApi = "http://msc.moj.go.th/index.php?r=ws/wsComj";
  private token = localStorage.getItem("token");
  public getDivn(){
    var jsonData = { "token" : this.token,"func": "getListDivn" };
    //let params = new HttpParams().set('id', '5');
    return this.exportData(jsonData)
  }

  public convertDate(strDate:string,format:string = "short")
  {
    var arrDate = strDate.split("/"); 
    if(format=="short")
      return arrDate[0] + " " + this.convertNumToMonthShortName(arrDate[1]) + " " + arrDate[2] ;
    else if(format=="full")
      return arrDate[0] + " " + this.convertNumToMonthFullName(arrDate[1]) + " " + arrDate[2] ;
  }
  public convertNumStatusToStr(numStatus:string)
  {
    if(numStatus=="0")
      return "ไม่ใช้งาน"
    else if(numStatus=="1")
      return "ใช้งาน";
  }
  public convertNumToMonthFullName(numMonth:string)
  {
    var monthName : string;
    var m = Number(numMonth)
    if(m==1)
      monthName = "มกราคม";
    else if(m==2)
      monthName = "กุมภาพันธ์";
    else if(m==3)
      monthName = "มีนาคม";
    else if(m==4)
      monthName = "เมษายน";
    else if(m==5)
      monthName = "พฤษภาคม";
    else if(m==6)
      monthName = "มิถุนายน";
    else if(m==7)
      monthName = "กรกฎาคม";
    else if(m==8)
      monthName = "สิงหาคม";
    else if(m==9)
      monthName = "กันยายน";
    else if(m==10)
      monthName = "ตุลาคม";
    else if(m==11)
      monthName = "พฤศจิกายน";
    else if(m==12)
      monthName = "ธันวาคม";

    return monthName;
         
  }

  public convertNumToMonthShortName(numMonth:string)
  {
    var monthName : string;
    var m = Number(numMonth)
    if(m==1)
      monthName = "ม.ค.";
    else if(m==2)
      monthName = "ก.พ.";
    else if(m==3)
      monthName = "มี.ค.";
    else if(m==4)
      monthName = "เม.ย.";
    else if(m==5)
      monthName = "พ.ค.";
    else if(m==6)
      monthName = "มิ.ย.";
    else if(m==7)
      monthName = "ก.ค.";
    else if(m==8)
      monthName = "ส.ค.";
    else if(m==9)
      monthName = "ก.ย.";
    else if(m==10)
      monthName = "ต.ค.";
    else if(m==11)
      monthName = "พ.ย.";
    else if(m==12)
      monthName = "ธ.ค.";

    return monthName;
         
  }

  private exportData(send_data:Object)
  {
    return this.httpClient.post(this.webApi, send_data ,{ responseType: 'json' });
  }
  
}
