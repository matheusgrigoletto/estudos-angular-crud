import { NavItem } from './NavItem.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navItems: NavItem[] = [
    {
      title: "Início",
      icon: "home",
      routerUrl: "",
    },
    {
      title: "Produtos",
      icon: "storefront",
      routerUrl: "products",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
