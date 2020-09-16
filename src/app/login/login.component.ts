import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from 'src/app/app-constants';
import { RestClientService } from 'src/app/services/rest-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  splash = true;
  UEmail:any;
  UPassword:any;
  showDialog=false;
  showUEmailErrorMsg = null;
  showUPasswordErrorMsg = null;
  loginError;

  constructor(private router: Router, private config: Config, private restService: RestClientService) {}
  
  ngOnInit() {
  var context = this;
  setTimeout(function () {
    context.splash = false;
  }, 2000);
  }

  type = "password";
  show = false;
  toggleShow() {
    this.show = !this.show;
    if (this.show) {
      this.type = "text";
    }
    else {
      this.type = "password";
    }
  }

  forgetpassword(){
    this.router.navigateByUrl('forget-password')
  }
  
  uEmailErrorMsg(){
    if(!this.UEmail){this.showUEmailErrorMsg = true}else{this.showUEmailErrorMsg = false}
  }
  
  uPasswordErrorMsg(){
    if(!this.UPassword){this.showUPasswordErrorMsg = true}else{this.showUPasswordErrorMsg = false}
  }

 
  login() {
  if(!this.UEmail){this.showUEmailErrorMsg = true}
  if(!this.UPassword){this.showUPasswordErrorMsg = true}
  else{
  const request = {"email": this.UEmail, "password": this.UPassword}
  this.restService.callPostService(this.config.login,request).subscribe((data: any) => {
    // this.router.navigate(['dashboard']);
    this.router.navigateByUrl('/dashboard');
    console.log(data)
  }, error => {
  if (this.restService.handleError(error)) {
    this.loginError = error.error.error
    // Swal.fire("", this.loginError,'error')
  }
},() => {})
;
}
}

closeDialog(){
  this.showDialog=false;
  this.UEmail = "";
  this.UPassword = "";
}
viewDialog(){
  this.showDialog=true;
}


}
