import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SeriesListComponent } from './series-list/series-list.component';
import { SeriesDetailComponent } from './series-detail/series-detail.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [
    SeriesListComponent,
    SeriesDetailComponent,
  ],
  exports: [
    SeriesListComponent,
    SeriesDetailComponent,
  ],
})
export class SerieModule { }

