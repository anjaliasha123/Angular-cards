import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neem Tree', 
      username: 'nature', 
      imgUrl: 'assets/img/tree.jpeg',
      content: 'Saw this awesome tree during my hike today.'
    },
    {
      title: 'Snowy Mountain', 
      username: 'mountainlover', 
      imgUrl: 'assets/img/mountain.jpeg',
      content: 'Here s a snowy mountain.'
    },
    {
      title: 'Mountain Biking', 
      username: 'biking123', 
      imgUrl: 'assets/img/biking.jpeg',
      content: 'I did some biking today.'
    }
  ]
}
