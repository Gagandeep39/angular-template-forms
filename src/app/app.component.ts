import { Component, ElementRef, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("f") formObject: NgForm;

  defaultVal = "teacher";
  genders = ["male", "female"];
  radioValue: string;
  submitted = false;
  user = {  //Object to save entered data, need not be same as form structure
    username : '',
    email : '',
    secret : '',
    answer : '',
    gender : ''
  };
  constructor() {}

  suggestUserName() {
    const suggestedName = "Superuser";

    

    //This will override only specifi value
    //Bettwer approach
    this.formObject.form.patchValue({
      userData: {
        username : "Test"
      }
    })
  }

  addDummyData(){
//not the best approach
    //How did i comput with this userData? The username, email are grouped under ngModelGroup='userData'
    //It will override all data present
    //Compulsory to provide all values
    this.formObject.setValue({
      userData: {
        username: "gagan",
        email: "test@mail.com"
      },
      secret: "teacher",
      gender: "male",
      answer: "lol"
    });
  }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.formObject.value.userData.username;
    this.user.email = this.formObject.value.userData.email;
    this.user.answer = this.formObject.value.answer;
    this.user.secret = this.formObject.value.secret;
    this.user.gender = this.formObject.value.gender;
    console.log(this.formObject);
  }
}
