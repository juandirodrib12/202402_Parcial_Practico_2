import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieService } from '../serie.service';
import { Serie } from '../serie';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.css'],
})
export class SeriesDetailComponent implements OnInit {
  serie: Serie | null = null;

  constructor(private route: ActivatedRoute, private serieService: SerieService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.serieService.getSeries().subscribe(series => {
      this.serie = series.find(s => s.id == id) || null;
    });
  }
}
