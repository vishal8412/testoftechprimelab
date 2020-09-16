import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  constructor(private http: HttpClient) { }

  private getHeaders():Options{
    return {
      headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
    })}; 
  }

  public callPostService(url,param):Observable<HttpEvent<any>>{
    return this.http.post<any>(url,JSON.stringify(param),this.getHeaders());
  }

  public callGetService(url):Observable<HttpEvent<any>>{
    return this.http.get<any>(url,this.getHeaders());
  } 
  
  public handleError(error):boolean{
    return true;
  }

}

export class ResponseFormat{
  error:string;
  message:string;
  data:any;
  status:string;
}

class Options{
   headers?: HttpHeaders | { [header: string]: string | string[]; };
   observe?: "body";
   params?: HttpParams | { [param: string]: string | string[]; };
   reportProgress?: boolean;
   responseType?: "json";
   withCredentials?: boolean;
}

