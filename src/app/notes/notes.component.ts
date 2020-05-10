import { Component, OnInit, Output, Input} from '@angular/core';
import { NotesManagerService } from '../services/notes-manager/notes-manager.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(public notesManager: NotesManagerService) { }

  @Input() noteUid: number;
  @Input() noteTitle = '';
  @Input() noteContent = '';

  ngOnInit(): void {
    console.log(this.noteUid);
    console.log(this.noteTitle);
    console.log(this.noteContent);
  }

  updateNote1() {
    console.log(this.noteUid);
    console.log(this.noteTitle);
    console.log(this.noteContent);
  }
}
