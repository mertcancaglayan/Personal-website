import { Component, Input, OnInit } from '@angular/core';
import { Projects } from '../../models/ProfileData.model';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss'],
})
export class ProjectsSectionComponent implements OnInit {
  @Input() projectsData?: Projects;

  ngOnInit(): void {}
}
