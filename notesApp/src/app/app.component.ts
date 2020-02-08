import { Component } from "@angular/core";
import { StoreAllNotesService } from "./services/store-all-notes.service";
import { Note } from "./interfaces/notes";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  newNote: boolean = false;
  focusNote: any[] = [];
  notesArray: Note[] = [];
  index: number;
  eachNote: Note;
  editOrAddNote: string;

  constructor(public storedNotes: StoreAllNotesService) {
    this.focusNote = this.focusNote.fill(false);
    //alert("from app" + this.storedNotes.dummyWord);
  }
  addedNewNote() {
    this.storedNotes.put();
    this.storedNotes.subject.next(true);
    //this.storedNotes.Notes.notes.unshift(this.eachNote);
  }
  getIndex(currentIndex) {
    this.index = currentIndex;
  }
  deleteNote() {
    this.storedNotes.Notes.notes.splice(this.index, 1);
    localStorage.setItem("storedNotes", this.storedNotes.Notes.notes);
  }
}
