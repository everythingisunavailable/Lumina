import { Component } from '@angular/core';
import { NavItemComponent } from '../components/nav-item/nav-item.component';

@Component({
  selector: 'app-header',
  imports: [NavItemComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
}
