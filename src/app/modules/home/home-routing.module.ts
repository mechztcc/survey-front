import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'search', component: SearchPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
