import {Component} from '@angular/core';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import {NgIf, AsyncPipe} from '@angular/common';
import {PlacementRepository} from '../../store/placement.repository';
import {PlacementService} from '../../services/placement.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  standalone: true,
  imports: [NgIf, AsyncPipe, MatPaginatorModule],
})
export class PaginationComponent {
  pagination$ = this.placementRepo.pagination$;

  constructor(
    private placementRepo: PlacementRepository,
    private placementService: PlacementService
  ) {
  }

  changePage(event: PageEvent) {
    const page = event.pageIndex + 1;
    this.placementRepo.updatePagination({currentPage: page});
    this.placementService.fetchPlacements().subscribe();
  }
}
