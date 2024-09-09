import { Component } from '@angular/core';
import {DetailMvtStkComponent} from "../detail-mvt-stk/detail-mvt-stk.component";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {NgOptimizedImage} from "@angular/common";
import {faCalendar, faCartArrowDown, faPenToSquare, faQrcode, faTrash} from "@fortawesome/free-solid-svg-icons";
import {DetailCmdFrsArticleComponent} from "../detail-cmd-frs-article/detail-cmd-frs-article.component";

@Component({
  selector: 'app-detail-cmd-clt-frs',
  templateUrl: './detail-cmd-clt-frs.component.html',
  standalone: true,
  imports: [
    DetailMvtStkComponent,
    FaIconComponent,
    MatExpansionPanel,
    MatExpansionPanelDescription,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    NgOptimizedImage,
    DetailCmdFrsArticleComponent
  ],
  styleUrl: './detail-cmd-clt-frs.component.scss'
})
export class DetailCmdCltFrsComponent {

  protected readonly faPenToSquare = faPenToSquare;
  protected readonly faTrash = faTrash;
  protected readonly faQrcode = faQrcode;
  protected readonly faCalendar = faCalendar;
  protected readonly faCartArrowDown = faCartArrowDown;
}
