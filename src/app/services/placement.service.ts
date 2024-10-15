import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PlacementRepository} from '../store/placement.repository';
import {PlacementResponse} from '../models/placement.model';
import {tap, finalize} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PlacementService {
  private apiUrl = 'https://fraud0-test-data.germanywestcentral.cloudapp.azure.com/api/placements';

  constructor(private http: HttpClient, private placementRepo: PlacementRepository) {
  }

  fetchPlacements(): Observable<PlacementResponse> {
    const {filters, pagination, sort} = this.placementRepo.getValue();

    const requestBody = {
      sort_by: sort.sort_by,
      sort_order: sort.sort_order,
      per_page: pagination.perPage,
      page: pagination.currentPage,
      paginate: true,
      key: '',
      platform: filters.platform,
      min_total: filters.minTotal,
      min_invalid_total: filters.minInvalidTotal,
    };

    // Set loading to true before the request
    this.placementRepo.setLoading(true);

    return this.http.post<PlacementResponse>(this.apiUrl, requestBody).pipe(
      tap((response) => {
        this.placementRepo.updatePlacements(response.data);
        this.placementRepo.updatePagination({
          totalPages: response.pagination.total_pages,
          totalHits: response.pagination.total_hits,
        });
      }),
      finalize(() => {
        // Set loading to false after the request completes
        this.placementRepo.setLoading(false);
      })
    );
  }
}
