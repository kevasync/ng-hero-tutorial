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
      .then(skills => {
        this.skills = skills
      })
  }

  incrementSkill(id: string): void {
    this.updateSkill(id, this.inc)
  }
  decrementSkill(id: string): void {
  	this.updateSkill(id, this.dec)
  }

  private updateSkill(id: string, modifier: (s: Skill) => Skill): void {
  	var skill = this.skills.find(skill => skill.id === id);
	this.skillService.update(modifier(skill));
  }

  private inc(s:Skill): Skill{
	s.ranking += 1;
	return s;	
  }

  private dec(s:Skill): Skill{
  	s.ranking -= 1;
  	return s;	
  }
}
