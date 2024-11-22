import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { Serie } from '../serie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css'],
})
export class SeriesListComponent implements OnInit {
  series: Array<Serie> = [];

  constructor(private serieService: SerieService, private router: Router) {}

  ngOnInit(): void {
    this.serieService.getSeries().subscribe(series => this.series = series);
  }

  navigateToDetail(id: number): void {
    this.router.navigate(['/series', id]);
  }

  calculateAverageSeasons(): number {
    const totalSeasons = this.series.reduce((acc, serie) => acc + serie.seasons, 0);
    return parseFloat((totalSeasons / this.series.length).toFixed(2));
  }
}

