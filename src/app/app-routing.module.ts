import { ProfileUserComponent } from './profile-user/profile-user.component';
import { AuthAdminService } from './authService/auth-admin.service';
import { AuthGuardService } from './authService/auth-guard.service';
import { BillClientComponent } from './bill-client/bill-client.component';
import { BillHistoComponent } from './bill-histo/bill-histo.component';
import { CheckOrdersComponent } from './check-orders/check-orders.component';
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { PanierComponent } from './panier/panier.component';
import { AboutComponent } from './about/about.component';
import { EarringsComponent } from './earrings/earrings.component';
import { RingsComponent } from './rings/rings.component';
import { BraceletsComponent } from './bracelets/bracelets.component';
import { NecklacesComponent } from './necklaces/necklaces.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RechercheComponent } from './recherche/recherche.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashbordAdminComponent } from './dashbord-admin/dashbord-admin.component';
import { AddArticleComponent } from './add-article/add-article.component';
const routes: Routes = [
  {path:"home", component :HomeComponent},
  {path:"article", component :ArticleComponent},
  {path:"panier", component :PanierComponent},
  {path:"about", component :AboutComponent},
  {path:"earrings", component :EarringsComponent},
  {path:"rings", component :RingsComponent},
  {path:"bracelets", component :BraceletsComponent},
  {path:"necklaces", component :NecklacesComponent},
  {path:"product-page", component :ProductPageComponent},
  {path:"wish-list", component :WishListComponent,canActivate:[AuthGuardService]},
  {path:"checkout", component :CheckoutComponent,canActivate:[AuthGuardService]},
  {path:"recherche", component :RechercheComponent},
  {path:"log-in", component :LogInComponent},
  {path:"sign-up", component :SignUpComponent},
  {path:"dashbord-admin", component :DashbordAdminComponent,canActivate:[AuthAdminService]},
  {path:"add-article", component :AddArticleComponent,canActivate:[AuthAdminService]},
  {path:"list-article", component :ListArticleComponent,canActivate:[AuthAdminService]},
  {path:"update-product", component :UpdateProductComponent,canActivate:[AuthAdminService]},
  {path:"list-user", component :ListUserComponent,canActivate:[AuthAdminService]},
  {path:"profile-admin", component :ProfileAdminComponent },
  {path:"check-orders", component :CheckOrdersComponent,canActivate:[AuthAdminService]},
  {path:"bill-histo", component :BillHistoComponent,canActivate:[AuthAdminService]},
  {path:"bill-client", component :BillClientComponent,canActivate:[AuthGuardService]},
  {path:"profile-user", component :ProfileUserComponent,canActivate:[AuthGuardService]},
  {path:"", redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
