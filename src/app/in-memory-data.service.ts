import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let skills = [
			{id: 1, name: 'HTML', ranking: 3},
			{id: 2, name: 'JavaScript', ranking: 1},
			{id: 3, name: '.NET', ranking: 2},
			{id: 4, name: 'Java', ranking: 5},
			{id: 5, name: 'Functional', ranking: 4},
			{id: 6, name: 'iOS', ranking: 1},
			{id: 7, name: 'Android', ranking: 0}
		];
		return {skills};
	}
}
