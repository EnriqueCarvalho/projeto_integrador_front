import { ErrorHandler, NgModule, Pipe } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './shared/components/menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InterceptorService } from './shared/service/interceptor.service';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TextMaskModule } from 'angular2-text-mask';
import { ErrorhandlerService } from './shared/service/errorhandler.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CpfPipe } from './shared/pipe/cpf.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    AccordionModule.forRoot(),
    TextMaskModule,
    ModalModule.forRoot(),
   
  ],
  exports:[
    MenuComponent,
    TextMaskModule,
    ModalModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
    {provide: ErrorHandler, useClass: ErrorhandlerService},  
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
