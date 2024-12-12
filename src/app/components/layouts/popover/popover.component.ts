import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../../../models/ProfileData.model';
import { CarouselComponent } from './carousel/carousel.component';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-popover',
  standalone: true,
  imports: [CommonModule, CarouselComponent],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.scss',
})
export class PopoverComponent implements OnInit {
  @Input() projectData?: Project;
  @Output() close = new EventEmitter<void>();
  selectedLanguage: 'english' | 'turkish' = 'english';

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.language$.subscribe((lang) => {
      this.selectedLanguage = lang;
    });
  }

  handleClose() {
    this.close.emit();
  }

  isModalVisible: boolean = false;

  showImages() {
    this.isModalVisible = !this.isModalVisible;
  }
}
