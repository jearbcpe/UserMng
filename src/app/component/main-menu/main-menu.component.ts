import { Component, OnInit } from '@angular/core';
import { AuthenapiService } from 'src/app/service/authenapi.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  constructor(private route: ActivatedRoute,private authenApi : AuthenapiService,private router: Router) { }
  public nameProfile :string = "";

  ngOnInit() {

    
    

    this.route.queryParams.subscribe(params => {

        if(params['n']!=undefined)
          this.nameProfile = params['n'];     
        else
          this.nameProfile = localStorage.getItem("userFullName");
    });

    
  }

  /*
  public parentMethod(childData:string)
  {
    alert(childData)
  }
  */
  public onLogout()
  {
    if(confirm("ยืนยันการออกจากระบบ"))
    {
      this.authenApi.logout()
      .subscribe((data)=>{
        if(data["status"]=="success"){
          this.nameProfile = "";
          localStorage.removeItem('userFullName');
          alert("ออกจากระบบสำเร็จ");
          this.router.navigate(['home/dashboard']);
        }
      });    
    }
  }
}
