// src/app/components/chart/chart.component.ts
import {Component, OnInit} from '@angular/core';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {PlacementRepository} from '../../store/placement.repository';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  standalone: true,
  imports: [NgxChartsModule],
})
export class ChartComponent implements OnInit {
  chartData: any[] = [];
  view: [number, number] = [700, 400];
  colorScheme = 'vivid';

  // Options for the chart
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showLabels = true;

  constructor(private placementRepo: PlacementRepository) {
  }

  ngOnInit() {
    this.placementRepo.placements$.subscribe((placements) => {
      this.chartData = placements.map((placement) => ({
        name: placement.key,
        value: placement.invalid_total,
      }));
    });
  }
}
