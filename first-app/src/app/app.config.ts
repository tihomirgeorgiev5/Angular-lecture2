import { ApplicationConfig, InjectionToken, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { UserService } from './user.service';

export const myStringInjectionToken = new InjectionToken('myString');
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection(
    { eventCoalescing: true }),
    {
       provide: UserService,
       useClass: UserService 
      
    },
    {
        provide: myStringInjectionToken,
        useValue: 'Hello, World!'
    },
    provideRouter(routes)]
};
