import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Project, Projects } from '../../../models/ProfileData.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.projectData?.expertise);
  }
  @Input() projectData?: Project;
}
