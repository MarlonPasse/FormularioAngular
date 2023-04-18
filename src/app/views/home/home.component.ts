import { Component } from '@angular/core';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //instanciar a class User

  usermodel = new User()

  OnSubmit (){
    console.log(this.usermodel)
  }

}
