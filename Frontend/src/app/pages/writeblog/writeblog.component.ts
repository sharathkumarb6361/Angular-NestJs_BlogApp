import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { ApiserviceService } from '../../services/apiservice.service';
import { NgIf } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-writeblog',
  standalone: true,
  imports: [
    NavBarComponent,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    FormsModule,
    EditorModule,
    
    ToastModule
],
  templateUrl: './writeblog.component.html',
  styleUrls: ['./writeblog.component.css'],
  providers:[MessageService]
})
export class WriteblogComponent {
  text: string = '';
  extractedTitle: string = ''; 
  extractedImage: string = ''; 

  constructor(private api: ApiserviceService,private messageService: MessageService) {}

 
  parseContent(): void {
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.text, 'text/html');

    
    const header = doc.querySelector('h1, h2, h3');
    this.extractedTitle = header ? header.textContent?.trim() || '' : 'Untitled Blog';

    
    const img = doc.querySelector('img');
    this.extractedImage = img ? img.getAttribute('src') || '' : '';

    console.log('Extracted Title:', this.extractedTitle);
    console.log('Extracted Image:', this.extractedImage);
  }


  submitBlog(): void {
    if (!this.text.trim()) {
      alert('Blog content is empty. Please write something!');
      return;
    }

 
    this.parseContent();

    const blogData = {
      title: this.extractedTitle,
      image: this.extractedImage,
      blog: this.text, 
    };

    console.log('Blog Data:', blogData);

    
    this.api.postblog(blogData).subscribe(
      (response) => {
        console.log('Blog submitted successfully:', response);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Blog Uploaded' });
        this.text = ''; 
        this.extractedTitle = '';
        this.extractedImage = '';
      },
      (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Blog not sent' });

        console.error('Error submitting blog:', error);
        
      }
    );
  }
}
