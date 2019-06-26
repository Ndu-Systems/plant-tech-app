import { GUEST_EMAIL } from './../../shared/config';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { GUEST_PASSWORD } from 'src/app/shared/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  rForm: FormGroup;
  loading = false;
  error = '';
  isLogin: boolean = true;
  constructor(private fb: FormBuilder,
        private routeTo: Router) {}

  ngOnInit() {
    this.rForm = this.fb.group({
      email: new FormControl(
        GUEST_EMAIL,
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
      ),
      password: [GUEST_PASSWORD, Validators.required]
    });
  }

  login() {
    this.routeTo.navigate(['/dashboard']);
  }
}
