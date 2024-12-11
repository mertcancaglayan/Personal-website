import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarElementsMap } from '../../../models/navbar-elements.model';
import { navbarElements } from '../../../states/navbar.state';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isMenuOpen: boolean = false;
  selectedLanguage: 'english' | 'turkish' = 'english';
  navbarLabels: NavbarElementsMap = navbarElements;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.getLanguage();
  }

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

  getLanguage(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const lang = localStorage.getItem('lang1');
      this.selectedLanguage = lang === 'turkish' ? 'turkish' : 'english';
    } else {
      this.selectedLanguage = 'english';
    }
  }
}
