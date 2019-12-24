import { Component, OnInit } from "@angular/core";
import { ButtonServiceService } from "../services/button-service.service";

@Component({
  selector: "app-second-button",
  templateUrl: "./second-button.component.html",
  styleUrls: ["./second-button.component.css"]
})
export class SecondButtonComponent implements OnInit {
  constructor(private btnService: ButtonServiceService) {}
  showMessage() {
    this.btnService.showMessage();
  }

  ngOnInit() {}
}
