import { Component, OnInit } from '@angular/core';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ApiserviceService } from '../../services/apiservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SidebarModule,ButtonModule,RouterLink,RouterOutlet,RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{

  constructor(private api:ApiserviceService,private router:Router){}
sidebarVisible2:boolean=false;
userId:any;
name:string='';
reg_num:string='';
branch:string='';
profid:any=0;
info:any
ngOnInit(): void {
  this.userId =sessionStorage.getItem('uid')
  this.api.getUserByID(this.userId).subscribe((res:any)=>{
      
      this.profid=res.data.profileid;
      sessionStorage.setItem('pid',this.profid)
      this.name=res.data.name;
      this.reg_num=res.data.regno;
      this.branch=res.data.branch;
      
    }
  )
  
this.api.getImageUrlById(this.userId).subscribe((data:any)=>{
  console.log(data)
  this.info=data;
})

}
logout(){
  this.router.navigate([''])
  console.log("hello")
}
nav(profid1:number)
{
   this.router.navigate(['/manage',profid1])
}

}
