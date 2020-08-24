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
    console.log(this.registerForm);
  }
}
