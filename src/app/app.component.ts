import { Component,ViewChild } from '@angular/core';
import { VerifyComponent } from './component/verify/verify.component';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comj';
  

  @ViewChild(VerifyComponent ,{static: false}) public modalVerify :VerifyComponent;
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
                
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


