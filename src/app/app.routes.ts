import { NativeFederationResult } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

interface RemoteRoutesModule {
  REMOTE_ROUTES: Routes;
}

/**
 * Carga de forma diferida las rutas expuestas por el remote.
 * Si la carga falla por caída del remote o desconexión, redirige al componente de contingencia.
 */
function loadRemoteRoutes(
  federation: NativeFederationResult,
  remoteName: string,
) {
  return () =>
    federation
      .loadRemoteModule<RemoteRoutesModule>(remoteName, './Routes')
      .then((module) => module.REMOTE_ROUTES)
      .catch((error) => {
        console.warn(`Aviso: Remote '${remoteName}' no disponible o falló su carga.`, error);
        return import('./pages/remote-unavailable/remote-unavailable.routes').then(
          (m) => m.REMOTE_UNAVAILABLE_ROUTES,
        );
      });
}

export const createRoutes = (federation: NativeFederationResult): Routes => [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    title: 'Inicio | English Learning',
    loadChildren: loadRemoteRoutes(federation, 'mf-home'),
  },
  {
    path: 'shadowing',
    title: 'Shadowing | English Learning',
    loadChildren: loadRemoteRoutes(federation, 'mf-shadowing'),
  },
  {
    path: 'grammar',
    title: 'Gramática | English Learning',
    loadChildren: loadRemoteRoutes(federation, 'mf-grammar'),
  },
  {
    path: 'unavailable',
    title: 'Sección no disponible | English Learning',
    loadChildren: () =>
      import('./pages/remote-unavailable/remote-unavailable.routes').then(
        (m) => m.REMOTE_UNAVAILABLE_ROUTES,
      ),
  },
  { path: '**', redirectTo: 'home' },
];
