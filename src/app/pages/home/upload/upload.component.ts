import { Component, OnInit, Inject } from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(
    // private dialogRef: MatDialogRef<UploadComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onClick() {

    // this.dialogRef.close();
  }
}
