import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faCircleInfo, faCloudArrowUp, faFileExport, faFileImport, faPlus} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-bouton-action',
  templateUrl: './bouton-action.component.html',
  styleUrl: './bouton-action.component.scss'
})
export class BoutonActionComponent {

  protected readonly faCircleInfo = faCircleInfo;
  protected readonly faPlus = faPlus;
  protected readonly faFileExport = faFileExport;
  protected readonly faFileImport = faFileImport;
  protected readonly faCloudArrowUp = faCloudArrowUp;
  
  @Input()
  isNouveauVisible = true;
  @Input()
  isExporterVisible = true;
  @Input()
  isImporterVisible = true;

  @Output()
  clickEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  bouttonNouveauClick(): void {
    this.clickEvent.emit();
  }

}

