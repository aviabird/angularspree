import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
import { SearchPageComponent } from './pages';

const routes: Routes = [
  {
    path: '', component: SearchComponent,
    children: [
      { path: '', component: SearchPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
