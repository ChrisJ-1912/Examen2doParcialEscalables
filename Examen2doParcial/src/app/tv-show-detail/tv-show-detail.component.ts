import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv-show-detail',
  templateUrl: './tv-show-detail.component.html',
  styleUrls: ['./tv-show-detail.component.css']
})
export class TvShowDetailComponent {
  showId: number | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.showId = params['id'];
    });
  }
}