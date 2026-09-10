import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-reveal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-reveal.component.html',
  styleUrls: ['./product-reveal.component.scss']
})
export class ProductRevealComponent implements AfterViewInit {
  @ViewChild('revealSection') revealSection!: ElementRef;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (this.revealSection) {
      observer.observe(this.revealSection.nativeElement);
    }
  }
}
