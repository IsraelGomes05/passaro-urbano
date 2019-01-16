import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TopoComponent} from './topo/topo.component';
import {HomeComponent} from './home/home.component';
import {RodapeComponent} from './rodape/rodape.component';
import {HttpModule} from '@angular/http';
import {RestauranteComponent} from './restaurante/restaurante.component';
import {DiversaoComponent} from './diversao/diversao.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {OfertaComponent} from './oferta/oferta.component';
import {ComoUsarComponent} from './oferta/como-usar/como-usar.component';
import {OndeFicaComponent} from './oferta/onde-fica/onde-fica.component';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import {DescricaoReduzida} from './shared/descricao-reduzida.pipe';
import {OrdemCompraComponent} from './ordem-compra/ordem-compra.component';
import {OrdemCompraSucessoComponent} from './ordem-compra-sucesso/ordem-compra-sucesso.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestauranteComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    DescricaoReduzida,
    OrdemCompraComponent,
    OrdemCompraSucessoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
registerLocaleData(localePt);
