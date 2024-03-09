import { Component, HostListener } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { Menu } from '../../interfaces/i-menu';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ MatSidenavModule, 
             MatCheckboxModule, 
             RouterLink, 
             FormsModule, 
             MatButtonModule, 
             MatIconModule, 
             MatToolbarModule, 
             MatListModule, 
             MatIconModule, 
             MatDividerModule, 
             DatePipe,
             RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  menus: Menu[] = [
    {
      id: 1,
      name: 'Início',
      icon: 'home',
      route: "/inicio"
    },
    {
      id: 2,
      name: 'Clientes',
      icon: 'person',
      route: "/clientes"
    },
    {
      id: 3,
      name: 'Produtos',
      icon: 'inventory_2',
      route: "/produtos"
    },
    {
      id: 4,
      name: 'Fornecedores',
      icon: 'group',
      route: "/fornecedores"
    },
    {
      id: 5,
      name: 'Veículos',
      icon: 'directions_car',
      route: "/veiculos"
    }
  ];



  public title = 'Software Mecânica';

  public events: string[];
  public opened: boolean = true;
  public isFullscreen: boolean;

  @HostListener('document:fullscreenchange', ['$event'])
  fullscreenHandler(_event: Event): void {
    this.isFullscreen = document.fullscreenElement !== null;
  }

  toggleFullscreen(): void {
    if (!this.isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

}
