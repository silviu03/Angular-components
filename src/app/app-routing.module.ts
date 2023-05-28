import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: 'elements',
    loadChildren: () => import('./elements/elements.module').then((m) => m.ElementsModule),
  },
  {
    path: 'collections',
    loadChildren: () => import('./collections/collections.module').then((m) => m.CollectionsModule),
  },
  {
    path: 'views',
    loadChildren: () => import('./views/views.module').then((m) => m.ViewsModule),
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
