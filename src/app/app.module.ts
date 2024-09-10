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


import {MatTableModule} from '@angular/material/table';

import {MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from "@angular/material/expansion";
import { DetailMvtStkComponent } from './composants/detail-mvt-stk/detail-mvt-stk.component';
import { DialogContentComponent } from './composants/dialog-content/dialog-content.component';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import { PageClientComponent } from './pages/page-client/page-client.component';
import { DetailCltFrsComponent } from './composants/detail-clt-frs/detail-clt-frs.component';
import { PageFournisseurComponent } from './pages/page-fournisseur/page-fournisseur.component';
import { NouveauCltFrsComponent } from './composants/nouveau-clt-frs/nouveau-clt-frs.component';
import { DetailCmdCltFrsComponent } from './composants/detail-cmd-clt-frs/detail-cmd-clt-frs.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { DetailCmdFrsArticleComponent } from './composants/detail-cmd-frs-article/detail-cmd-frs-article.component';
import { NouvelleCmdCltFrsComponent } from './composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { PageCategoriesComponent } from './pages/categories/page-categories/page-categories.component';
import { NouvelCategorieComponent } from './pages/categories/nouvel-categorie/nouvel-categorie.component';
import { PageUtilisateurComponent } from './pages/utilisateur/page-utilisateur/page-utilisateur.component';
import { DetailUtilisateurComponent } from './composants/detail-utilisateur/detail-utilisateur.component';
import { NouvelUtilisateurComponent } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';


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
    NouvelArticleComponent,
    DialogContentComponent,
    PageClientComponent,
    DetailCltFrsComponent,
    PageFournisseurComponent,
    NouveauCltFrsComponent,
    NouvelleCmdCltFrsComponent,
    PageCategoriesComponent,
    NouvelCategorieComponent,
    PageUtilisateurComponent,
    DetailUtilisateurComponent,
    NouvelUtilisateurComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule,
    NgOptimizedImage,
    FontAwesomeModule,
    AlertModule,
    DetailMvtStkArticleComponent,
    PageMvtstkComponent,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatExpansionModule,
    DetailMvtStkComponent,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    DetailCmdCltFrsComponent,
    PageCmdCltFrsComponent,
    DetailCmdFrsArticleComponent
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
