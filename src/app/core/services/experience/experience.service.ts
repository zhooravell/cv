import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {catchError, Observable} from 'rxjs';
import {Experience} from '../../models/experience';

const VERSIONS = ['1', '2'];

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private route = inject(ActivatedRoute);

  constructor(private http: HttpClient) {
  }

  public get(lang: string): Observable<Experience[]> {
    const url = `assets/data/experience.${lang}.json`;
    const version = this.route.snapshot.queryParamMap.get('v');

    if (!version || !VERSIONS.includes(version)) {
      return this.http.get<Experience[]>(url);
    }

    return this.http
      .get<Experience[]>(`assets/data/experience-v${version}.${lang}.json`)
      .pipe(catchError(() => this.http.get<Experience[]>(url)));
  }
}
