import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";
import {PageInscriptionComponent} from "./pages/page-inscription/page-inscription.component";
import {PageDashboardComponent} from "./pages/page-dashboard/page-dashboard.component";
import {PageStatistiquesComponent} from "./pages/page-statistiques/page-statistiques.component";
import {PageArticleComponent} from "./pages/articles/page-article/page-article.component";
import {NouvelArticleComponent} from "./pages/articles/nouvel-article/nouvel-article.component";
import {PageMvtstkComponent} from "./pages/page-mvtstk/page-mvtstk.component";
import {DialogContentComponent} from "./composants/dialog-content/dialog-content.component";
import {PageClientComponent} from "./pages/page-client/page-client.component";
import {PageFournisseurComponent} from "./pages/page-fournisseur/page-fournisseur.component";
import {NouveauCltFrsComponent} from "./composants/nouveau-clt-frs/nouveau-clt-frs.component";
import {PageCmdCltFrsComponent} from "./pages/page-cmd-clt-frs/page-cmd-clt-frs.component";
import {NouvelleCmdCltFrsComponent} from "./composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component";
import { PageCategoriesComponent } from './pages/categories/page-categories/page-categories.component';

const routes: Routes = [
  {
    path: 'login',
    component: PageLoginComponent
  },
  {
    path: 'inscrire',
    component: PageInscriptionComponent
  },
  {
    path: '',
    component: PageDashboardComponent,

    children: [
      {
        path: 'statistiques',
        component: PageStatistiquesComponent,

      },
      {
        path: 'articles',
        component: PageArticleComponent,

      },
      {
        path: 'nouvelarticle',
        component: NouvelArticleComponent,

      },
      {
        path: 'mvtstk',
        component: PageMvtstkComponent,
      },
      {
        path: 'clients',
        component: PageClientComponent,
      },
      {
        path: 'fournisseurs',
        component: PageFournisseurComponent
      },
      {
        path: 'nouveaufournisseur',
        component: NouveauCltFrsComponent
      },
      {
        path: 'nouveauclient',
        component: NouveauCltFrsComponent
      },
      {
        path:'commandesclient',
        component:PageCmdCltFrsComponent
      },
      {
        path:'commandesfournisseur',
        component:PageCmdCltFrsComponent
      },
      {
        path:'nouvelllecmdcltfrs',
        component:NouvelleCmdCltFrsComponent
      },
      {
        path:'categories',
        component:PageCategoriesComponent
      },


    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
