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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var SkillService = (function () {
    function SkillService(http) {
        this.http = http;
        this.skillsUrl = 'api/skills';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    SkillService.prototype.getSkills = function () {
        return this.http.get(this.skillsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    SkillService.prototype.getSkill = function (id) {
        var url = this.skillsUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    SkillService.prototype.update = function (skill) {
        var url = this.skillsUrl + "/" + skill.id;
        return this.http
            .put(url, JSON.stringify(skill), { headers: this.headers })
            .toPromise()
            .then(function () { return skill; })
            .catch(this.handleError);
    };
    SkillService.prototype.delete = function (id) {
        var url = this.skillsUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    SkillService.prototype.create = function (name) {
        return this.http
            .post(this.skillsUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    SkillService.prototype.handleError = function (error) {
        console.error('an error occured', error);
        return Promise.reject(error.message || error);
    };
    return SkillService;
}());
SkillService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SkillService);
exports.SkillService = SkillService;
//# sourceMappingURL=skill.service.js.map