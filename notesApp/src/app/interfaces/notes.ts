export interface Note {
  title: string;
  body: string;
  timeStamp: Date;
}

export interface NoteObject {
  notes: Note[];
}
