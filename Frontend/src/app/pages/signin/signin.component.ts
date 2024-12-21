import { NgClass } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import {FormsModule, NgModel} from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button'
import { Router,RouterOutlet } from '@angular/router';
import { ApiserviceService } from '../../services/apiservice.service';
import { User } from '../../Models/Users';
import {find} from 'rxjs'
import { consumerBeforeComputation } from '@angular/core/primitives/signals';
 @Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FloatLabelModule,FormsModule,InputTextModule,CalendarModule,ButtonModule,RouterOutlet],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
 constructor(private apiservice:ApiserviceService,private router:Router){}
// user:User | undefined
showIcon:boolean=true;
date:Date | undefined;
center:string='center';
name:string=''
usn:string=''
dob:Date|null=null;
Reg_No:null | undefined;
password:string='';
submitForm(contactform:any){
 
 console.log(contactform)
 
  this.apiservice.getUserByID(contactform.regno).subscribe(res=>{
    console.log(res.data)
 if(contactform.regno === res.data.regno && contactform.password===res.data.password && res.data.role==='admin'){
  this.router.navigate(['/adduser']);
}
 else if(res.data.password === contactform.password && res.data.regno === contactform.regno && res.data.role==='student' ){
    this.router.navigate(['/home'])
    console.log("password is correct")
  
    sessionStorage.setItem('uid',contactform.regno)
    sessionStorage.setItem('loggedin','1');
  }
  else{
    this.router.navigate([''])
    console.log("password is incorrect") 
    
  }
    
  })
}


}
