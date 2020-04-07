import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LocationComponent } from './location/location.component';
import { ToitComponent } from './toit/toit.component';
import { PenteComponent } from './toit/pente.component';
import { PlatComponent } from './toit/plat.component';
import { CalepinageComponent } from './calepinage/calepinage.component';
import { ConsommationComponent } from './consommation/consommation.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LocationComponent,
    ToitComponent,
    PenteComponent,
    PlatComponent,
    CalepinageComponent,
    ConsommationComponent,
    InscriptionComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
