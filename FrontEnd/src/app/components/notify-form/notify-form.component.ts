import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-notify-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notify-form.component.html',
  styleUrls: ['./notify-form.component.scss']
})
export class NotifyFormComponent {
  email = '';
  isSubmitted = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.isSubmitted = true;
      // In a real app, send to backend here
    }
  }
}
