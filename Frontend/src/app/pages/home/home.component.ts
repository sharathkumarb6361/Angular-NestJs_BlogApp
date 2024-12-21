import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent,RouterLink,RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
