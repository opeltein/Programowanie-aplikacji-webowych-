import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent {
  isPinned: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent>
  ) { }

  onCheckboxChange(event: any) {
    this.isPinned = event.target.checked;
  }

  onAddClick(title: string, content: string, color: string) {
    this.dialogRef.close({
      id: Guid.create(),
      title: title,
      content: content,
      color: color,
      createdAt: new Date(),
      pinned: this.isPinned
    });
  }
}