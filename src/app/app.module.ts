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

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditAcercaDeComponent } from './componentes/portafolio/acerca-de/edit-acerca-de/edit-acerca-de.component';
import { EditDescripcionComponent } from './componentes/portafolio/acerca-de/edit-descripcion/edit-descripcion.component';
import { ModalBorrarSeccionComponent } from './componentes/portafolio/modal-borrar-seccion/modal-borrar-seccion.component';
import { EditExperienciaComponent } from './componentes/portafolio/experiencia/edit-experiencia/edit-experiencia.component';
import { EditEducacionComponent } from './componentes/portafolio/educacion/edit-educacion/edit-educacion.component';
import { EditProyectoComponent } from './componentes/portafolio/proyecto/edit-proyecto/edit-proyecto.component';
import { EditHssComponent } from './componentes/portafolio/hard-soft-skills/edit-hss/edit-hss.component';
import { EditFotoPerfilComponent } from './componentes/portafolio/acerca-de/edit-foto-perfil/edit-foto-perfil.component';
import { EditBannerComponent } from './componentes/header/banner/edit-banner/edit-banner.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';

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
    AcercaDeComponent, ExperienciaComponent, EducacionComponent, HardSoftSkillsComponent, ProyectoComponent, LogoFooterComponent, SocialFooterComponent, CardLoginComponent, CardRegistroComponent, EditAcercaDeComponent, EditDescripcionComponent, ModalBorrarSeccionComponent, EditExperienciaComponent, EditEducacionComponent, EditProyectoComponent, EditHssComponent, EditFotoPerfilComponent, EditBannerComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgCircleProgressModule.forRoot({
      
    }),
    HttpClientModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
