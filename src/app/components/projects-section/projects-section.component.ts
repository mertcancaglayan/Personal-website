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
  animations: [
    trigger('appear', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate('0.3s ease-in', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
  ],
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
    return key
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/Projects/g, ' Projects')
      .toLowerCase()
      .replace(/\b\w/g, (match) => match.toUpperCase())
      .trim();
  }
}
