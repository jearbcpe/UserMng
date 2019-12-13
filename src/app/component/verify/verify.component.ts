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
          this.router.navigate(['authen'],{ queryParams: { t : data['token'] } });
        }
    });    
    jQuery(this.modalVerify.nativeElement).modal('hide'); 
  }
}