import { Component, Input, OnInit } from '@angular/core';
import { PersonalInfo } from '../../models/ProfileData.model';
import { CommonModule } from '@angular/common';

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

  ngOnInit(): void {
    this.getLanguage();
  }

  getLanguage(): void {
    const lang = localStorage.getItem('lang1');
    this.selectedLanguage = lang === 'turkish' ? 'turkish' : 'english';
  }
}
