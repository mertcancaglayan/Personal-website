import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Circle } from '../../../models/Circle.model';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-cursor.component.html',
  styleUrls: ['./custom-cursor.component.scss'],
})
export class CustomCursorComponent implements OnInit {
  circles: Circle[] = [];
  opacity: number = 1;
  public isPointer: boolean = false;
  public coords = { x: 0, y: 0 };

  ngOnInit(): void {
    this.circles = Array.from({ length: 10 }, () => ({
      backgroundColor: '',
      scale: 1,
      x: 0,
      y: 0,
    }));
  }

  @ViewChildren('circle') circleElements!: QueryList<ElementRef>;

  private animationFrame: number | null = null;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.coords.x = event.clientX;
    this.coords.y = event.clientY;

    this.updateCursorStyle();

    if (!this.animationFrame) {
      this.animationFrame = requestAnimationFrame(() => this.animateCircles());
    }
  }

  @HostListener('document:mouseover', ['$event'])
  onMouseOver(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const allowedTags = [
      'A',
      'H1',
      'H2',
      'H3',
      'H4',
      'H5',
      'P',
      'SPAN',
      'path',
      'svg',
      'BUTTON',
      'LI',
      'IMG',
    ];
    const allowedClasses = ['navItem', 'navbarIcon', 'navSocials', 'skillCard'];

    this.isPointer =
      (target && allowedTags.includes(target.tagName)) ||
      allowedClasses.includes(target.className);
  }

  updateCursorStyle() {
    if (this.isPointer) {
      this.opacity = 0;
    } else {
      this.opacity = 1;
    }
  }

  animateCircles(): void {
    let x = this.coords.x;
    let y = this.coords.y;

    this.circleElements.forEach((circleElement, index) => {
      const element = circleElement.nativeElement as HTMLElement;

      element.style.left = `${x - 12}px`;
      element.style.top = `${y - 12}px`;
      element.style.transform = `scale(${this.circles[index].scale})`;

      this.circles[index].scale = (this.circles.length - index) / 8;
      this.circles[index].x = x;
      this.circles[index].y = y;

      const nextCircle = this.circles[index + 1] || this.circles[0];
      x += (nextCircle.x - x) * 0.6;
      y += (nextCircle.y - y) * 0.6;
    });

    this.animationFrame = requestAnimationFrame(() => this.animateCircles());
  }
}
