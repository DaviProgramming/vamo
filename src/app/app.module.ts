import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeEscolhaCidadeComponent } from './components/home-escolha-cidade/home-escolha-cidade.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuemsomosComponent } from './pages/quemsomos/quemsomos.component';
import { PlanosComponent } from './pages/planos/planos.component';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { AsideComponent } from './components/aside/aside.component';







const routes: Routes = [

  { path: '', component: HomeComponent },
  {path: 'quem-somos', component: QuemsomosComponent},
  {path: 'planos', component: PlanosComponent},
  {path: 'contato', component: ContatosComponent},
  {path: '**', component: HomeComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeEscolhaCidadeComponent,
    NavbarComponent,
    FooterComponent,
    QuemsomosComponent,
    PlanosComponent,
    ContatosComponent,
    AsideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
