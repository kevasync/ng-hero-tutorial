"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var skill_service_1 = require("./skill.service");
var DashboardComponent = (function () {
    function DashboardComponent(skillService) {
        this.skillService = skillService;
        this.skills = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.skillService.getSkills()
            .then(function (skills) { return _this.skills = skills
            .sort(function (sk1, sk2) { return sk2.ranking - sk1.ranking; }); });
    };
    DashboardComponent.prototype.incrementSkill = function (id) {
        this.updateSkill(id, this.inc);
    };
    DashboardComponent.prototype.decrementSkill = function (id) {
        this.updateSkill(id, this.dec);
    };
    DashboardComponent.prototype.updateSkill = function (id, modifier) {
        var skill = this.skills.find(function (skill) { return skill.id == id; });
        this.skillService.update(modifier(skill));
    };
    DashboardComponent.prototype.inc = function (s) {
        s.ranking += 1;
        return s;
    };
    DashboardComponent.prototype.dec = function (s) {
        s.ranking -= 1;
        return s;
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'my-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    }),
    __metadata("design:paramtypes", [skill_service_1.SkillService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map