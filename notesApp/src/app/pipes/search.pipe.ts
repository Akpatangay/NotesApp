import { Pipe, PipeTransform } from "@angular/core";
import { Note } from "../interfaces/notes";

@Pipe({
  name: "search"
})
export class SearchPipe implements PipeTransform {
  transform(notes: any[], search: any): any[] {
    if (!notes || !search) {
      return notes;
    }
    return notes.filter(
      note => note.body.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  }
}
