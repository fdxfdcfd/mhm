import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ListAllProductComponent } from './pages/list-all-product/list-all-product.component';
import { ModRouteCategoryComponent } from './modules/mod-route-category/mod-route-category.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutResolveService } from './services/about-resolve.service';
import { CategoryProductService } from './services/category-product.service';


const routes: Routes = [

  { path: 'trang-chu', component: HomeComponent },
  { path: 'san-pham/:id', component: ProductDetailComponent },
  { path: 've-chung-toi', component: AboutComponent },
  { path: 'giao-hang', component: DeliveryComponent },
  { path: 'tin-tuc', component: NewsComponent },
  { path: 'lien-he', component: ContactComponent },
  { path: 'tat-ca-san-pham', component: ListAllProductComponent, data: { 'category_id': '', 'product_type': '' } },
  { path: 'san-pham-moi', component: ListAllProductComponent, data: { 'category_id': '', 'product_type': 1 } },
  { path: 'san-pham-ban-chay', component: ListAllProductComponent, data: { 'category_id': '', 'product_type': 2 } },
  { path: '404', component: NotFoundComponent},
  { path: ':category', component: ModRouteCategoryComponent},
  { path: '', redirectTo: 'trang-chu', pathMatch: 'full' },
  
  { path: '**', redirectTo: '/404' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

 }
