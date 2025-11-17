import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Education} from '../../models/education';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  constructor(private http: HttpClient) {
  }

  public get(lang: string): Observable<Education[]> {
    return this.http.get<Education[]>(`assets/data/education.${lang}.json`);
  }
}
