import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "ac-masthead",
  templateUrl: "./masthead.component.html"
})
export class MastheadComponent implements OnInit {
  @Input('page') page: any;

  ngOnInit(){
    console.log(this.page)
  }
}