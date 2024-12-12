import { Component, Input, OnInit } from '@angular/core';
import { Expertise } from '../../models/ProfileData.model';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { NavbarElementsMap } from '../../models/navbar-elements.model';
import { navbarElements } from '../../states/navbar.state';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss'],
})
export class SkillsSectionComponent implements OnInit {
  @Input() skills?: Expertise[];
  selectedLanguage: 'english' | 'turkish' = 'english';
  navbarLabels: NavbarElementsMap = navbarElements;


  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.language$.subscribe((lang) => {
      this.selectedLanguage = lang;
    });
  }
}
