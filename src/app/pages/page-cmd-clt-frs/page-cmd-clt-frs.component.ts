import {ChangeDetectionStrategy, Component, OnInit, signal} from '@angular/core';
import {faCloudArrowUp, faFileExport, faPenToSquare, faPlus} from "@fortawesome/free-solid-svg-icons";

import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-cmd-clt-frs',
  templateUrl: './page-cmd-clt-frs.component.html',
  styleUrl: './page-cmd-clt-frs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageCmdCltFrsComponent implements OnInit{

  origin = '';

  protected readonly faPlus = faPlus;
  protected readonly faFileExport = faFileExport;
  protected readonly faCloudArrowUp = faCloudArrowUp;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data['origin'];
    });
    
  }
  nouvelleCommande(): void {
    if (this.origin === 'client') {
      this.router.navigate(['nouvellecmdclt']);
    } else if (this.origin === 'fournisseur') {
      this.router.navigate(['nouvellecmdfrs']);
    }
  }
}
