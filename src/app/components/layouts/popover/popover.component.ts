import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../../../models/ProfileData.model';

@Component({
  selector: 'app-popover',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.scss',
})
export class PopoverComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.projectData);
  }
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
