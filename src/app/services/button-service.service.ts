import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ButtonServiceService {
  constructor() {}

  showMessage() {
    console.log("test thành công! Chúc mừng bạn, Tôi là service.");
  }
}
