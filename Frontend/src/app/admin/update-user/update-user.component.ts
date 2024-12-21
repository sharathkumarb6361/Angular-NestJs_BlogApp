import { Component } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [AdminComponent,RouterOutlet,FormsModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {
  constructor(private api:ApiService ){}
  updateuser(user: any) {
    console.log('Updating user:', user);
    
    this.api.UpdateUser(user.regno, user).subscribe({
      next: (response) => {
        console.log('User update response:', response);
        alert('User updated successfully!');
      },
      error: (error) => {
        console.error('Error updating user:', error);
        alert('Failed to update user. Please try again.');
      }
    });
  
}
}