import { Component, OnInit } from '@angular/core';

import { Skill } from './skill';
import { User } from './user';
import { SkillService } from './skill.service';
import { UserService } from './user.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  skills: Skill[]
  currentUser: User
  userJson: string

  constructor(private skillService: SkillService, private userService: UserService) { }

  ngOnInit(): void {
    this.currentUser = new User()
    this.skillService.get().then(skills => this.skills = skills)
  }

  userChanged(userId: string): void {
    this.currentUser.id = userId
  }

  incrementSkill(id: number, oldValue: number): void {
    this.currentUser.updateRanking(id, this.currentUser.getRankingBySkill(id)+1)
  }
  
  decrementSkill(id: number, oldValue: number): void {
  	this.currentUser.updateRanking(id, this.currentUser.getRankingBySkill(id)-1)
  }

  save(): void {
    this.userService.update(this.currentUser)
  }
}
