import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ErrorMessage } from '../models/error-message';
import { Role } from '../models/role';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage!: ErrorMessage;
  roles?: Array<Role>;

  constructor(private tokenStorageService: TokenStorageService, private http: HttpClient, private authService: AuthService) {
  }

  ngOnInit(){
    if(this.tokenStorageService.getToken()){
      this.isLoggedIn = true;
      this.roles = this.tokenStorageService.getUser().roles;
    }

  }

  onSubmit(){
    this.authService.login(this.form).subscribe({ next: (data) => {
      this.tokenStorageService.saveToken(data.token);
      this.tokenStorageService.saveUser(data);

      this.isLoggedIn = true;
      this.isLoginFailed = false;

      this.roles = this.tokenStorageService.getUser().roles;
      this.reloadPage();
    },
     error: (err: any) => {
      this.errorMessage = err.error;
      this.isLoginFailed = true;
     }
    });
  }

  reloadPage() {
    window.location.reload;
  }



}
