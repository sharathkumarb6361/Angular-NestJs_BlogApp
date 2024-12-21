import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SigninComponent } from "./pages/signin/signin.component";
import { NgModule } from '@angular/core';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { BlogComponent } from "./pages/blog/blog.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SigninComponent, NavBarComponent, BlogComponent,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Internship';
}
