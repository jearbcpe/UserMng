import { Component, OnInit,ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { AuthenapiService } from 'src/app/service/authenapi.service';
import { Router,ActivatedRoute } from '@angular/router';

declare var jQuery:any;
@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  @ViewChild('verifyModal', {static: false}) public modalVerify:ElementRef;
  constructor(private authenApi : AuthenapiService,private router: Router) { }

  public txtUsername : string = "";
  public txtPassword : string = "";
  ngOnInit() { 
    this.txtUsername = "";
    this.txtPassword = "";
  }

  public loginDialog(){
      jQuery(this.modalVerify.nativeElement).modal('show'); 
  }

  public onVerify()
  {
    //Verify User
    this.authenApi.verifyUser(this.txtUsername,btoa(this.txtPassword))
    .subscribe((data)=>{
        if(data["status"]=="success"){
          jQuery(this.modalVerify.nativeElement).modal('hide'); 
          this.router.navigate(['home/dashboard'],{ queryParams: { t : data['token'] , n : data['name'] } });
          
          //window.location.reload();
        }
        else if(data["status"]=="fail")
        {
          alert("ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง");
        }
    });    
   
  }
}
