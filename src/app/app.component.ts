import { Component, Input } from '@angular/core';
import { NotesComponent } from './notes/notes.component';

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

  // item1 = {title: 'new', desc: 'new'};
  // item = "jki";
  newNote() {

    // console.log("hiiiii");

    // NotesComponent.caller.apply.notes.push({title: 'new', desc: 'new'});
    // var nnotes = NotesComponent.arguments("notes");
    // console.log(nnotes);
    this.notes.push({title: 'new', desc: 'new'});
    
  }
}
