import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { PanierComponent } from './panier/panier.component';
import { EarringsComponent } from './earrings/earrings.component';
import { RingsComponent } from './rings/rings.component';
import { BraceletsComponent } from './bracelets/bracelets.component';
import { NecklacesComponent } from './necklaces/necklaces.component';
import { AboutComponent } from './about/about.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RechercheComponent } from './recherche/recherche.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import{HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {environment} from 'src/environments/environment';
import { DashbordAdminComponent } from './dashbord-admin/dashbord-admin.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';
import { CheckOrdersComponent } from './check-orders/check-orders.component';
import { BillHistoComponent } from './bill-histo/bill-histo.component';
import { BillClientComponent } from './bill-client/bill-client.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleComponent,
    PanierComponent,
    EarringsComponent,
    RingsComponent,
    BraceletsComponent,
    NecklacesComponent,
    AboutComponent,
    ProductPageComponent,
    WishListComponent,
    CheckoutComponent,
    RechercheComponent,
    SignUpComponent,
    LogInComponent,
    DashbordAdminComponent,
    AddArticleComponent,
    ListArticleComponent,
    UpdateProductComponent,
    ListUserComponent,
    ProfileAdminComponent,
    CheckOrdersComponent,
    BillHistoComponent,
    BillClientComponent,
    ProfileUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
