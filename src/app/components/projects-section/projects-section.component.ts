import { Component, OnInit } from '@angular/core';
import { Projects, Root } from '../../models/ProfileData.model';
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
  data!: Root;
  projectsData!: Projects;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getProjectsData();
    console.log(this.projectsData);
  }

  getProjectsData() {
    this.apiService.getData().subscribe((res) => {
      this.data = res;
      if (this.data && this.data.length > 0) {
        this.projectsData = this.data[0].projects;
      }
    });
  }
}
