import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../services/apiservice.service';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-magzine-read',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './magzine-read.component.html',
  styleUrl: './magzine-read.component.css'
})
export class MagzineReadComponent implements OnInit{
  magid:any;
  constructor(private api:ApiserviceService){}
ngOnInit(): void {
 let magid=sessionStorage.getItem('magId');
  this.api.getMagbyId(magid).subscribe(data=>
  {
    console.log(data);
  }
  )
}

}
