import {Injectable} from '@angular/core';
import {createStore, select, withProps} from '@ngneat/elf';
import {Placement} from '../models/placement.model';
import {BehaviorSubject} from 'rxjs';

export interface PlacementState {
  placements: Placement[];
  filters: {
    platform: string;
    minTotal: number;
    minInvalidTotal: number;
  };
  pagination: {
    perPage: number;
    currentPage: number;
    totalPages: number;
    totalHits: number;
  };
  sort: {
    sort_by: string;
    sort_order: 'asc' | 'desc';
  };
}

const initialState: PlacementState = {
  placements: [],
  filters: {
    platform: '',
    minTotal: 0,
    minInvalidTotal: 0,
  },
  pagination: {
    perPage: 10,
    currentPage: 1,
    totalPages: 1,
    totalHits: 0,
  },
  sort: {
    sort_by: 'total', // Default sort field
    sort_order: 'desc', // Default sort order
  },
};

const store = createStore(
  {name: 'placement'},
  withProps<PlacementState>(initialState)
);

@Injectable({providedIn: 'root'})
export class PlacementRepository {
  // Selectors
  placements$ = store.pipe(select((state) => state.placements));
  filters$ = store.pipe(select((state) => state.filters));
  pagination$ = store.pipe(select((state) => state.pagination));
  sort$ = store.pipe(select((state) => state.sort));

  // Updaters
  updatePlacements(placements: Placement[]) {
    store.update((state) => ({...state, placements}));
  }

  updateFilters(filters: Partial<PlacementState['filters']>) {
    store.update((state) => ({
      ...state,
      filters: {...state.filters, ...filters},
    }));
  }

  updatePagination(pagination: Partial<PlacementState['pagination']>) {
    store.update((state) => ({
      ...state,
      pagination: {...state.pagination, ...pagination},
    }));
  }

  updateSort(sort: Partial<PlacementState['sort']>) {
    store.update((state) => ({
      ...state,
      sort: {...state.sort, ...sort},
    }));
  }

  getValue() {
    return store.getValue();
  }

  // Loading state management
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  setLoading(isLoading: boolean) {
    this.loadingSubject.next(isLoading);
  }
}
