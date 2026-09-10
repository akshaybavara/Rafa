import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {
  launchDate = new Date();
  
  days: string = '00';
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';
  
  hasLaunched = false;
  private timer: any;

  ngOnInit() {
    // Set launch date to 30 days from now for demonstration
    this.launchDate.setDate(this.launchDate.getDate() + 30);
    this.updateCountdown();
    this.timer = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  private updateCountdown() {
    const now = new Date().getTime();
    const distance = this.launchDate.getTime() - now;

    if (distance < 0) {
      this.hasLaunched = true;
      clearInterval(this.timer);
      return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    this.days = d < 10 ? '0' + d : d.toString();
    this.hours = h < 10 ? '0' + h : h.toString();
    this.minutes = m < 10 ? '0' + m : m.toString();
    this.seconds = s < 10 ? '0' + s : s.toString();
  }
}
