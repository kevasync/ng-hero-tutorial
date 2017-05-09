"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var skills = [
            { id: 1, name: 'HTML' },
            { id: 2, name: 'JavaScript' },
            { id: 3, name: '.NET' },
            { id: 4, name: 'Java' },
            { id: 5, name: 'Functional' },
            { id: 6, name: 'iOS' },
            { id: 7, name: 'Android' }
        ];
        return { skills: skills };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map