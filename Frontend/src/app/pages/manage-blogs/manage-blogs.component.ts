import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../../services/apiservice.service';
import { NgFor } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-manage-blogs',
  standalone: true,
  imports: [NgFor,ToastModule],
  templateUrl: './manage-blogs.component.html',
  styleUrl: './manage-blogs.component.css',
  providers:[MessageService]
})
export class ManageBlogsComponent implements OnInit{
  id:any;
  res:any;
  cent:string="center";
  constructor(private route:ActivatedRoute,private api:ApiserviceService,private messageService: MessageService){}
 ngOnInit(): void {
  this.loadData()
 }
 loadData(){
  this.id=this.route.snapshot.paramMap.get('profid1')!;
   console.log(this.id)

   this.api.getblogsbyid(this.id).subscribe(data=>{
    console.log(data)
    this.res=data;
   })
 }



 deleteBlog(id1:number){
  console.log(id1)
  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Blog deleted' });

  return this.api.deletePostById(id1)
  
  
 }
}
