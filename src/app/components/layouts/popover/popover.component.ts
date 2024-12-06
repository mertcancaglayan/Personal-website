import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../../models/ProfileData.model';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'app-popover',
  standalone: true,
  imports: [CommonModule, CarouselComponent],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.scss',
})
export class PopoverComponent {
  @Input() projectData?: Project;
  @Output() close = new EventEmitter<void>();

  handleClose() {
    this.close.emit();
  }

  isModalVisible: boolean = false;

  showImages() {
    this.isModalVisible = !this.isModalVisible;
  }
}
