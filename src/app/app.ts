import {Component, OnInit, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('cv');

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    console.log('App.ngOnInit');

    this.http.get('/cv/assets/data/test.json').subscribe(data => {
      console.log(data);
    });
  }
}
