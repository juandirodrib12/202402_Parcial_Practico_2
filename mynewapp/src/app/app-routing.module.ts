import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesListComponent } from './serie/series-list/series-list.component';
import { SeriesDetailComponent } from './serie/series-detail/series-detail.component';

const routes: Routes = [
  { path: 'series', component: SeriesListComponent }, 
  { path: 'series/:id', component: SeriesDetailComponent }, 
  { path: '', redirectTo: '/series', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

