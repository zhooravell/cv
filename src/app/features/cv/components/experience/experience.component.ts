import {Component, OnInit} from '@angular/core';
import {ExperienceService} from '../../../../core/services/experience/experience.service';
import {Experience} from '../../../../core/models/experience';
import {DatePipe} from '@angular/common';
import {LanguageService} from '../../../../core/services/language/language.service';
import {TranslateService} from '../../../../core/services/translate/translate.service';

@Component({
  selector: 'app-experience',
  imports: [
    DatePipe,
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements OnInit {
  protected experience: Experience[] = [];
  protected lang: string = '';

  constructor(
    private experienceService: ExperienceService,
    private languageService: LanguageService,
    protected translateService: TranslateService,
  ) {
  }

  ngOnInit(): void {
    this.lang = this.languageService.currentLocale;
    this.load();
    this.languageService.locale$.subscribe(lang => {
      this.lang = lang;
      this.load()
    });
  }

  private load() {
    this.experienceService.get(this.lang).subscribe({
      next: (res) => {
        this.experience = res;
      },
      error: (error) => console.error(error),
    });
  }

  diffInYearsAndMonths(from: string, to: string | null): string {
    const start = new Date(from);
    const end = to ? new Date(to || '') : new Date();

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    let parts: string[] = [];
    if (years > 0) {
      parts.push(`${years} ${this.plural(years, this.translateService.translate('year'), this.translateService.translate('years'), this.translateService.translate('years_many'))}`);
    }

    if (months > 0) {
      parts.push(`${months} ${this.plural(months, this.translateService.translate('month'), this.translateService.translate('months'), this.translateService.translate('months_many'))}`);
    }

    return parts.join(' ');
  }

  plural(value: number, one: string, few: string, many: string): string {
    const mod10 = value % 10;
    const mod100 = value % 100;

    if (mod10 === 1 && mod100 !== 11) {
      return one;
    }

    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
      return few;
    }

    return many;
  }
}
