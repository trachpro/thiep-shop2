import { UploadComponent } from './../../../upload/upload.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(
    private router: Router,
    // private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  gotoUpload() {

    this.router.navigate(['/home','upload']);    

    // let dialogRef = this.dialog.open(UploadComponent, {
    //   width: '250px',
    //   // data: { name: this.name, animal: this.animal }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   // this.animal = result;
    // });
  }
}
