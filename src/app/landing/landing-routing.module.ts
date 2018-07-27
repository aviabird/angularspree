import { LandingComponent } from './landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandsPageComponent } from './brands-page/brands-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';
const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'b/brands', component: BrandsPageComponent},
  { path: 'a/about', component: AboutUsComponent},
  { path: 'r/return', component: ReturnPolicyComponent},
  { path: 'f/faq', component: FaqPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule {}
