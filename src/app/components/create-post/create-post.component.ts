import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [FormsModule], // Add FormsModule here
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  postContent: string = '';
  selectedFontSize: string = '16px';
  selectedFontStyle: string = 'normal';
  fontSizes: string[] = ['12px', '14px', '16px', '18px', '20px'];
  fontStyles: string[] = ['normal', 'italic', 'bold'];

  applyFontSize() {
    document.execCommand('fontSize', false, this.selectedFontSize);
  }

  applyFontStyle() {
    document.execCommand('fontStyle', false, this.selectedFontStyle);
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const img = document.createElement('img');
      img.src = e.target.result;
      document.querySelector('.editor')?.appendChild(img);
    };
    reader.readAsDataURL(file);
  }

  uploadPost() {
    console.log('Post uploaded:', this.postContent);
    // Logic to upload the post
  }

  cancelPost() {
    this.postContent = '';
    console.log('Post creation canceled');
  }
}