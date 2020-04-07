import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { ToitComponent } from './toit/toit.component';
import { PenteComponent } from './toit/pente.component';
import { PlatComponent } from './toit/plat.component';
import { CalepinageComponent } from './calepinage/calepinage.component';
import { ConsommationComponent } from './consommation/consommation.component';
import { InscriptionComponent } from './inscription/inscription.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'location', component: LocationComponent},
  {path: 'toit', component: ToitComponent,
    children: [
      { path: 'pente', component: PenteComponent },
      { path: 'plat', component: PlatComponent },
    ]},
  {path: 'calepinage', component: CalepinageComponent},
  {path: 'consommation', component: ConsommationComponent},
  {path: 'inscription', component: InscriptionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
