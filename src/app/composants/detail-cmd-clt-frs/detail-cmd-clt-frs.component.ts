import { Component } from '@angular/core';


import {faCalendar, faCartArrowDown, faPenToSquare, faQrcode, faTrash} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-detail-cmd-clt-frs',
  templateUrl: './detail-cmd-clt-frs.component.html',
  styleUrl: './detail-cmd-clt-frs.component.scss'
})
export class DetailCmdCltFrsComponent {

  protected readonly faPenToSquare = faPenToSquare;
  protected readonly faTrash = faTrash;
  protected readonly faQrcode = faQrcode;
  protected readonly faCalendar = faCalendar;
  protected readonly faCartArrowDown = faCartArrowDown;
}
