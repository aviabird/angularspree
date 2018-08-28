import { LandingComponent } from './landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandsPageComponent } from './components/brands-page/brands-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';
import { ReturnPolicyComponent } from './components/return-policy/return-policy.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'b/brands', component: BrandsPageComponent },
  { path: 'info/about', component: AboutUsComponent },
  { path: 'info/return_policy', component: ReturnPolicyComponent },
  { path: 'info/faqs', component: FaqPageComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LandingRoutingModule { }
