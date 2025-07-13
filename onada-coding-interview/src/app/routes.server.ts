import { Routes } from '@angular/router';
import { routes as baseRoutes } from './app.routes';

// This disables prerendering for challenge route
export const routes: Routes = baseRoutes.map((route) => {
  if (route.path === 'challenge/:track/:id') {
    return {
      ...route,
      data: {
        ...route.data,
        prerender: false,
      },
    };
  }
  return route;
});
