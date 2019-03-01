import { Component, OnInit } from "@angular/core"

@Component({
  selector: "ac-footer",
  templateUrl: "./footer.component.html"
})
export class FooterComponent implements OnInit {
  today: number = Date.now()

  ngOnInit(){
    console.log(this.today)
  }
}