import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { ApiserviceService } from '../../services/apiservice.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NavBarComponent, NgFor],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  data1: any = {}; 

  constructor(private api: ApiserviceService, private router: Router) {}

  ngOnInit(): void {
    this.api.getblog().subscribe({
      next: (res) => {
        console.log(res);
        this.data1 = res;
        console.log(this.data1.data);
      },
      error: (err) => {
        console.error('Error fetching blogs:', err);
      }
    });
  }

  navigateToBlog(value: any): void {
    this.router.navigate(['/fullblog']);
    console.log(value);
    sessionStorage.setItem('id', value);
  }
}
