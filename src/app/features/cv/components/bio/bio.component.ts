import {Component, OnInit} from '@angular/core';
import {ExperienceService} from '../../../../core/services/experience/experience.service';
import {LanguageService} from '../../../../core/services/language/language.service';
import {TranslateService} from '../../../../core/services/translate/translate.service';
import {ProfileService} from '../../../../core/services/profile/profile.service';
import {Profile} from '../../../../core/models/profile';

@Component({
  selector: 'app-bio',
  imports: [],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.scss',
})
export class BioComponent implements OnInit {
  protected bio: Profile | null = null;
  protected lang: string = '';

  constructor(
    private profileService: ProfileService,
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
    this.profileService.get(this.lang).subscribe({
      next: (res) => {
        this.bio = res;
      },
      error: (error) => console.error(error),
    });
  }
}
