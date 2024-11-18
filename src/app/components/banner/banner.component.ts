import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ProfileData, Root } from '../../models/ProfileData.model';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit, OnChanges {
  data!: Root;
  profileData!: ProfileData;
  selectedLanguage: 'english' | 'turkish' = 'english';

  constructor(
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.getProfileData();
    this.getLanguage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedLanguage']) {
      this.getProfileData(); 
    }
  }

  getProfileData(): void {
    this.apiService.getData().subscribe((res) => {
      this.data = res;
      if (this.data && this.data.length > 0) {
        this.profileData = this.data[0];
      }
    });
  }

  getLanguage(): void {
    const lang = localStorage.getItem('lang1');
    this.selectedLanguage = lang === 'turkish' ? 'turkish' : 'english';
  }
}
