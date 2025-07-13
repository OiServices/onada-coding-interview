import { Routes } from '@angular/router';
import { routes as baseRoutes } from './app.routes';

export function getServerRoutes(): Routes {
  return baseRoutes.map(route => {
    if (route.path === 'challenge/:track/:id') {
      return {
        ...route,
        data: {
          ...route.data,
          prerender: false,
          renderMode: 'no-prerendering'
        }
      };
    }
    return route;
  });
}
