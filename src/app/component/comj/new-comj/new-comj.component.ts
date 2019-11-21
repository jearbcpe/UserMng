import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
declare var jQuery:any;
@Component({
  selector: 'app-new-comj',
  templateUrl: './new-comj.component.html',
  styleUrls: ['./new-comj.component.css']
})
export class NewComjComponent implements OnInit {
  @ViewChild('myModal', {static: false}) public modalComjDetail:ElementRef;
  constructor() { }

  ngOnInit() {
  }

  showModal(){
    // Show modal with jquery
    jQuery(this.modalComjDetail.nativeElement).modal('show'); 
  }

}
