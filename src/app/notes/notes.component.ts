import { Component, OnInit, Output, Input} from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input('fromParent')
  nnewNote : Object;

  // notes = [
  //   {
  //     title: 'פתק 1',
  //     desc: 'לשים גרביים'
  //   },
  //   {
  //     title: 'פתק 2',
  //     desc: 'לנעול נעליים'
  //   },
  //   {
  //     title: 'פתק 3',
  //     desc: 'לשרוך שרוכים'
  //   },
  //   {
  //     title: 'פתק 4',
  //     desc: 'ללכת'
  //   }
  // ];
  // newNote() {
  //   // this.notes.push({title: 'new', desc: 'new'});
  //   this.notes.push({title: this.nnewNote, desc: this.nnewNote});
  // }
  
}
