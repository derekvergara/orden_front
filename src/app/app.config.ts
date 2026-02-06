import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule), // habilita HttpClient
    importProvidersFrom(FormsModule),       // habilita [(ngModel)]
    importProvidersFrom(CommonModule)  // habilita directivas comunes como *ngIf y *ngFor
  ]
};