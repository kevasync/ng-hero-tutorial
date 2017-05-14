import { Component, OnInit } from '@angular/core';

import { Skill } from './skill';
import { User } from './user';
import { Location } from './location';
import { SkillService } from './skill.service';
import { UserService } from './user.service';
import { LocationService } from './location.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  skills: Skill[]
  currentUser: User
  userJson: string
  locations: Location[]

  constructor(private skillService: SkillService,
              private userService: UserService,
              private locationService: LocationService
              ) { }

  ngOnInit(): void {
    this.currentUser = new User()
    this.skillService.get().then(skills => this.skills = skills)
    this.locationService.get().then(locations => this.locations = locations)
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

  locationChanged(locationId: number): void {
    this.currentUser.location = locationId  
  }

  save(): void {
    this.userService.update(this.currentUser)
  }
}
