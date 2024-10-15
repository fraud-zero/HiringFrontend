// src/app/app.config.ts
import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import {provideHttpClient, HttpClientModule} from '@angular/common/http';
import {provideAnimations} from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]),
    provideHttpClient(),
    provideAnimations(),
  ],
};
