import { UpperCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-item',
  imports: [UpperCasePipe, RouterLink],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss'
})
export class NavItemComponent {
  title = input('nav-item');
  icon = input('');
  path = input('');
}
