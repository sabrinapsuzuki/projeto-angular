import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  email: string = ""
  
  login(event : any){
    console.log("Entrando")
    console.log(this.email)
    event.preventDefault()
  }
}
