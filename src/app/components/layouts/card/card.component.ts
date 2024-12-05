import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Project } from '../../../models/ProfileData.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() projectData?: Project;
}
