import {ChangeDetectionStrategy, Component, OnInit, signal} from '@angular/core';
import {faCloudArrowUp, faFileExport, faPenToSquare, faPlus} from "@fortawesome/free-solid-svg-icons";

;



@Component({
  selector: 'app-page-mvtstk',
  templateUrl: './page-mvtstk.component.html',
  styleUrl: './page-mvtstk.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageMvtstkComponent {

  protected readonly faPlus = faPlus;
  protected readonly faFileExport = faFileExport;
  protected readonly faCloudArrowUp = faCloudArrowUp;


  protected readonly faPenToSquare = faPenToSquare;
  readonly panelOpenState = signal(false);
}
