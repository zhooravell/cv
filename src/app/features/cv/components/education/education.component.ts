import {Component, OnInit} from '@angular/core';
import {TranslateService} from '../../../../core/services/translate/translate.service';
import {LanguageService} from '../../../../core/services/language/language.service';
import {Education} from '../../../../core/models/education';
import {EducationService} from '../../../../core/services/education/education.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [
    DatePipe
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent implements OnInit {
  protected education: Education[] = [];
  protected lang: string = '';

  constructor(
    private educationService: EducationService,
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
    this.educationService.get(this.lang).subscribe({
      next: (res) => {
        this.education = res;
      },
      error: (error) => console.error(error),
    });
  }
}
