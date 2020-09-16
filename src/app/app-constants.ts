import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Config {
private protocall = "https://";
private server = "run.mocky.io/v3/";

private serverApi = this.protocall + this.server;

//   example
   public login: string = this.serverApi + "3a219b0b-ee45-4182-8915-8064c744c1b3";
  public permission_login: string = this.serverApi + "auth/token/";

  constructor() {

  }

  public Configure() {

  }
}
