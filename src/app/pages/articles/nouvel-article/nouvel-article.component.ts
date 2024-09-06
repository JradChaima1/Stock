import { Component } from '@angular/core';
import {faCloudArrowUp, faFileExport, faPlus} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrl: './nouvel-article.component.scss'
})
export class NouvelArticleComponent {

    protected readonly faFileExport = faFileExport;
    protected readonly faPlus = faPlus;
    protected readonly faCloudArrowUp = faCloudArrowUp;
}
