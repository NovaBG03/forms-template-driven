import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: false}) registerForm: NgForm;
  defaultQuestion = 'teacher';
  answer: string;
  genders: string[] = ['male', 'female'];
  isSubmitted = false;
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.registerForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: ''
    // });

    this.registerForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    this.user.username = this.registerForm.value.userData.username;
    this.user.email = this.registerForm.value.userData.email;
    this.user.secretQuestion = this.registerForm.value.secret;
    this.user.answer = this.registerForm.value.questionAnswer;
    this.user.gender = this.registerForm.value.gender;
  }
}
