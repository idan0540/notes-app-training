import { Component, OnInit, Output, Input} from '@angular/core';
import { NotesManagerService } from '../services/notes-manager/notes-manager.service';
import { Note } from '../models/Note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

  constructor(public notesManager: NotesManagerService) { }

  // @Input() noteUid: number;
  // @Input() noteTitle = '';
  // @Input() noteContent = '';
  @Input() note: Note;

  updateNote(note: Note) {
    this.notesManager.updateNote(this.note);
    console.log(this.note);
  }
}
