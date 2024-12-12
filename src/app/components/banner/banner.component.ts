import { Component, Input, OnInit } from '@angular/core';
import { PersonalInfo } from '../../models/ProfileData.model';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  @Input() personalInfo?: PersonalInfo;
  selectedLanguage: 'english' | 'turkish' = 'english';

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.language$.subscribe((lang) => {
      this.selectedLanguage = lang;
    });
  }
}
