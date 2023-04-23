import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PortafolioComponent } from './componentes/portafolio/portafolio.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
  {path: '', component: PortafolioComponent},
  {path: 'portafolio', component: PortafolioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path:'**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
