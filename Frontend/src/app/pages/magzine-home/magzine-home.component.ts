import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../services/apiservice.service';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-magzine-home',
  standalone: true,
  imports: [NavBarComponent,NgFor],
  templateUrl: './magzine-home.component.html',
  styleUrl: './magzine-home.component.css'
})
export class MagzineHomeComponent implements OnInit{
  constructor(private api:ApiserviceService,private router:Router){}
  magzine:any;
ngOnInit(): void {
  this.api.getMagzines().subscribe(data=>{
    console.log(data);
    this.magzine=data;

  })
}
navigateToRead(value:any){
  this.router.navigate(['/magRead']);
  sessionStorage.setItem('magId',value)
}

}
