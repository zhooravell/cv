import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ExperienceList} from '../../models/experience';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  constructor(private http: HttpClient) {
  }

  public get(): Observable<ExperienceList> {
    return this.http.get<ExperienceList>('assets/data/experience.uk.json');
  }
}
