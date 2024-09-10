import { Component } from '@angular/core';
import {faCircleInfo, faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'tr[app-detail-utilisateur]',
  templateUrl: './detail-utilisateur.component.html',
  styleUrl: './detail-utilisateur.component.scss'
})
export class DetailUtilisateurComponent {
  protected readonly faCircleInfo = faCircleInfo;
  protected readonly faTrash = faTrash;
  protected readonly faPenToSquare = faPenToSquare;
}
