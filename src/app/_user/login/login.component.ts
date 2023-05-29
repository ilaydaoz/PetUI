import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string | undefined;
  password: string | undefined;

  constructor(private loginService: LoginServiceService) { }

  ngOnInit(): void {
  }

  login(): void {
    const model = {
      username: this.username,
      password: this.password
    };

    this.loginService.login(model).subscribe(
      (response:LoginComponent) => {

        console.log('Login successful:', response);
      },
      (error: Error) => {

        console.error('Login failed:', error);
      }
    );
  }
}
