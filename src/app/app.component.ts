import { Component } from '@angular/core';

// <nav>
//   <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
//   <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
// </nav>
// <router-outlet></router-outlet>

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>    
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My Skills';
}
