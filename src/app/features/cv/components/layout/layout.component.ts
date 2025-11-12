import {Component, OnInit} from '@angular/core';
import {ExperienceComponent} from '../experience/experience.component';
import {BioComponent} from '../bio/bio.component';
import {EducationComponent} from '../education/education.component';

@Component({
  selector: 'app-layout',
  imports: [ExperienceComponent, BioComponent, EducationComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  ngOnInit(): void {
    console.log('LayoutComponent.ngOnInit');
  }
}
