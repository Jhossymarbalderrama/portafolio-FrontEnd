import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortafolioComponent } from './componentes/portafolio/portafolio.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { SocialComponent } from './componentes/header/social/social.component';
import { LogoComponent } from './componentes/header/logo/logo.component';
import { BannerComponent } from './componentes/header/banner/banner.component';
import { AcercaDeComponent } from './componentes/portafolio/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/portafolio/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/portafolio/educacion/educacion.component';

import { HardSoftSkillsComponent } from './componentes/portafolio/hard-soft-skills/hard-soft-skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectoComponent } from './componentes/portafolio/proyecto/proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    PortafolioComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,    
    SocialComponent, 
    LogoComponent, 
    BannerComponent, 
    AcercaDeComponent, ExperienciaComponent, EducacionComponent, HardSoftSkillsComponent, ProyectoComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
