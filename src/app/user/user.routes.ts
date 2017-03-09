import { OverviewComponent } from './overview/overview.component';
import { UserComponent } from './user.component';

export const UserRoutes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', component: UserComponent },
  { path: 'orders', component: OverviewComponent},  
];