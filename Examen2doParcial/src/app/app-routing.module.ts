import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvShowsListComponent } from './tv-shows-list/tv-shows-list.component';
import { TvShowDetailComponent } from './tv-show-detail/tv-show-detail.component';

const routes: Routes = [
  { path: '', component: TvShowsListComponent },
  { path: 'show/:id', component: TvShowDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
