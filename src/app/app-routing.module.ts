import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperAdminLayoutComponent } from './layout/super-admin-layout/super-admin-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/super-admin',
    pathMatch: 'full'
  },
  {
    path: 'super-admin',
    component: SuperAdminLayoutComponent,
    children: [
      { path: 'baggage-tracking', loadChildren: () => import('@modules/baggage-tracking/baggage-tracking.module').then(m => m.BaggageTrackingModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
