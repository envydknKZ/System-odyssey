import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SolarSystemComponent } from './pages/solar-system/solar-system.component';
import { PlanetsComponent } from './pages/planets/planets.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'solar-system', component: SolarSystemComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: '**', redirectTo: '' }
];
