import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {faCloudArrowUp, faFileExport, faPlus} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrl: './nouvel-article.component.scss'
})
export class NouvelArticleComponent {
    constructor(
      private router: Router
    ) {}
  
    protected readonly faFileExport = faFileExport;
    protected readonly faPlus = faPlus;
    protected readonly faCloudArrowUp = faCloudArrowUp;

   cancelClick(): void{
    this.router.navigate(['articles']);
   }

}
