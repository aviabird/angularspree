import * as searchFiltersContainer from './search-filters-container';
import * as searchResultsContainer from './search-results-container';
import * as filterSummaryContainer from './filter-summary-container';
import * as searchTitleContainer from './search-title-container';
import * as mobileFiltersContainer from './mobile-filters-container';

export const SEARCH_COMPONENTS = [
  ...searchFiltersContainer.COMPONENTS,
  ...searchResultsContainer.COMPONENTS,
  ...filterSummaryContainer.COMPONENTS,
  ...searchTitleContainer.COMPONENTS,
  ...mobileFiltersContainer.COMPONENTS
];
