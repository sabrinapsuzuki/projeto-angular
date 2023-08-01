import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
    ){

    this.loginForm = this.fb.group({
      // username: ["", Validators.compose([Validators.required, Validators.email])],
      username: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  login(event : any){
   const values = this.loginForm.value; 
   this.authService.login(values).subscribe({
    next: success => {
      this.router.navigate(["/products"])
    },
    error: error => {
      alert(`Ocorreu um erro: ${error.error}`)
    },
    complete: () => {
      console.log("complete")
    }
   })

    event.preventDefault()
  }

}
