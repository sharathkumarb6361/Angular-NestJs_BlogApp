import { Component } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [AdminComponent, RouterOutlet, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'], 
})
export class AddUserComponent {
  constructor(private api:ApiService) {}

  submitForm(fv: any) {
    console.log('Form Value:', fv);

    this.api.registerUser(fv)

  }
}
