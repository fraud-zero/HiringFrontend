import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FilterComponent} from './components/filter/filter.component';
import {ChartComponent} from './components/chart/chart.component';
import {TableComponent} from './components/table/table.component';
import {PaginationComponent} from './components/pagination/pagination.component';
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
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fraud0-dashboard';
  // loading$ = this.placementRepo.loading$;

  constructor(/* Inject services if needed */) {
    // Initialization if necessary
  }
}
