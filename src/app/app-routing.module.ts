import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardRoutes } from './dashboard/dashboard-routing.module';
import { CalculadoraRoutes } from './calculadora/calculadora-routing.module';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  ...DashboardRoutes,
  ...CalculadoraRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
