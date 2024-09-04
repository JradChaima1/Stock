import { Component } from '@angular/core';
import {Menu} from "./menu";
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  openSidebar: boolean = true;

  // @ts-ignore
  menuSidebar = [

    {
      link_name: 'Tableau de bord',
      link: null,
      icon: 'fas fa-chart-line',
      sub_menu: [
        {
          link_name: 'Vue d\'ensemble',
          link: '/html-n-css',
          icon: 'fas fa-chart-pie'
        },
        {
          link_name: 'Statistiques',
          link: 'statistiques',
          icon: 'fas fa-chart-bar'
        },
      ],
    },
    {
      link_name: 'Articles',
      link: null,
      icon: 'fas fa-boxes',
      sub_menu: [
        {
          link_name: 'Articles',
          link: '/posts/web-design',
          icon:'fas fa-boxes',
        },
        {
          link_name: 'Mouvements du stock',
          link: '/posts/login-form',
          icon:'fab fa-stack-overflow'
        }
      ],
    },
    {
      link_name: 'Clients',
      link: null,
      icon: 'fas fa-users',
      sub_menu: [
        {
          link_name: 'Clients',
          link: '/posts/web-design',
          icon:'fas fa-users',
        },
        {
          link_name: 'Commandes clients',
          link: '/posts/login-form',
          icon:'fas fa-shopping-basket'
        }
      ],
    },
    {
      link_name: 'Fournisseurs',
      link: null,
      icon: 'fas fa-users',
      sub_menu: [
        {
          link_name: 'Fournisseurs',
          link: '/posts/web-design',
          icon:'fas fa-users',
        },
        {
          link_name: 'Commandes fournisseurs',
          link: '/posts/login-form',
          icon:'fas fa-truck'
        }
      ],
    },
    {
      link_name: 'Parametrages',
      link: null,
      icon: 'fas fa-cogs',
      sub_menu: [
        {
          link_name: 'Categories',
          link: '/posts/web-design',
          icon:'fas fa-tools',
        },
        {
          link_name: 'Utilisateurs',
          link: '/posts/login-form',
          icon:'fas fa-users-cog'
        }
      ],
    }

  ];

  constructor() {}

  ngOnInit() {}

  showSubmenu(itemEl: HTMLElement) {
    itemEl.classList.toggle('showMenu');
  }
}
