import { Component, OnInit,ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

declare var jQuery:any;
@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  @ViewChild('verifyModal', {static: false}) public modalVerify:ElementRef;
  constructor() { }

  ngOnInit() {
  }

  public loginDialog(){
      jQuery(this.modalVerify.nativeElement).modal('show'); 
  }

  public onVerify()
  {
    jQuery(this.modalVerify.nativeElement).modal('hide'); 
  }
}
