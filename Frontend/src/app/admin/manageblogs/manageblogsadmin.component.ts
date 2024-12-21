import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ApiserviceService } from '../../services/apiservice.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { NgFor } from '@angular/common';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-manageblogs',
  standalone: true,
  imports: [NgFor,RouterOutlet,AdminComponent],
  templateUrl: './manageblogsadmin.component.html',
  styleUrl: './manageblogsadmin.component.css'
})
export class ManageblogsComponentAdmin {
  id:any;
  res:any;
  cent:string="center";
  constructor(private route:ActivatedRoute,private api:ApiserviceService){}
 ngOnInit(): void {
  this.loadData()
 }
 loadData(){


   this.api.getblog().subscribe(data=>{
    console.log(data)
    this.res=data;
    console.log(this.res.data)
   })
 }



 deleteBlog(id1:number){
  console.log(id1)
  

  return this.api.deletePostById(id1)
  
  
 }

}
