import { Component, Input } from '@angular/core';
import { NotesComponent } from './notes/notes.component';
import { NotesManagerService } from './services/notes-manager/notes-manager.service';
import { Note } from './models/Note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  notes: Note[];

  constructor(
    public notesManager: NotesManagerService
  ) {

  }

  newNote() {
    this.notesManager.addNote();
    // this.notes.push({uid: Math.round(Math.random() * 100000), title: '', desc: '' });
  }
}
