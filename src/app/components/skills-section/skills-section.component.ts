import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Expertise, ProfileData } from '../../models/ProfileData.model';
import { CommonModule } from '@angular/common';
import { loadData } from '../../states/profile.actions';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss'],
})
export class SkillsSectionComponent implements OnInit {
  @Input() skills?: Expertise[];

  ngOnInit(): void {}
}
