import { Component, input } from '@angular/core';

@Component({
  selector: 'app-episode-item',
  imports: [],
  templateUrl: './episode-item.component.html',
  styleUrl: './episode-item.component.scss'
})
export class EpisodeItemComponent {
  episode = input.required<any>(); //i am tired of using types
}
