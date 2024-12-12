import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import {
  Expertise,
  PersonalInfo,
  ProfileData,
  Projects,
} from './models/ProfileData.model';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadData } from './states/profile.actions';
import { CommonModule } from '@angular/common';
import { CustomCursorComponent } from "./components/layouts/custom-cursor/custom-cursor.component";
import { PopoverComponent } from "./components/layouts/popover/popover.component";
import { ScrollTopBtnComponent } from "./components/layouts/scroll-top-btn/scroll-top-btn.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    BannerComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    CommonModule,
    CustomCursorComponent,
    ScrollTopBtnComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'personal-website';
  profileData$: Observable<ProfileData>;
  projectsData?: Projects;
  personalInfo?: PersonalInfo;
  skills: Expertise[] = [];
  private subscription = new Subscription();

  constructor(private store: Store<{ profile: ProfileData }>) {
    this.profileData$ = this.store.select((state) => state.profile);
  }

  ngOnInit(): void {
    this.loadProfileData();
  }

  loadProfileData(): void {
    this.store.dispatch(loadData());
    this.subscription.add(
      this.profileData$.subscribe((profileData) => {
        if (profileData && profileData.profile && profileData.profile[0]) {
          this.skills = profileData.profile[0].expertise || [];
          this.personalInfo = profileData.profile[0].personalInfo;
          this.projectsData = profileData.profile[0].projects;
        } else {
          console.error('No profile data available');
          this.skills = [];
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
