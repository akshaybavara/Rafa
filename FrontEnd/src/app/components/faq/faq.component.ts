import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  faqs = [
    {
      question: 'RAFA क्या है?',
      answer: 'RAFA Natural Mehendi Hair Colour एक natural-inspired hair colour experience है, designed for men and women.',
      isOpen: false
    },
    {
      question: 'RAFA किसके लिए है?',
      answer: 'RAFA पुरुषों और महिलाओं दोनों के लिए बनाया जा रहा है।',
      isOpen: false
    },
    {
      question: 'RAFA कब लॉन्च होगा?',
      answer: 'हम जल्द ही लॉन्च कर रहे हैं। Launch countdown देखें और updates के लिए notify करें।',
      isOpen: false
    },
    {
      question: 'क्या मैं लॉन्च की जानकारी पा सकता हूँ?',
      answer: 'हाँ, Notify Me form के माध्यम से अपना email submit कर सकते हैं।',
      isOpen: false
    },
    {
      question: 'क्या RAFA natural ingredients का उपयोग करता है?',
      answer: 'Product-specific ingredient information को official product launch details के अनुसार update किया जाएगा।',
      isOpen: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
