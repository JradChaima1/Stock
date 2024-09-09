import { Component } from '@angular/core';
import {faCircleInfo, faPenToSquare, faSquarePen, faTrash, faPlus} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-nouvelle-cmd-clt-frs',
  templateUrl: './nouvelle-cmd-clt-frs.component.html',
  styleUrl: './nouvelle-cmd-clt-frs.component.scss'
})
export class NouvelleCmdCltFrsComponent {
  protected readonly faSquarePen = faSquarePen;
  protected readonly faPenToSquare = faPenToSquare;
  protected readonly faCircleInfo = faCircleInfo;
  protected readonly faTrash = faTrash;
  protected readonly faPlus = faPlus;
}
