export class Skill {
  id: string
  name: string
  ranking: number
  
  constructor(id: string, name: string) {
  	this.id = id
  	this.name = name	
  	this.ranking = 0
  }
}
