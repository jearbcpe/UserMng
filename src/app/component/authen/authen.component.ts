import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthenapiService } from 'src/app/service/authenapi.service';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-authen',
  templateUrl: './authen.component.html',
  styleUrls: ['./authen.component.css']
})

export class AuthenComponent implements OnInit {
  //@Output() fullNameFromAuthen : EventEmitter<string> = new EventEmitter();
  constructor(private route: ActivatedRoute,private router: Router,private authenApi : AuthenapiService) { }
  token : string = "";
  ngOnInit() {
  
    this.route.queryParams.subscribe(params => {
      //alert(params['t']);
      localStorage.setItem("token", params['t']);
      localStorage.setItem("userFullName", params['n']);
      /*
      this.authenApi.getUserDetail()
      .subscribe((data)=>{
        localStorage.setItem("userFullName", data["fullname"]);
        alert(data['fullname'])
      });
      */
     //alert(localStorage.getItem("userFullName"))
    });

    this.router.navigate(['home/dashboard']);
  }

}
