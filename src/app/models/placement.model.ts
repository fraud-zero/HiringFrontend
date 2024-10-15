// src/app/models/placement.model.ts
export interface Placement {
  key: string;
  platform: string;
  total: number;
  invalid_total: number;
  invalid_total_percent: string;
  pixel_stuffing: number;
  pixel_stuffing_percent: string;
  viewable: number;
  viewable_percent: string;
  non_viewable: number;
  non_viewable_percent: string;
  mfa_site_symptoms: number;
  mfa_site_symptoms_percent: string;
  other_invalid: number;
  other_invalid_percent: string;
}

// src/app/models/placement-response.model.ts
export interface Pagination {
  total_hits: number;
  per_page: number;
  current_page: number;
  total_pages: number;
}

export interface PlacementResponse {
  slice: string;
  data: Placement[];
  pagination: Pagination;
}
