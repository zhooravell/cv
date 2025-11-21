import {Component, OnInit} from '@angular/core';
import {ExperienceComponent} from '../experience/experience.component';
import {BioComponent} from '../bio/bio.component';
import {EducationComponent} from '../education/education.component';
import {LanguageService} from '../../../../core/services/language/language.service';
import {Title} from '@angular/platform-browser';
import {TranslateService} from '../../../../core/services/translate/translate.service';

@Component({
  selector: 'app-layout',
  imports: [ExperienceComponent, BioComponent, EducationComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  constructor(
    private languageService: LanguageService,
    protected translateService: TranslateService,
    private title: Title
  ) {
  }

  ngOnInit(): void {
    this.title.setTitle(this.translateService.translate('title'));

    this.languageService.locale$.subscribe(lang => {
      this.title.setTitle(this.translateService.translate('title'));
    });
  }
}
