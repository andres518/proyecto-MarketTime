import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MensajeexitoComponent } from './components/mensajeexito/mensajeexito.component';
import { RegistroComponent } from './components/registro/registro.component'
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  { path: '', component:LoginComponent },
  { path: 'mensajeexito', component: MensajeexitoComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'nav', component: NavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
