import {Component, inject} from '@angular/core';
import {faCircleInfo, faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";



import {MatDialog, MatDialogModule} from '@angular/material/dialog';


import {DialogContentComponent} from "../dialog-content/dialog-content.component";

@Component({
  selector: 'app-detail-mvt-stk-article',
  templateUrl: './detail-mvt-stk-article.component.html',
  styleUrl: './detail-mvt-stk-article.component.scss',
})
export class DetailMvtStkArticleComponent {

  protected readonly faPenToSquare = faPenToSquare;
  protected readonly faCircleInfo = faCircleInfo;
  protected readonly faTrash = faTrash;
  readonly dialog = inject(MatDialog);
  visible = false;

  toggleCollapse(): void {
    this.visible = !this.visible;
  }


  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      height: '300px',
       width:'600px'

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
