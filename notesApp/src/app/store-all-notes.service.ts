import { Injectable } from "@angular/core";
import { NoteObject, Note } from "./interfaces/notes";

@Injectable({
  providedIn: "root"
})
export class StoreAllNotesService {
  Notes: any;
  notesArray: Note[];
  eachNote: Note;

  constructor() {
    let storageData = localStorage.getItem("storedNotes");
    if (!storageData) {
      let obj = {
        title: "first note",
        body: "body of first note",
        timeStamp: new Date()
      };

      this.notesArray.push(obj);

      let notesObj = {
        notes: this.notesArray
      };
      localStorage.setItem("storedNotes", JSON.stringify(notesObj));
    } else {
      this.Notes = JSON.parse(storageData);
    }
  }
  put() {
    let obj = {
      title: "New Note",
      body: "No additional information",
      timeStamp: new Date()
    };
    this.Notes.Notes.notes.unshift(obj);
  }
  get() {
    return this.Notes;
  }
}
