import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EducationList} from '../../models/education';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  constructor(private http: HttpClient) {
  }

  public get(lang: string): Observable<EducationList> {
    return this.http.get<EducationList>(`assets/data/education.${lang}.json`);
  }
}
