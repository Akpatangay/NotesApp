import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  newNote: boolean = false;
  focusNote: any[] = [];
  notesArray: any[] = [];
  index: number;
  editOrAddNote: string;

  constructor() {
    this.notesArray = ["abc", "123", "cde"];
    this.focusNote = this.focusNote.fill(false);
  }
  addNote() {
    this.focusNote = this.focusNote.fill(false);
    this.notesArray.unshift("");
    this.index = 0;
    this.focusNote[this.index] = this.focusNote[this.index] ? false : true;

    this.newNote = true;
    // alert("note added");
  }
  addedNewNote(event) {
    this.newNote = event;
  }
  editNote() {
    this.editOrAddNote = this.notesArray[this.index];
  }
  selectedNote(note, i) {
    this.focusNote = this.focusNote.fill(false);
    this.index = i;
    this.focusNote[this.index] = this.focusNote[this.index] ? false : true;
    this.editOrAddNote = note;
    //alert(note);
  }
}
