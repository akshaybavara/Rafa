import { Component, OnInit, OnDestroy, signal, HostListener } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NatureSectionComponent } from './components/nature-section/nature-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, NatureSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  targetDate = new Date();

  days = signal<string>('13');
  hours = signal<string>('08');
  minutes = signal<string>('08');
  seconds = signal<string>('49');

  currentYear = new Date().getFullYear();
  private timer: any;

  // Modal & Form State
  isModalOpen = signal<boolean>(false);
  formSuccess = signal<boolean>(false);
  earlyAccessForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.earlyAccessForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    this.targetDate.setDate(this.targetDate.getDate() + 13);
    this.targetDate.setHours(this.targetDate.getHours() + 8);
    this.targetDate.setMinutes(this.targetDate.getMinutes() + 8);
    this.targetDate.setSeconds(this.targetDate.getSeconds() + 49);
    this.startCountdown();
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  startCountdown() {
    this.timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(this.timer);
        this.days.set('00');
        this.hours.set('00');
        this.minutes.set('00');
        this.seconds.set('00');
        return;
      }

      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      this.days.set(d < 10 ? '0' + d : d.toString());
      this.hours.set(h < 10 ? '0' + h : h.toString());
      this.minutes.set(m < 10 ? '0' + m : m.toString());
      this.seconds.set(s < 10 ? '0' + s : s.toString());
    }, 1000);
  }

  openModal() {
    this.isModalOpen.set(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.formSuccess.set(false);
    this.earlyAccessForm.reset();
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    if (this.isModalOpen()) {
      this.closeModal();
    }
  }

  onSubmit() {
    if (this.earlyAccessForm.valid) {
      const { name, mobile, email } = this.earlyAccessForm.value;
      
      const message = `Hello RAFA Team,\n\nI would like to get early access / launch updates.\n\nName: ${name}\nMobile: ${mobile}\nEmail: ${email}\n\nPlease notify me when RAFA launches.\n\nThank you.`;
      
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/919627842153?text=${encodedMessage}`;
      
      this.formSuccess.set(true);
      
      // Delay slightly so user sees success message before tab switches
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        this.closeModal();
      }, 1000);
    } else {
      this.earlyAccessForm.markAllAsTouched();
    }
  }
}
