import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

//instanciar a class User
export class HomeComponent {
  constructor(private loginService: LoginService, private router: Router) { }
  mensagemok = "Deu certo!"
  mensagemerro = " "
  dicas = ""
  usermodel = new User()

  OnSubmit() {
    console.log(this.usermodel)
    console.log(this.loginService.login)

    this.loginService.login(this.usermodel).subscribe((Response) => {
      //Se ok:
      console.log(this.mensagemok)
      this.router.navigateByUrl("/contato")
    },
      //Se erro:
      (respErro) => {
        //console.log(this.mensagemerro)
        this.mensagemerro = respErro.error
        if (this.mensagemerro == 'password is too short') {
          this.mensagemerro = "A senha esta muito pequena!"
          this.dicas = "Utilize mais de três caracteres"
        }else{
          this.dicas = ""
        }
      })
  }
}

