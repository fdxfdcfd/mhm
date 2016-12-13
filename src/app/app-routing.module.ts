import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';




const routes: Routes = [
  
  { path: 'trang-chu',  component: HomeComponent },
  // { path: 'san-pham/:id',  component: ProductDetailComponent },
  // { path: 've-chung-toi',  component: AboutComponent },
  // { path: 'giao-hang',  component: DeliveryComponent },
  // { path: 'tin-tuc', component: NewsComponent},
  // { path: 'lien-he', component: ContactComponent},
  // { path: 'san-pham-moi', component: ProductGridComponent},
  { path: '', redirectTo: 'trang-chu', pathMatch: 'full' },
  // {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '404'}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
