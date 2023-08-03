import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: string;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      // username: ["", Validators.compose([Validators.required, Validators.email])],
      username: ['johnd', Validators.required],
      password: ['m38rmF$', Validators.required],
    });
  }

  login(event: any) {
    this.loading = true;
    this.loginError = '';

    const values = this.loginForm.value;
    this.authService.login(values).subscribe({
      next: (success) => {
        this.loading = false;
        this.router.navigate(['/products']);
      },
      error: (error) => {
        this.loading = false;
        this.loginError = `Erro: ${error.error}`;
      },
      complete: () => {
        this.loading = false;
        console.log('complete');
      },
    });

    event.preventDefault();
  }
}
