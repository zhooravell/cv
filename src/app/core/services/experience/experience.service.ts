import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Experience} from '../../models/experience';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  constructor(private http: HttpClient) {
  }

  public get(lang: string): Observable<Experience[]> {
    return this.http.get<Experience[]>(`assets/data/experience.${lang}.json`);
  }
}
