import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Lumina';
}
