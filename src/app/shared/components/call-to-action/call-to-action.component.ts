import { Component, Input } from "@angular/core";

@Component({
  selector: "ac-c2a",
  templateUrl: "./call-to-action.component.html"
})
export class CallToActionComponent {
  @Input('data') data: any;
}