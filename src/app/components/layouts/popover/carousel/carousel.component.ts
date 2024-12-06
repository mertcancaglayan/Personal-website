import {
  Component,
  Input,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { Project } from '../../../../models/ProfileData.model';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit {
  @Input() projectData?: Project;

  @ViewChild('slider') sliderRef!: ElementRef<HTMLElement>;

  slider!: HTMLElement;

  clickedIndex: number | null = null;

  expandItem(index: number): void {
    this.clickedIndex = this.clickedIndex === index ? null : index;
  }

  ngAfterViewInit(): void {
    this.slider = this.sliderRef?.nativeElement;
    if (!this.slider) return;
  }

  slide(direction: 'next' | 'prev') {
    if (!this.slider) return;

    const sliderElement = this.slider as HTMLElement;
    const slideWidth = sliderElement.clientWidth;
    const maxScrollLeft = sliderElement.scrollWidth - sliderElement.clientWidth;

    if (direction === 'prev') {
      if (sliderElement.scrollLeft === 0) return;
      sliderElement.scrollBy({
        left: -slideWidth,
        behavior: 'smooth',
      });
    } else if (direction === 'next') {
      if (sliderElement.scrollLeft === maxScrollLeft) return;
      sliderElement.scrollBy({
        left: slideWidth,
        behavior: 'smooth',
      });
    }
  }
}
