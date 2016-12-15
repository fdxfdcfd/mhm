import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ListAllProductComponent } from './pages/list-all-product/list-all-product.component';


const routes: Routes = [

  { path: 'trang-chu', component: HomeComponent },
  { path: 'san-pham/:id', component: ProductDetailComponent },
  { path: 've-chung-toi', component: AboutComponent },
  { path: 'giao-hang', component: DeliveryComponent },
  { path: 'tin-tuc', component: NewsComponent },
  { path: 'lien-he', component: ContactComponent },
  { path: 'tat-ca-san-pham', component: ListAllProductComponent, data: { 'cate_product': '', 'product_type': '' } },
  { path: 'san-pham-moi', component: ListAllProductComponent, data: { 'cate_product': '', 'product_type': 1 } },
  { path: 'san-pham-ban-chay', component: ListAllProductComponent, data: { 'cate_product': '', 'product_type': 2 } },
  { path: '', redirectTo: 'trang-chu', pathMatch: 'full' },
  // {path: '404', component: PageNotFoundComponent},
  { path: '**', redirectTo: '404' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
