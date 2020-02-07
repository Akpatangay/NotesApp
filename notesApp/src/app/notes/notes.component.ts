import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.css"]
})
export class NotesComponent implements OnInit {
  @Output()
  addedNewNote: EventEmitter<boolean> = new EventEmitter<boolean>();

  notesArray: Note[] = [];
  constructor() {}

  ngOnInit() {
    this.notesArray = [{ title: "abc", text: "cde" }];
  }
  @Input()
  set newNote(value) {
    if (value) {
      let newNote = { title: "", text: "" };
      this.notesArray.unshift(newNote);
      this.addedNewNote.emit(false);
    }
  }
}

export interface Note {
  title: string;
  text: string;
}
