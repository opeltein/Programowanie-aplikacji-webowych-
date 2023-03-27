import { Component, OnInit } from '@angular/core';
import { Note } from './models/note.model';
import { Guid } from 'guid-typescript';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogComponent } from './components/add-dialog/add-dialog.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'notatki';

  notes: Note[] = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    const storedNotes = localStorage.getItem('notes');

    if (storedNotes !== null) {
      this.notes = JSON.parse(storedNotes) as Note[];
    }
  }


  getPinned() {
    return this.notes.filter(x => x.pinned === true)
  }

  getNotPinned() {
    return this.notes.filter(x => x.pinned === false)
  }

  onAddClick(): void {
    const dialogRef = this.dialog.open(AddDialogComponent);

    dialogRef.afterClosed().subscribe((newNote?: Note) => {
      if (newNote !== undefined) {
        this.notes.push(newNote);

        localStorage.setItem('notes', JSON.stringify(this.notes));
      }
    });
  }

  onEditClick(id: Guid) {
    const note = this.notes.find(x => x.id == id);

    if (note !== undefined) {
      const dialogRef = this.dialog.open(EditDialogComponent, {
        data: note
      });

      dialogRef.afterClosed().subscribe((editedNote?: Note) => {
        if (editedNote !== undefined) {
          this.notes = this.notes.filter(x => x.id !== id);
          this.notes.push(editedNote);
          localStorage.setItem('notes', JSON.stringify(this.notes));
        }
      });
    }
  }

  onDeleteClick(id: Guid) {
    this.notes = this.notes.filter(x => x.id !== id);

    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
}
