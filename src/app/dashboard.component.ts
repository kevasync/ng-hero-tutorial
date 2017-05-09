import { Component, OnInit } from '@angular/core';

import { Skill } from './skill';
import { SkillService } from './skill.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  skills: Skill[] = [];

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.skillService.getSkills()
      .then(skills => this.skills = skills.slice(1, 5));
  }
}
