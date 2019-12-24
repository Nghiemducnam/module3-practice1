import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-template-refer-var",
  templateUrl: "./template-refer-var.component.html",
  styleUrls: ["./template-refer-var.component.css"]
})
export class TemplateReferVarComponent implements OnInit {
  constructor() {}

  showResult(txtInput) {
    console.log(txtInput);
  }

  ngOnInit() {}
}
