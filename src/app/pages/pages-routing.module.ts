import { ShowDetailsComponent } from './show-details/show-details.component';
import { BrowseComponent } from './browse/browse.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'browse',
    component: BrowseComponent
  },
  {
    path: 'show-details/:id',
    component: ShowDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
