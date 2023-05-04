import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //instanciar a class User

constructor (private loginService : LoginService){}
  
usermodel = new User()

  OnSubmit() {
    console.log(this.usermodel)
    
    this.loginService.login(this.usermodel).subscribe( (Response) => {
      console.log(Response)
    })
  }
}

