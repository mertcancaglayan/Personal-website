import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Expertise, ProfileData, Root } from '../../models/ProfileData.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss',
})
export class SkillsSectionComponent implements OnInit {
  data!: Root;
  skills!: Expertise[];

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.getProfileData();
  }

  getProfileData(): void {
    this.apiService.getData().subscribe((res) => {
      this.data = res;
      if (this.data && this.data.length > 0) {
        this.skills = this.data[0].expertise;
      }
    });
  }
}
