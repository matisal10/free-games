import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailsComponent } from './components/details/details.component';
import { CategoryGamesComponent } from './components/category-games/category-games.component';

const routes: Routes = [
  {
    path: 'Home', component: DashboardComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'category/:category/:platform',
    component: CategoryGamesComponent
  },
  {
    path: '**',
    redirectTo: 'Home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
