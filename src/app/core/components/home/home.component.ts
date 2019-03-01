import { Component } from "@angular/core";

@Component({
  selector: "ac-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent {
  page: any = {
    title: "Acanthus Consulting LLC",
    name: "home",
    leadText: "Acanthus Consulting",
    subText: "Your Trusted Freedom Equity Group Agent"
  }

  callToAction: any = {
    actionText: "Ready To Learn More? Contact Me!"
  }
}