import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { ApiService } from '../service/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [RouterOutlet,AdminComponent,FormsModule],
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.css'
})
export class DeleteUserComponent {
constructor(private api:ApiService){}

deleteuser(value:any) {
  console.log(value.usn)
  this.api.DeleteUse(value.usn)
}


}
