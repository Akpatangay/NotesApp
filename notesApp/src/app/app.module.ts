import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NotesComponent } from "./notes/notes.component";
import { StoreAllNotesService } from "./services/store-all-notes.service";
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [AppComponent, NotesComponent, SearchPipe],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [StoreAllNotesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
