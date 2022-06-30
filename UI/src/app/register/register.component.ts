import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  public userRegistrationForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userRegistrationForm = this.fb.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      dob: ['', [Validators.required]]
    });
  }

  get urf() {
    return this.userRegistrationForm.controls;
  }

  register() {
    console.log(this.urf);
    /*console.log(this.urf['email'].errors['email']);*/
    this.authService.register(this.userRegistrationForm.value).subscribe(
      res => {

      },
      err => {
        console.log(err);
      },
      () => {
        alert('User Created Successfully');
        this.router.navigate(['./login']);
      });
  }

}
