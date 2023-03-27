import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Guid } from 'guid-typescript';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {
  isPinned: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public note: Note,
  ) {
    this.isPinned = note.pinned;
  }

  onCheckboxChange(event: any) {
    this.isPinned = event.target.checked;
  }

  onEditClick(title: string, content: string, color: string) {
    this.dialogRef.close({
      id: this.note.id,
      title: title,
      content: content,
      color: color,
      createdAt: this.note.createdAt,
      pinned: this.isPinned
    });
  }
}
