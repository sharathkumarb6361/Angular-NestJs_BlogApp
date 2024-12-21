import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ApiserviceService } from '../../services/apiservice.service';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-fullblog',
  standalone: true,
  imports: [RouterOutlet,  NavBarComponent,NgIf],
  templateUrl: './fullblog.component.html',
  styleUrls: ['./fullblog.component.css'] 
})
export class FullblogComponent implements OnInit {
  blog: any={}; 
  title:any;

  constructor(private route: ActivatedRoute, private api: ApiserviceService) {}

  ngOnInit(): void {
  
    const blogId = sessionStorage.getItem('id');
    console.log('Blog ID:', blogId);

    if (blogId) {
      
      this.api.getblogbyid(blogId).subscribe(
        (data: any) => {
          console.log('Raw Blog Data:', data);
          this.blog = data;

          
         
        },
        (error) => {
          console.error('Error fetching blog data:', error);
        }
      );
    }
  }

  
  decodeHtmlEntities(encodedHtml: string): string {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = encodedHtml;
    return textarea.value;
  }
}
