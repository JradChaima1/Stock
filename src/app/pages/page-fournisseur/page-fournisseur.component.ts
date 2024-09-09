import { Component } from '@angular/core';
import {faCloudArrowUp, faFileExport, faPlus} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-fournisseur',
  templateUrl: './page-fournisseur.component.html',
  styleUrl: './page-fournisseur.component.scss'
})
export class PageFournisseurComponent {
  constructor(
    private router: Router,

  ) { }
  protected readonly faPlus = faPlus;
  protected readonly faFileExport = faFileExport;
  protected readonly faCloudArrowUp = faCloudArrowUp;
  nouveauFournisseur(): void {
    this.router.navigate(['nouveaufournisseur']);
  }
}
