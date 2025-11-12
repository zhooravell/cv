import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
  LOCALE_ID, computed, inject
} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {registerLocaleData} from '@angular/common';
import localeUk from '@angular/common/locales/uk';
import localeEn from '@angular/common/locales/en';
import {LanguageService} from './core/services/language/language.service';

registerLocaleData(localeUk, 'uk');
registerLocaleData(localeEn, 'en');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),

    {provide: LOCALE_ID, useValue: 'uk'},
  ]
};
