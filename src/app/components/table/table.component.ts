import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {PlacementRepository} from '../../store/placement.repository';
import {Placement} from '../../models/placement.model';
import {PlacementService} from '../../services/placement.service';
import {MatSort, Sort} from '@angular/material/sort';
import {MatSortModule} from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatSortModule],
})
export class TableComponent implements OnInit {
  placements: Placement[] = [];
  displayedColumns: string[] = ['key', 'platform', 'total', 'invalid_total'];

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private placementRepo: PlacementRepository,
    private placementService: PlacementService
  ) {
  }

  ngOnInit() {
    // Subscribe to placements
    this.placementRepo.placements$.subscribe((placements) => {
      this.placements = placements;
    });

    // Subscribe to sort changes
    this.placementRepo.sort$.subscribe((sort) => {
      // Optionally, you can update the sort UI here if needed
    });

    // Initial fetch
    this.placementService.fetchPlacements().subscribe();
  }

  onSortChange(sortState: Sort) {
    const sortBy = sortState.active;
    const sortOrder = sortState.direction || 'asc';

    this.placementRepo.updateSort({
      sort_by: sortBy,
      sort_order: sortOrder as 'asc' | 'desc',
    });

    // Reset to first page when sorting changes
    this.placementRepo.updatePagination({currentPage: 1});

    // Fetch placements with new sort
    this.placementService.fetchPlacements().subscribe();
  }
}
