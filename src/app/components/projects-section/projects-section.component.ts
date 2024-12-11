import { Component, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Project, Projects } from '../../models/ProfileData.model';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../layouts/card/card.component';
import { PopoverComponent } from '../layouts/popover/popover.component';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, CardComponent, PopoverComponent],
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss'],
})
export class ProjectsSectionComponent implements OnInit, OnDestroy {
  @Input() projectsData?: Projects;
  selectedProject?: Project;
  isPopoverVisible: boolean = false;

  projectCategories: { key: string; label: string }[] = [];

  private wheelListener?: () => void;
  private touchMoveListener?: () => void;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    if (this.projectsData) {
      this.projectCategories = this.generateCategories(this.projectsData);
    }
  }

  disableScroll() {
    this.wheelListener = this.renderer.listen('window', 'wheel', (event) =>
      event.preventDefault()
    );
    this.touchMoveListener = this.renderer.listen(
      'window',
      'touchmove',
      (event) => event.preventDefault()
    );
  }

  enableScroll() {
    if (this.wheelListener) this.wheelListener();
    if (this.touchMoveListener) this.touchMoveListener();
  }

  ngOnDestroy(): void {
    this.enableScroll();
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
    document.body.style.overflow = 'hidden';
  }

  closePopover() {
    this.isPopoverVisible = false;
    this.selectedProject = undefined;
    document.body.style.overflow = '';
  }
}
