import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  language: string = 'EN'; 

  constructor() {}

  setLanguage(lang: string): void {
    this.language = lang;
    console.log(this.language);
    
  }

  getLanguage(): string {
    return this.language;
  }
}
