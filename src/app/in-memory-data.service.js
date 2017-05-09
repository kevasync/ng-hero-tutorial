"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var skills = [
            { id: 1, name: 'HTML', ranking: 3 },
            { id: 2, name: 'JavaScript', ranking: 1 },
            { id: 3, name: '.NET', ranking: 2 },
            { id: 4, name: 'Java', ranking: 5 },
            { id: 5, name: 'Functional', ranking: 4 },
            { id: 6, name: 'iOS', ranking: 1 },
            { id: 7, name: 'Android', ranking: 0 }
        ];
        return { skills: skills };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map