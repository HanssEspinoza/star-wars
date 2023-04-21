import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnInit{
  public loginForm!: FormGroup;
  public faEye = faEye;
  public faEyeSlash = faEyeSlash;
  showPassword = false;

  private formBuilder = inject(FormBuilder);
  private authService = inject(AuthService);

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
    this.buildForm();
  }

  sendLogin() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe()
    }
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
