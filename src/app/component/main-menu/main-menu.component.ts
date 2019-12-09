import { Component, OnInit } from '@angular/core';
import { AuthenapiService } from 'src/app/service/authenapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private authenApi : AuthenapiService,private router: Router) { }

  ngOnInit() {
  }

  public onLogout()
  {
    if(confirm("ยืนยันการออกจากระบบ"))
    {
      this.authenApi.logout()
      .subscribe((data)=>{
        if(data["status"]=="success"){
          alert("ออกจากระบบสำเร็จ");
          this.router.navigate(['home/dashboard']);
        }
      });    
    }
  }
}
