import { initFederation, type NativeFederationResult } from '@angular-architects/native-federation';

const isGitHubPages = typeof window !== 'undefined' && window.location.hostname.endsWith('github.io');
const manifestUrl = isGitHubPages ? 'federation.manifest.prod.json' : 'federation.manifest.json';

initFederation(manifestUrl, {
    hostRemoteEntry: { url: './remoteEntry.json' },
})
    .then((federation: NativeFederationResult) => import('./bootstrap').then(({ bootstrap }) => bootstrap(federation)))
    .catch((error: unknown) => {
        console.error('Error crítico: No se pudo inicializar Native Federation.', error);
        renderFatalStartupError();
    });

function renderFatalStartupError(): void {
    const root = document.querySelector('app-root') || document.body;
    root.innerHTML = `
        <div style="font-family: system-ui, sans-serif; padding: 2.5rem; max-width: 38rem; margin: 4rem auto; border: 1px solid #ffcdd2; border-radius: 12px; background: #ffebee; color: #b71c1c; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
        <h1 style="margin-top: 0; font-size: 1.5rem; font-weight: 600;">Error al iniciar el Shell</h1>
        <p style="color: #491212; line-height: 1.5; margin-bottom: 1.5rem;">
            No fue posible cargar el manifiesto de microfrontends o los módulos de federación. Verifica tu conexión de red o el estado de los servicios.
        </p>
        <button onclick="window.location.reload()" style="background: #b71c1c; color: #ffffff; border: none; padding: 0.65rem 1.25rem; border-radius: 6px; cursor: pointer; font-size: 0.95rem; font-weight: 500;">
            Reintentar carga
        </button>
        </div>
    `;
}
