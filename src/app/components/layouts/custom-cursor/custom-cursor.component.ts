import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-cursor.component.html',
  styleUrls: ['./custom-cursor.component.scss'],
})
export class CustomCursorComponent {
  opacity: number = 1;
  public isPointer: boolean = false;
  public coords = { x: 0, y: 0 };
  public circles = [
    { backgroundColor: '', scale: 1, x: 0, y: 0 },
    { backgroundColor: '', scale: 1, x: 0, y: 0 },
    { backgroundColor: '', scale: 1, x: 0, y: 0 },
    { backgroundColor: '', scale: 1, x: 0, y: 0 },
    { backgroundColor: '', scale: 1, x: 0, y: 0 },
    { backgroundColor: '', scale: 1, x: 0, y: 0 },
    { backgroundColor: '', scale: 1, x: 0, y: 0 },
    { backgroundColor: '', scale: 1, x: 0, y: 0 },
    { backgroundColor: '', scale: 1, x: 0, y: 0 },
    { backgroundColor: '', scale: 1, x: 0, y: 0 },
  ];

  public colors = [
    '#4444dd', // original color
    '#3b3bd1', // a little darker
    '#3232c5', // darker
    '#2929b9', // darker
    '#2020ad', // even darker
    '#1a1aa1', // dark violet-blue
    '#151594', // darker violet-blue
    '#0f0f88', // even darker violet-blue
    '#0a0a7b', // more intense dark violet-blue
    '#05056e', // darkest shade
  ];

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
    const allowedTags = ['A', 'H1', 'H2', 'H3', 'H4', 'H5', 'P', 'SPAN'];

    this.isPointer = target && allowedTags.includes(target.tagName);
  }

  updateCursorStyle() {
    if (this.isPointer) {
      this.opacity = 0.05;
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
      this.circles[index].backgroundColor = this.colors[index];

      const nextCircle = this.circles[index + 1] || this.circles[0];
      x += (nextCircle.x - x) * 0.65;
      y += (nextCircle.y - y) * 0.65;
    });

    this.animationFrame = requestAnimationFrame(() => this.animateCircles());
  }
}
