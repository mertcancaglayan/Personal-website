import { Component } from '@angular/core';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { BannerComponent } from "./components/banner/banner.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, BannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'personal-website';
}
