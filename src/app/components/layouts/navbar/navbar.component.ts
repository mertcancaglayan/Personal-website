import { Component, ElementRef, ViewChild } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isMenuOpen: boolean = false;

  constructor(private languageService: LanguageService) {}

  changeLanguage(lang: string): void {
    this.languageService.setLanguage(lang);
    window.location.reload();
  }

  scrollTo(id: string): void {
    this.isMenuOpen = !this.isMenuOpen;

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
