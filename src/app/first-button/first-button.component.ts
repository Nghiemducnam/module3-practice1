import { Component, OnInit } from "@angular/core";
import { ButtonServiceService } from "../services/button-service.service";

@Component({
  selector: "app-first-button",
  templateUrl: "./first-button.component.html",
  styleUrls: ["./first-button.component.css"]
})
export class FirstButtonComponent implements OnInit {
  constructor(private btnService: ButtonServiceService) {}
  showMessage() {
    this.btnService.showMessage();
  }

  ngOnInit() {}
}
