// src/app/components/table/table.component.ts
import {Component, OnInit} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {PlacementRepository} from '../../store/placement.repository';
import {Placement} from '../../models/placement.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  standalone: true,
  imports: [MatTableModule],
})
export class TableComponent implements OnInit {
  placements: Placement[] = [];

  constructor(private placementRepo: PlacementRepository) {
  }

  ngOnInit() {
    this.placementRepo.placements$.subscribe((placements) => {
      this.placements = placements;
    });
  }
}
