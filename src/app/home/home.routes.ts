import { HomeComponent } from './home.component';
import { CategoryPageComponent } from './category-page/category-page.component';

export const HomeRoutes = [
  { path: 'search', component: HomeComponent },
  { path: 'c/:number', component: CategoryPageComponent},
];
