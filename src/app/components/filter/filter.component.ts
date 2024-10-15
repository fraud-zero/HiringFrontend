import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {PlacementRepository} from '../../store/placement.repository';
import {PlacementService} from '../../services/placement.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class FilterComponent {
  platformOptions = ['', 'app', 'web'];
  selectedPlatform = '';
  minTotal: number = 0;
  minInvalidTotal: number = 0;

  constructor(
    private placementRepo: PlacementRepository,
    private placementService: PlacementService
  ) {
  }

  applyFilters() {
    this.placementRepo.updateFilters({
      platform: this.selectedPlatform,
      minTotal: this.minTotal,
      minInvalidTotal: this.minInvalidTotal,
    });
    this.placementService.fetchPlacements().subscribe();
  }
}
