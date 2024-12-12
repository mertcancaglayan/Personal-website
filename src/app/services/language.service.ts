import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<'english' | 'turkish'>(
    'english'
  );
  language$ = this.languageSubject.asObservable();

  constructor() {
    this.languageSubject.next(this.getLanguage());
  }

  setLanguage(lang: 'english' | 'turkish'): void {
    localStorage.setItem('lang1', lang);
    this.languageSubject.next(lang); 
  }

  getLanguage(): 'english' | 'turkish' {
    if (typeof window !== 'undefined' && window.localStorage) {
      const lang = localStorage.getItem('lang1');
      return lang === 'turkish' || lang === 'english' ? lang : 'english';
    } else {
      return 'english';
    }
  }
}
