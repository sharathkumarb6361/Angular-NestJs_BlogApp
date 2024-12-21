import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from "../admin/admin.component";

@Component({
  selector: 'app-uploadimage',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet, AdminComponent],
  templateUrl: './uploadimage.component.html',
  styleUrl: './uploadimage.component.css'
})
export class UploadimageComponent {
  uploadForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.uploadForm = this.fb.group({
      regNo: [''], 
    });
  }

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
    }
  }

  onSubmit(): void {
    if (this.uploadForm.valid && this.selectedFile) {
      const formData = new FormData();
      formData.append('regNo', this.uploadForm.get('regNo')?.value);
      formData.append('file', this.selectedFile);

      this.http.post('http://localhost:3000/profimage', formData).subscribe({
        next: (response) => {
          console.log('Upload successful', response);
        },
        error: (error) => {
          console.error('Upload failed', error);
        },
      });
    }
  }
}
