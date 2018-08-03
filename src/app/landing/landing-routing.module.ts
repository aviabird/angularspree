import { LandingComponent } from './landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandsPageComponent } from './brands-page/brands-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';
const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'b/brands', component: BrandsPageComponent },
  { path: 'info/About us', component: AboutUsComponent },
  { path: 'info/Return Policy', component: ReturnPolicyComponent },
  { path: 'info/FAQs', component: FaqPageComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
