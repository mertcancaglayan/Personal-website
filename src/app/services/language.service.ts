import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  language: string = 'english';

  constructor() {}

  setLanguage(lang: string): void {
    localStorage.setItem('lang1', lang);
  }
}
