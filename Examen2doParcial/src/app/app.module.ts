import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvShowsListComponent } from './tv-shows-list/tv-shows-list.component';
import { TvShowDetailComponent } from './tv-show-detail/tv-show-detail.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TvShowsListComponent,
    TvShowDetailComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: TvShowsListComponent },
      { path: 'show/:id', component: TvShowDetailComponent }
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  //providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*------------------------------------------------------------------------------
// src/app/tv-shows-list/tv-shows-list.component.ts
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
    this.filteredShows = this.tvShows.sort((a, b) => b.releaseDate.localeCompare(a.releaseDate)).slice(0, 2);
  }
}
*/

/* ----------------------------------------------------------------------------------- 
// src/app/tv-shows-list/tv-shows-list.component.html
<div class="container">
  <app-sidebar (showAll)="showAll()" (showRecent)="showRecent()"></app-sidebar>
  <div class="cards-container">
    <div *ngFor="let show of filteredShows" class="card">
      <h2>{{ show.name }}</h2>
      <p>{{ show.description }}</p>
      <p><strong>Fecha de estreno:</strong> {{ show.releaseDate }}</p>
      <button (click)="selectShow(show.id)">Seleccionar</button>
      <button (click)="deleteShow(show.id)">Eliminar</button>
    </div>
  </div>
</div>
*/

/* ------------------------------------------------------------------------- 
// src/app/tv-show-detail/tv-show-detail.component.ts
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
*/

/*----------------------------------------------------------------- 
// src/app/tv-show-detail/tv-show-detail.component.html
<div *ngIf="showId">
  <h1>Detalles del programa con ID: {{ showId }}</h1>
</div>

// src/app/sidebar/sidebar.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() showAll = new EventEmitter<void>();
  @Output() showRecent = new EventEmitter<void>();
}
-----------------------------------------------------------------------
// src/app/sidebar/sidebar.component.html
<div class="sidebar">
  <button (click)="showAll.emit()">Ver todos</button>
  <button (click)="showRecent.emit()">Ver más recientes</button>
</div>
*/