import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NotesComponent } from "./notes/notes.component";
import { StoreAllNotesService } from "./store-all-notes.service";

@NgModule({
  declarations: [AppComponent, NotesComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [StoreAllNotesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
