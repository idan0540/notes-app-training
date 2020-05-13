import { Injectable } from '@angular/core';
import { Note } from 'src/app/models/Note';

@Injectable({
  providedIn: 'root'
})
export class NotesManagerService {
  /*
      {
      id: 367,
      title: 'פתק 1',
      desc: 'לשים גרביים'
    },
    {
      id: 234,
      title: 'פתק 2',
      desc: 'לנעול נעליים'
    },
    {
      id: 354,
      title: 'פתק 3',
      desc: 'לשרוך שרוכים'
    },
    {
      id: 324,
      title: 'פתק 4',
      desc: 'ללכת'
    } */

  notes: Note[];

  constructor() {
    this.loadNotes();
  }

  getNotes() {
    return this.notes;
  }

  updateNote(note: Note) {
    this.notes.forEach((curNote) => {
      if (curNote.id === note.id) {
        curNote.title = note.title;
        curNote.desc = note.desc;
      }
    });
    this.saveNotes();
  }

  addNote() {
    this.notes.push({
      id: new Date().getTime(),
      title: '',
      desc: '',
    });
    this.saveNotes();
  }

  deleteNote(note: Note) {
    this.notes = this.notes.filter( currNote => currNote.id !== note.id);
    this.saveNotes();
  }

  saveNotes() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  loadNotes() {
    this.notes = JSON.parse(localStorage.getItem('notes'));
    if (this.notes === null) {
      this.notes = [];
    }
  }
}
