import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { StoreAllNotesService } from "../services/store-all-notes.service";
import { Note, NoteObject } from "../interfaces/notes";
import * as lodash from "lodash";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.css"]
})
export class NotesComponent implements OnInit {
  @Input() searchItem: string;
  notesArray: Note[] = [];
  editOrAddNote: string;
  index: number = 0;
  focusNote: boolean[] = [];
  titleSave: boolean = false;

  // @Input() set search(value) {
  //   console.log(value);
  // }
  @Output() deleteIndex: EventEmitter<number> = new EventEmitter();

  constructor(public storedNotes: StoreAllNotesService) {
    this.storedNotes.subject.subscribe(data => {
      this.focusNote = this.focusNote.fill(false);
      this.focusNote[0] = true;
      this.titleSave = false;
    });
  }

  ngOnInit() {
    console.log(this.storedNotes.get());
    this.focusNote = this.focusNote.fill(false);
    this.focusNote[0] = true;
    //alert("from notes" + this.storedNotes.dummyWord);
  }

  selectedNote(note, i) {
    this.titleSave = true;
    this.focusNote.fill(false);
    this.index = i;
    this.focusNote[this.index] = this.focusNote[this.index] ? false : true;
    //console.log(note, this.index);
    this.deleteIndex.emit(this.index);
  }

  keyUpFunction(event) {
    if (!this.storedNotes.Notes.notes[this.index].body) {
      if (event.indexOf("\n") != -1) {
        this.storedNotes.Notes.notes[this.index].title = event.slice(
          0,
          event.indexOf("\n")
        );
        this.storedNotes.Notes.notes[this.index].body = event.slice(
          event.indexOf("\n")
        );
      } else {
        this.storedNotes.Notes.notes[this.index].title = event;
        // this.storedNotes.Notes.notes[this.index].body = event;
      }
    } else {
      this.storedNotes.Notes.notes[this.index].body = event;
    }

    localStorage.setItem("storedNotes", JSON.stringify(this.storedNotes.Notes));
    //this.storedNotes.Notes.notes[this.index].title = event;
    this.titleSave = true;
  }
  debounceText = lodash.debounce(
    event => this.keyUpFunction(event),
    1000,
    true
  );
}
