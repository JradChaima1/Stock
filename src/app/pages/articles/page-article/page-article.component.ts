import { Component } from '@angular/core';
import {faCircleInfo, faCloudArrowUp, faFileExport, faFileImport, faPlus} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrl: './page-article.component.scss'
})
export class PageArticleComponent {
  constructor(
    private router: Router,

  ) { }
    protected readonly faCircleInfo = faCircleInfo;
  protected readonly faPlus = faPlus;
  protected readonly faFileExport = faFileExport;
  protected readonly faFileImport = faFileImport;
  protected readonly faCloudArrowUp = faCloudArrowUp;
  nouveauArticle(): void {
    this.router.navigate(['nouvelarticle']);
  }
}
