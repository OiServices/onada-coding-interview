import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withViewTransitions,
  withDisabledInitialNavigation
} from '@angular/router';
import { getServerRoutes } from './server.routes';

export const config: ApplicationConfig = {
  providers: [
    provideRouter(
      getServerRoutes(),
      withViewTransitions(),
      withDisabledInitialNavigation()
    )
  ]
};

