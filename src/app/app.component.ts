import { Component } from '@angular/core';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { BannerComponent } from "./components/banner/banner.component";
import { SkillsSectionComponent } from "./components/skills-section/skills-section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, BannerComponent, SkillsSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'personal-website';
}
