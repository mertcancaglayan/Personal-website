import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../models/ProfileData.model';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input() projectData?: Project;
  selectedLanguage: 'english' | 'turkish' = 'english';

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.language$.subscribe((lang) => {
      this.selectedLanguage = lang;
    });
  }
}
