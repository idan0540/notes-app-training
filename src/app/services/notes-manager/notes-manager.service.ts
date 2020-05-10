import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesManagerService {

  constructor() {
    console.log('NotesManagerService CREATED!!');
  }

  updateNote(uid, title, content) {
    console.log(`${uid} note uid`);
    console.log(`${JSON.stringify(uid)} note uid`);
    console.log(`${title} note title`);
    console.log(`${JSON.stringify(title)} note title`);
    console.log(`${content} note content`);
    console.log(`${JSON.stringify(content)} note content`);
  }
}
