import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {AlertModule} from "@coreui/angular";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComposantComponent } from './mon-premier-composant/mon-premier-composant.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatIconModule} from "@angular/material/icon";
import {MenuComponent} from "./composants/menu/menu.component";
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './composants/header/header.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import {NgOptimizedImage} from "@angular/common";
import { PaginationComponent } from './composants/pagination/pagination.component';
import { BoutonActionComponent } from './composants/bouton-action/bouton-action.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { DetailMvtStkArticleComponent } from './composants/detail-mvt-stk-article/detail-mvt-stk-article.component';
import { PageMvtstkComponent } from './pages/page-mvtstk/page-mvtstk.component';
import {AccordionModule} from "primeng/accordion";
import {AvatarModule} from "primeng/avatar";
import {BadgeModule} from "primeng/badge";

import {MatTableModule} from '@angular/material/table';

import {MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from "@angular/material/expansion";
import { DetailMvtStkComponent } from './composants/detail-mvt-stk/detail-mvt-stk.component';


@NgModule({
  declarations: [
    AppComponent,
    MonPremierComposantComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    PageStatistiquesComponent,
    MenuComponent,
    HeaderComponent,
    PageArticleComponent,
    DetailArticleComponent,
    PaginationComponent,
    BoutonActionComponent,
    NouvelArticleComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule,
    NgOptimizedImage,
    FontAwesomeModule,
    AccordionModule,
    AvatarModule,
    BadgeModule,
    AlertModule,
    DetailMvtStkArticleComponent,
    PageMvtstkComponent,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatExpansionModule,
    DetailMvtStkComponent
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  exports: [
    DetailMvtStkComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
