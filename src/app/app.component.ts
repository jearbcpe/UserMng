import { Component,ViewChild } from '@angular/core';
import { VerifyComponent } from './component/verify/verify.component';
import { Router,ActivatedRoute, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comj';
  

  @ViewChild(VerifyComponent ,{static: false}) public modalVerify :VerifyComponent;
  constructor(private route: ActivatedRoute,private router: Router) {
    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
          this.route.queryParams.subscribe(params => {
            if(params['t'] != undefined && params['n'] != undefined )
            {
              localStorage.setItem("token", params['t']);
              localStorage.setItem("userFullName", params['n']);
              this.router.navigate(['home/dashboard']);
            }
          });
        }
        /*
        if (event instanceof NavigationEnd) {
            // Hide loading indicator
            alert("end");
        }

        if (event instanceof NavigationError) {
            // Hide loading indicator

            // Present error to user
            console.log(event.error);
        }
        */
    });

    }

}


