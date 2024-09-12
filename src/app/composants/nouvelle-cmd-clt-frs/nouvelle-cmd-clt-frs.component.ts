import { Component, OnInit } from '@angular/core';
import {faCircleInfo, faPenToSquare, faSquarePen, faTrash, faPlus} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-nouvelle-cmd-clt-frs',
  templateUrl: './nouvelle-cmd-clt-frs.component.html',
  styleUrl: './nouvelle-cmd-clt-frs.component.scss'
})
export class NouvelleCmdCltFrsComponent implements OnInit {
  origin = '';
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data['origin'];
    });
  
  }
  protected readonly faSquarePen = faSquarePen;
  protected readonly faPenToSquare = faPenToSquare;
  protected readonly faCircleInfo = faCircleInfo;
  protected readonly faTrash = faTrash;
  protected readonly faPlus = faPlus;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) { }
  
}
