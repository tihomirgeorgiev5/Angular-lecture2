import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { UserService } from './user.service';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection(
    { eventCoalescing: true }),
    {
       provide: UserService,
      //useClass: UserService 
      useValue: 
      {
        users: [{name: 'John', age: 21}],
        addNewUserHandler: () => {alert('Ne!')}
      }
    },
     provideRouter(routes)]
};
