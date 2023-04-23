import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { LogoFooterComponent } from './componentes/footer/logo-footer/logo-footer.component';
import { SocialFooterComponent } from './componentes/footer/social-footer/social-footer.component';
import { CardLoginComponent } from './componentes/login/card-login/card-login.component';
import { CardRegistroComponent } from './componentes/registro/card-registro/card-registro.component';

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
    AcercaDeComponent, ExperienciaComponent, EducacionComponent, HardSoftSkillsComponent, ProyectoComponent, LogoFooterComponent, SocialFooterComponent, CardLoginComponent, CardRegistroComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      
    }),
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
