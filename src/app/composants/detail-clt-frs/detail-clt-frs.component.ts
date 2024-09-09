import { Component } from '@angular/core';
import {faCircleInfo, faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'tr[app-detail-clt-frs]',
  templateUrl: './detail-clt-frs.component.html',
  styleUrl: './detail-clt-frs.component.scss'
})
export class DetailCltFrsComponent {

  protected readonly faCircleInfo = faCircleInfo;
  protected readonly faTrash = faTrash;
  protected readonly faPenToSquare = faPenToSquare;
}
