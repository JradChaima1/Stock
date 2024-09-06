import { Component } from '@angular/core';
import {faCircleInfo, faPenToSquare, faSquarePen, faTrash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'tr[app-detail-article]',
  templateUrl: './detail-article.component.html',
  styleUrl: './detail-article.component.scss'
})
export class DetailArticleComponent {


  protected readonly faSquarePen = faSquarePen;
  protected readonly faPenToSquare = faPenToSquare;
  protected readonly faCircleInfo = faCircleInfo;
  protected readonly faTrash = faTrash;
}
