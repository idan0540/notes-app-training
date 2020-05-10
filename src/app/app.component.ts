import { Component, Input } from '@angular/core';
import { NotesComponent } from './notes/notes.component';
import { NotesManagerService } from './services/notes-manager/notes-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private notesManager: NotesManagerService) {
  }

  notes = [
    {
      uid: 367,
      title: 'פתק 1',
      desc: 'לשים גרביים'
    },
    {
      uid: 234,
      title: 'פתק 2',
      desc: 'לנעול נעליים'
    },
    {
      uid: 354,
      title: 'פתק 3',
      desc: 'לשרוך שרוכים'
    },
    {
      uid: 324,
      title: 'פתק 4',
      desc: 'ללכת'
    }
  ];

  newNote() {
    this.notes.push({uid: Math.round(Math.random() * 100000), title: '', desc: '' });
  }
}
