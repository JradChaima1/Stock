import {ChangeDetectionStrategy, Component, OnInit, signal} from '@angular/core';
import {faCloudArrowUp, faFileExport, faPenToSquare, faPlus} from "@fortawesome/free-solid-svg-icons";

;
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {DetailMvtStkArticleComponent} from "../../composants/detail-mvt-stk-article/detail-mvt-stk-article.component";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {MatExpansionModule} from '@angular/material/expansion';

import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {DetailCmdCltFrsComponent} from "../../composants/detail-cmd-clt-frs/detail-cmd-clt-frs.component";

@Component({
  selector: 'app-page-cmd-clt-frs',
  templateUrl: './page-cmd-clt-frs.component.html',
  standalone: true,
  styleUrl: './page-cmd-clt-frs.component.scss',
  imports: [MatExpansionModule, FaIconComponent, NgOptimizedImage, MatButton, RouterLink, DetailMvtStkArticleComponent, DetailCmdCltFrsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageCmdCltFrsComponent {

  protected readonly faPlus = faPlus;
  protected readonly faFileExport = faFileExport;
  protected readonly faCloudArrowUp = faCloudArrowUp;
}
