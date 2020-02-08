import { Injectable } from "@angular/core";
import { NoteObject, Note } from "../interfaces/notes";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class StoreAllNotesService {
  Notes: any;
  notesArray: Note[] = [];
  eachNote: Note;
  subject: Subject<Object>;

  constructor() {
    this.subject = new Subject();
    let storageData = localStorage.getItem("storedNotes");
    if (!storageData) {
      let obj = {
        title: "",
        body: "",
        timeStamp: new Date()
      };

      this.notesArray.push(obj);

      this.Notes = {
        notes: this.notesArray
      };
      localStorage.setItem("storedNotes", JSON.stringify(this.Notes));
    } else {
      this.Notes = JSON.parse(storageData);
    }
  }
  put() {
    let obj = {
      title: "",
      body: "",
      timeStamp: new Date()
    };
    this.Notes.notes.unshift(obj);
  }
  get() {
    return this.Notes;
  }
}
