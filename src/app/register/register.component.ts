import { Component, OnInit } from '@angular/core';



import { Validators, FormControl, FormGroup} from "@angular/forms";
import {PostrequestServiceService} from '../postrequest-service.service';
import { Router } from '@angular/router'; 
import { DatePipe } from '@angular/common';

import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from '@ionic/angular';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  implements OnInit {
 data: any;

  constructor(private postrequest: PostrequestServiceService, private router: Router, 
    private datePipe: DatePipe)  { 
    
console.log("constructor");
    
    
  }




  
  
   emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
   contactPattern=  /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

  SignupForm = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.pattern(this.emailPattern)]),
    password : new FormControl('',[Validators.required,Validators.minLength(4)]),
    userName : new FormControl('', [Validators.required, Validators.minLength(4)]),
    contactNumber: new FormControl('', [Validators.required,Validators.pattern(this.contactPattern)])

        });



  ngOnInit() {
    
  }

  validate()
  {
    
    var emailval = this.SignupForm.get('email').value

    var email = this.checkEmail();


    var date = Date.now();
    var register =  {
      //registerId: 1,
      email: this.SignupForm.get('email').value,
      password: this.SignupForm.get('password').value,
      userName: this.SignupForm.get('userName').value,
      contactNumber: this.SignupForm.get('contactNumber').value,
      createdAt: this.datePipe.transform(date,"yyyy-MM-dd'T'HH:mm:ss.SSSZZZZ").replace("GMT",""),
      modifiedAt:this.datePipe.transform(date,"yyyy-MM-dd'T'HH:mm:ss.SSSZZZZ").replace("GMT",""),
      status: 200
      //role:  this.SignupForm.get('role').value
    }

   
      

    

    if(register.userName.length >= 4)
    {
      (<HTMLElement>document.querySelector("#errorUserName")).style.display="none";
    }else{
      (<HTMLElement>document.querySelector("#errorUserName")).style.display="block";
      return false;
    }


    if(!(this.emailPattern.test(String(register.email).toLocaleLowerCase())))
    {
      (<HTMLElement>document.querySelector("#errorEmail")).style.display="block";
      return false;
    }else{
    (<HTMLElement>document.querySelector("#errorEmail")).style.display="none";
    
    }

    if(register.password.length > 6)
    {
      (<HTMLElement>document.querySelector("#errorPassword")).style.display="none";
    }else{
      (<HTMLElement>document.querySelector("#errorPassword")).style.display="block";
      return false;
    }


    // if(!(this.contactPattern.test(String(register.contactNumber.toLocaleLowerCase()))))
    // {
    //   (<HTMLElement>document.querySelector("#errorContact")).style.display="block";
    //   return false;
    // }else{
    // (<HTMLElement>document.querySelector("#errorContact")).style.display="none";
    
    // }


   

    // var date = new Date();
    // console.log(this.datePipe.transform(date,"yyyy-MM-dd'T'HH:mm:ss.SSSZZZZ").replace("GMT",""), "==DATE OBJ"); 

    //console.log(this.SignupForm.value, "inside validate");
    console.log(register);
    this.postrequest.register(register)
    .subscribe(data =>   this.data =  data,
     error => console.log("error"));
     console.log("DATA=>", this.data, this.data.message, "Response ",this.data.statusCode)
     
  }


  checkEmail()
  {
    
    console.log("checkEmail");
    var emailval = this.SignupForm.get('email').value
    if(!(this.emailPattern.test(String(emailval).toLocaleLowerCase())))
    {
      (<HTMLElement>document.querySelector("#errorEmail")).style.display="block";
      return false;
    }else{
    (<HTMLElement>document.querySelector("#errorEmail")).style.display="none";
    
    }

    var email =  {

      email: emailval
    }
      
    this.postrequest.email_check(email)
    .subscribe(data =>  this.data =  data, 
     error => console.log("error"));

     console.log("DATA=>", this.data)
     
     return true;

  
  }

  checkNumber()
  {

    var contactVal = this.SignupForm.get('contactNumber').value
    if(!(this.contactPattern.test(String(contactVal).toLocaleLowerCase())))
    {
      (<HTMLElement>document.querySelector("#errorContact")).style.display="block";
      return false;
    }else{
    (<HTMLElement>document.querySelector("#errorContact")).style.display="none";
    
    }

  }

  signIn()
  {
    console.log("login");
    this.router.navigate(['login']);
  }

  isUserNameValid()
  {
    var userName =  this.SignupForm.get('userName').value
    this.postrequest.isUserNameValid(userName)
    .subscribe(data =>  this.data =  data, 
     error => console.log("error"));

     if(this.data)
     {
           if(!(this.data.response == 200))
           {
            
            (<HTMLElement>document.querySelector("#userNameInvalid")).style.display="none";
                
           }else{
            (<HTMLElement>document.querySelector("#userNameInvalid")).style.display="block";
           }
     }
  }

  geoLocationWatch(){
    Geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude)
      alert(resp.coords.longitude);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  
     let watch = Geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
    }
  

}
