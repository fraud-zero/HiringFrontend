import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FilterComponent} from './components/filter/filter.component';
import {ChartComponent} from './components/chart/chart.component';
import {TableComponent} from './components/table/table.component';
import {PaginationComponent} from './components/pagination/pagination.component';
import {PlacementRepository} from './store/placement.repository';
import {AsyncPipe} from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FilterComponent,
    ChartComponent,
    TableComponent,
    PaginationComponent,
    AsyncPipe,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Note the change from 'styleUrl' to 'styleUrls'
})
export class AppComponent {
  title = 'fraud0-dashboard';
  loading$ = this.placementRepo.loading$;

  constructor(private placementRepo: PlacementRepository) {
  }
}
