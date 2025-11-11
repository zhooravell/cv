import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Profile} from '../../models/profile';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {
  }

  public get(): Observable<Profile> {
    return this.http.get<Profile>('assets/data/profile.uk.json');
  }
}
