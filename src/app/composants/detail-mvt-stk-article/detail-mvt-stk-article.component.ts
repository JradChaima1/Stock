import {Component, inject} from '@angular/core';
import {faCircleInfo, faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";

import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CollapseDirective,
  TextColorDirective
} from '@coreui/angular';

import {FaIconComponent} from "@fortawesome/angular-fontawesome";

import {MatExpansionModule} from '@angular/material/expansion';
import {NgOptimizedImage} from "@angular/common";
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {AppModule} from "../../app.module";
import {DetailMvtStkComponent} from "../detail-mvt-stk/detail-mvt-stk.component";
import {RouterLink} from "@angular/router";
import {DialogContentComponent} from "../dialog-content/dialog-content.component";

@Component({
  selector: 'app-detail-mvt-stk-article',
  templateUrl: './detail-mvt-stk-article.component.html',
  standalone: true,
  styleUrl: './detail-mvt-stk-article.component.scss',
  imports: [MatExpansionModule, ButtonDirective, CollapseDirective, TextColorDirective, CardComponent, CardBodyComponent, FaIconComponent, NgOptimizedImage, DetailMvtStkComponent, RouterLink,MatButtonModule,MatDialogModule]
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
