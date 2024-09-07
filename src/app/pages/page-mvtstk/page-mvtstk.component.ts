import {ChangeDetectionStrategy, Component, OnInit, signal} from '@angular/core';
import {faCloudArrowUp, faFileExport, faPenToSquare, faPlus} from "@fortawesome/free-solid-svg-icons";

import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CollapseDirective,
  TextColorDirective
} from "@coreui/angular";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {DetailMvtStkArticleComponent} from "../../composants/detail-mvt-stk-article/detail-mvt-stk-article.component";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {MatExpansionModule} from '@angular/material/expansion';
import {VERSION} from "@angular/cdk";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {AppModule} from "../../app.module";

@Component({
  selector: 'app-page-mvtstk',
  templateUrl: './page-mvtstk.component.html',
  standalone: true,
  styleUrl: './page-mvtstk.component.scss',
  imports: [MatExpansionModule, FaIconComponent, NgOptimizedImage, MatButton, RouterLink, DetailMvtStkArticleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageMvtstkComponent {

  protected readonly faPlus = faPlus;
  protected readonly faFileExport = faFileExport;
  protected readonly faCloudArrowUp = faCloudArrowUp;


  protected readonly faPenToSquare = faPenToSquare;
  readonly panelOpenState = signal(false);
}
