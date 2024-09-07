import { Component } from '@angular/core';
import {faCircleInfo, faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";

import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CollapseDirective,
  TextColorDirective
} from '@coreui/angular';
import { AccordionModule } from 'primeng/accordion';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

import {MatExpansionModule} from '@angular/material/expansion';
import {NgOptimizedImage} from "@angular/common";

import {AppModule} from "../../app.module";
import {DetailMvtStkComponent} from "../detail-mvt-stk/detail-mvt-stk.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-detail-mvt-stk-article',
  templateUrl: './detail-mvt-stk-article.component.html',
  standalone: true,
  styleUrl: './detail-mvt-stk-article.component.scss',
  imports: [MatExpansionModule, ButtonDirective, CollapseDirective, TextColorDirective, CardComponent, CardBodyComponent, FaIconComponent, NgOptimizedImage, DetailMvtStkComponent, RouterLink]
})
export class DetailMvtStkArticleComponent {

  protected readonly faPenToSquare = faPenToSquare;
  protected readonly faCircleInfo = faCircleInfo;
  protected readonly faTrash = faTrash;
  visible = false;

  toggleCollapse(): void {
    this.visible = !this.visible;
  }


}
