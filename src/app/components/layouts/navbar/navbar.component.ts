import { Component, ElementRef, ViewChild } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public show = false;
  public left = '0px';
  public top = '0px';
  public scale = 'scale(1)';
  private firstHover = false;

  constructor(private languageService: LanguageService) {}

  changeLanguage(lang: string): void {
    this.languageService.setLanguage(lang);
    window.location.reload();
  }
  
  @ViewChild('navbar') navbarElement!: ElementRef;

  onMouseMove(event: MouseEvent): void {
    this.show = true;
    const x = event.clientX;
    const y = event.clientY;

    if (!this.firstHover) {
      this.firstHover = true;
      this.left = `${x}px`;
      this.top = `${y}px`;
    } else {
      this.left = `${x - 10}px`;
      this.top = `${y - 10}px`;
    }
  }

  onMouseOut(): void {
    this.show = false;
  }

  onItemHover(isHovering: boolean): void {
    this.scale = isHovering ? 'scale(2)' : 'scale(1)';
  }
}
