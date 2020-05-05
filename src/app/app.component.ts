import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  notes = [
    {
      title: 'my note',
      desc: '.....'
    },
    {
      title: 'my note 2',
      desc: '.....'
    },
    {
      title: 'my note 3',
      desc: '.....'
    },
    {
      title: 'my note 4',
      desc: '.....'
    }
  ];


  newNote() {
    console.log("hiiiii");
    
  }
}
