import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { VendedorComponente } from './vendedores/vendedor.componente';
import { VendedorServicio } from './servicios/vendedor.servicio';
import { FVendedorComponente } from './fomulario-vendedor/fvendedor.componente';
import { ActVendedorComponente } from './ActualizarVendedor/ActVendedor.componente';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    VendedorComponente,
    FVendedorComponente,
    ActVendedorComponente
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'vendedor', component: VendedorComponente },
      { path: 'fvendedor', component: FVendedorComponente },
      { path: 'actualizarvendedor', component: ActVendedorComponente },
    ])
  ],
  providers: [VendedorServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
