import { EventsComponent } from './Component/events/events.component';
import { DetailcontenTypesComponent } from './Component/detailconten-types/detailconten-types.component';
import { DetailcontenComponent } from './Component/detailconten/detailconten.component';
import { ChangepassComponent } from './Component/changepass/changepass.component';
import { DetailAccountComponent } from './Component/detail-account/detail-account.component';

import { AccountComponent } from './Component/account/account.component';

import { NewsComponent } from './Component/news/news.component';
import { MenuComponent } from './Component/menu/menu.component';
import { TrangChuComponent } from './Component/trang-chu/trang-chu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/trangchu',
    pathMatch:'full',
  },
  {
    path:'detailconten',component:DetailcontenComponent
  },
  {
    path:'detailcontentypes',component:DetailcontenTypesComponent
  },
  {
    path:'events',component:EventsComponent,
  },
  {path:'account',component:AccountComponent,
  children:[
    {path:'news',component:NewsComponent},
    { path:'detail-account',component:DetailAccountComponent},
    { path:'changepass',component:ChangepassComponent},
  ],
},
  

  {path:'trangchu', component:TrangChuComponent},
  {
    path:'Menu', component:MenuComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
