import { Component, Input, OnInit } from '@angular/core';
import { Projects } from '../../models/ProfileData.model';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss'],
})
export class ProjectsSectionComponent implements OnInit {
  @Input() projectsData?: Projects;

  projectCategories: { key: string; label: string }[] = [];

  ngOnInit(): void {
    if (this.projectsData) {
      this.projectCategories = this.generateCategories(this.projectsData);
    }
  }

  generateCategories(data: Projects): { key: string; label: string }[] {
    return Object.keys(data).map((key) => ({
      key,
      label: this.formatLabel(key),
    }));
  }

  formatLabel(key: string): string {
    return key.replace(/Projects/g, ' Projects').trim();
  }
}
