import { Component, OnInit } from '@angular/core';

import { Validators, FormControl, FormGroup} from "@angular/forms";
import {PostrequestServiceService} from '../postrequest-service.service';
import { Router } from '@angular/router'; 
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data: any;

  constructor(private postrequest: PostrequestServiceService, private router: Router, private storage: Storage,) { }
  

  ngOnInit() {
  }

  



  SignupForm = new FormGroup({
    
    password : new FormControl('',[Validators.required,Validators.minLength(4)]),
    userName : new FormControl('', [Validators.required, Validators.minLength(4)])

        });



  

  validate()
  {
    
    
    
    var date = Date.now();
    var register =  {
      registerId: 1,
      password: this.SignupForm.get('password').value,
      userName: this.SignupForm.get('userName').value,
      
      //role:  this.SignupForm.get('role').value
    }

    console.log("in validate");

    if(register.userName.length >= 4)
    {
      (<HTMLElement>document.querySelector("#errorUserName")).style.display="none";
    }else{
      (<HTMLElement>document.querySelector("#errorUserName")).style.display="block";
      return false;
    }


    // if(!(this.emailPattern.test(String(register.email).toLocaleLowerCase())))
    // {
    //   (<HTMLElement>document.querySelector("#errorEmail")).style.display="block";
    //   return false;
    // }else{
    // (<HTMLElement>document.querySelector("#errorEmail")).style.display="none";
    
    // }

    if(register.password.length > 6)
    {
      (<HTMLElement>document.querySelector("#errorPassword")).style.display="none";
    }else{
      (<HTMLElement>document.querySelector("#errorPassword")).style.display="block";
      return false;
    }
   

    // var date = new Date();
    // console.log(this.datePipe.transform(date,"yyyy-MM-dd'T'HH:mm:ss.SSSZZZZ").replace("GMT",""), "==DATE OBJ"); 

    //console.log(this.SignupForm.value, "inside validate");

    console.log("in validate 11");
    console.log(register);
    this.postrequest.login(register.userName, register.password)
    .subscribe(data =>   this.data =  data,
     error => console.log("error"));
     console.log("DATA=>", this.data);
     if(this.data.response == 100)
     {    
      (<HTMLElement>document.querySelector("#login_error_msg")).style.display="block";
     }else{
      this.storage.set('uname','123');
      (<HTMLElement>document.querySelector("#login_error_msg")).style.display="none";
      

     }
     
  }

  signUp()
  {
    this.router.navigate(['register']);
  }

}
