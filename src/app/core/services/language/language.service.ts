import {effect, inject, Injectable} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

export type AppLocale = 'uk' | 'en';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  private _locale$ = new BehaviorSubject<AppLocale>('uk');
  readonly locale$ = this._locale$.asObservable();

  constructor() {
    this.initLocaleFromUrl();

    effect(() => {
      document.documentElement.lang = this.currentLocale;
    });
  }

  private initLocaleFromUrl() {
    const paramLocale = this.route.snapshot.queryParamMap.get('lang') as AppLocale | null;

    if (paramLocale === 'uk' || paramLocale === 'en') {
      this._locale$.next(paramLocale);
    } else {
      this.setLocale('uk', false);
    }
  }

  get currentLocale(): AppLocale {
    return this._locale$.value;
  }

  setLocale(locale: AppLocale, updateUrl = true): void {
    this._locale$.next(locale);

    if (updateUrl) {
      const queryParams = {...this.route.snapshot.queryParams, lang: locale};
      this.router
        .navigate([], {relativeTo: this.route, queryParams, queryParamsHandling: 'merge', replaceUrl: true})
        .then(r => console.log('setLocale: router.navigate', r));
    }
  }
}
