import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface TvShow {
  id: number;
  name: string;
  description: string;
  releaseDate: string;
}

@Component({
  selector: 'app-tv-shows-list',
  templateUrl: './tv-shows-list.component.html',
  styleUrls: ['./tv-shows-list.component.css']
})
export class TvShowsListComponent {
  tvShows: TvShow[] = [
    { id: 1, name: 'Breaking Bad', description: 'Un profesor de química...', releaseDate: '2008-01-20' },
    { id: 2, name: 'Game of Thrones', description: 'Un mundo de fantasía...', releaseDate: '2011-04-17' },
    { id: 3, name: 'Stranger Things', description: 'Un grupo de niños...', releaseDate: '2016-07-15' }
  ];
  
  filteredShows = [...this.tvShows];

  constructor(private router: Router) {}

  selectShow(id: number) {
    this.router.navigate(['/show', id]);
  }

  deleteShow(id: number) {
    this.filteredShows = this.filteredShows.filter(show => show.id !== id);
  }

  showAll() {
    this.filteredShows = [...this.tvShows];
  }

  showRecent() {
    this.filteredShows = this.tvShows
      .sort((a, b) => b.releaseDate.localeCompare(a.releaseDate))
      .slice(0, 2);
  }
}
