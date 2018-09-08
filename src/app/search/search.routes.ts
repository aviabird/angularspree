import { SearchComponent } from './search.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';

export const SearchRoutes = [
  { path: 'search', component: SearchComponent, },
  { path: 'c/:number', component: CategoryPageComponent},
];
