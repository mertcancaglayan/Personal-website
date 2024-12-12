import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
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
    this.languageService.language$.subscribe((lang) => {
      this.selectedLanguage = lang;
    });
  }

  changeLanguage(lang: 'english' | 'turkish'): void {
    this.languageService.setLanguage(lang);
  }

  scrollTo(id: string): void {
    this.isMenuOpen = false;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
