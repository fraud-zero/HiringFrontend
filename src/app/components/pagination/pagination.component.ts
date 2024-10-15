import {Component} from '@angular/core';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import {NgIf, AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  standalone: true,
  imports: [NgIf, AsyncPipe, MatPaginatorModule],
})
export class PaginationComponent {
  // TODO: Subscribe to pagination state

  constructor(/* Inject services if needed */) {
    // Initialization if necessary
  }

  changePage(event: PageEvent) {
    // TODO: Update pagination state based on page event
    // TODO: Trigger data fetch based on new pagination
  }
}
