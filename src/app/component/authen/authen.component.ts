import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthenapiService } from 'src/app/service/authenapi.service';
@Component({
  selector: 'app-authen',
  templateUrl: './authen.component.html',
  styleUrls: ['./authen.component.css']
})

export class AuthenComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router,private authenApi : AuthenapiService) { }
  token : string = "";
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      localStorage.setItem("token", params['t']);
      this.authenApi.getUserDetail()
      .subscribe((data)=>{
        localStorage.setItem("userFullName", data["fullname"]);
      });
    });
    this.router.navigate(['home/dashboard']);
  }

}
