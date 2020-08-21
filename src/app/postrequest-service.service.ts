import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { environment } from '../environments/environment';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import {Observable} from 'rxjs/Rx'

// Import RxJs required methods
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostrequestServiceService {

  url: any;
  user_url: any;
  
  constructor(private http: HttpClient, private datePipe: DatePipe, ) {
    this.url = "http://localhost:8080/homeShopping";
    console.log(environment.api_url);
  
    this.user_url =  environment.api_url + environment.user_api_url;
    console.log(this.user_url);
     

   }


   login(email, password)
   {
     
     console.log("in here", email, password)
     //this.url = "http://localhost:8080/user/login"
   
     


    var body = new HttpParams().set('userName', email).set('password', password)
   
      console.log(body, "is body")
    
      

     //return this.http.post(this.url,{params: params},{headers: new HttpHeaders().set('Content-type','application/json')}) 
     return this.http.post(this.url+"/user/login", body); 
    
    // addstudent (body: Object): Observable<student> {
    //   let bodyString = JSON.stringify(body); // Stringify payload
    //   let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    //   let options       = new RequestOptions({ headers: headers }); // Create a request option

    //   return this.http.post(this.commentsUrl, body, options) // ...using post request
    //                    .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
    //                    .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
   
   
   }

   register(register)
  {
    
    //return this.http.post(this.url,student,{headers: new HttpHeaders().set('Content-type','application/json')}) 
    //this.url = "http://localhost:8080/user/register"
    var date = new Date();
    debugger;
    console.log(this.user_url); 

    //return this.http.post(this.url,register)
    return this.http.post(this.user_url+environment.register_api_url,register, {headers: new HttpHeaders().set('Content-type','application/json')}); 
  }

  email_check(UserEmail)
  {
    return this.http.post(this.user_url+environment.userExist_api_url ,UserEmail,{headers: new HttpHeaders().set('Content-type','application/json')}) 

  }


   getStudents()
   {
    // this.url = "http://localhost:8080/student/get"
    return this.http.get(this.url)
   }

   getProducts()
   {
    //this.url = "http://localhost:8080/user/showProduct"
    return this.http.get(this.url)
   }

   isUserNameValid(userName)
   {
    var body = new HttpParams().set('userName', userName);
   
    console.log(body, "is body")
  
   //return this.http.post(this.url,{params: params},{headers: new HttpHeaders().set('Content-type','application/json')}) 
   return this.http.post(this.url+"/user/userExist", body); 

   }
}
