import { Component } from '@angular/core';
import {TranslateService} from '../../../../core/services/translate/translate.service';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  constructor(
    protected translateService: TranslateService,
  ) {
  }
}
