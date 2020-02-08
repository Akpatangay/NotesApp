import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { StoreAllNotesService } from "../store-all-notes.service";
import { Note, NoteObject } from "../interfaces/notes";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.css"]
})
export class NotesComponent implements OnInit {
  notesArray: Note[] = [];
  editOrAddNote: string;
  index: number = 0;
  focusNote: boolean[] = [];

  constructor(public storedNotes: StoreAllNotesService) {}

  ngOnInit() {
    console.log(this.storedNotes.get());
    this.focusNote = this.focusNote.fill(false);
    //alert("from notes" + this.storedNotes.dummyWord);
  }
  @Input()
  set newNote(value) {
    alert(value);
  }
  selectedNote(note, i) {
    this.focusNote.fill(false);
    this.index = i;
    this.focusNote[this.index] = this.focusNote[this.index] ? false : true;
    console.log(note, this.index);
  }
}
