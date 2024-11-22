import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  constructor(private serieService: SerieService) { }

  series: Array<Serie> = []
  selectedSerie: Serie | null = null;

  getSeries() {
    this.serieService.getSeries().subscribe(series => this.series = series);
  }

  ngOnInit() {
    this.getSeries();
  }

  showDetails(serie: Serie): void {
    this.selectedSerie = serie;
  }

  closeModal(): void {
    this.selectedSerie = null;
  }

  calculateAverageSeasons(): number {
    const totalSeasons = this.series.reduce((acc, serie) => acc + serie.seasons, 0);
    return parseFloat((totalSeasons / this.series.length).toFixed(2));
  }

}
