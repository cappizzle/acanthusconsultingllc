import { Component, OnInit } from "@angular/core";

import { SeoService } from "../../../shared/services/seo.service"

@Component({
  selector: "ac-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  constructor(private seo: SeoService){}

  ngOnInit(){
    this.seo.generateTags({
      title: "Acanthus Consulting LLC - Home" 
    })
  }

  page: any = {
    title: "Acanthus Consulting LLC",
    name: "home",
    showImage: true,
    imageSrc: "assets/images/bios/fotine_bio.jpg",
    leadText: "Acanthus Consulting LLC.",
    subText: "Trusted and Friendly Consultants"
  }

  callToAction: any = {
    actionText: "Ready To Learn More? Contact Me!"
  }


}