import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-top-btn.component.html',
  styleUrl: './scroll-top-btn.component.scss',
})
export class ScrollTopBtnComponent {
  isVisible: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.scrollY > 200;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
