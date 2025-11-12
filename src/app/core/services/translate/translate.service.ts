import {effect, Injectable, signal} from '@angular/core';
import {AppLocale, LanguageService} from '../language/language.service';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  private translations: Record<AppLocale, Record<string, string>> = {
    en: {
      experience: 'Experience',
      education: 'Education',
    },
    uk: {
      experience: 'Досвід',
      education: 'Освіта',
    }
  };

  constructor(private languageService: LanguageService) {
  }

  translate(key: string): string {
    const lang = this.languageService.currentLocale;
    return this.translations[lang][key] ?? key;
  }
}
