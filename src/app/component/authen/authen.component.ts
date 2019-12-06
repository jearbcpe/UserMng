import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authen',
  templateUrl: './authen.component.html',
  styleUrls: ['./authen.component.css']
})

export class AuthenComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router) { }
  token : string = "";
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      localStorage.setItem("token", params['t']);
    });
    this.router.navigate(['home/dashboard']);
  }

}
