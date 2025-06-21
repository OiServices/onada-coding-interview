import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export const adminGuard: CanActivateFn = () => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  // ✅ Only access localStorage in the browser
  if (isPlatformBrowser(platformId)) {
    const isAdmin = localStorage.getItem('onada_admin') === 'true';

    if (!isAdmin) {
      router.navigate(['/admin-login']);
      return false;
    }

    return true;
  }

  // ❌ Block access during server-side rendering
  return false;
};

