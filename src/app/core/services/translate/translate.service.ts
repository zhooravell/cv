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
      year: 'year',
      years: 'years',
      years_many: 'years',
      month: 'month',
      months: 'months',
      months_many: 'months',
      at: 'at',
    },
    uk: {
      experience: 'Досвід',
      education: 'Освіта',
      year: 'рік',
      years: 'роки',
      years_many: 'років',
      month: 'місяць',
      months: 'місяці',
      months_many: 'місяців',
      at: 'в',
    }
  };

  constructor(private languageService: LanguageService) {
  }

  translate(key: string): string {
    const lang = this.languageService.currentLocale;
    return this.translations[lang][key] ?? key;
  }
}
