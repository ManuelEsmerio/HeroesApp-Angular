import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { SearchComponent } from './pages/search/search.component';

const routes:Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'list',
        component:ListComponent
      },
      {
        path:'save',
        component:AgregarComponent
      },
      {
        path:'edit/:id',
        component:AgregarComponent
      },
      {
        path:'search',
        component:SearchComponent
      },
      {
        path:':id',
        component:HeroeComponent
      },
      {
        path:'**',
        redirectTo:'list'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports:[
    RouterModule
  ]
})
export class HeroesRoutingModule { }
