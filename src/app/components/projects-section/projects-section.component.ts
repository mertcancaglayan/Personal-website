import { Component, Input, OnInit } from '@angular/core';
import { Project, Projects } from '../../models/ProfileData.model';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { CardComponent } from '../layouts/card/card.component';
import { PopoverComponent } from '../layouts/popover/popover.component';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, CardComponent, PopoverComponent],
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss'],
})
export class ProjectsSectionComponent implements OnInit {
  @Input() projectsData?: Projects;
  selectedProject?: Project;
  isPopoverVisible = false;

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

  openPopover(project: Project) {
    this.selectedProject = project;
    this.isPopoverVisible = true;
  }

  closePopover() {
    this.isPopoverVisible = false;
    this.selectedProject = undefined;
  }
}
