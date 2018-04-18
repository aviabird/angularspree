import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home.component';

export const HomeRoutes = [

  { path: '', component: LandingComponent },
  { path: 'products', component: HomeComponent}
];
