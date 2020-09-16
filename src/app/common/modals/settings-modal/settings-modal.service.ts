import { Injectable } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { SettingsModalComponent } from './settings-modal.component';

@Injectable({
  providedIn: 'root'
})
export class SettingsModalService {

  constructor(public dialog: MatDialog, ) { }

  public show(task: any, afterApplication?: any) {
    let dialogRef: MatDialogRef<SettingsModalComponent, any>;

    dialogRef = this.dialog.open(SettingsModalComponent, {

    });
  }
}
