import {
    type ApplicationConfig,
    InjectionToken,
    provideBrowserGlobalErrorListeners,
    provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import type { NativeFederationResult } from '@angular-architects/native-federation';
import { createRoutes } from './app.routes';

export const NATIVE_FEDERATION = new InjectionToken<NativeFederationResult>('NATIVE_FEDERATION');

export const createAppConfig = (federation: NativeFederationResult): ApplicationConfig => ({
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideZonelessChangeDetection(),
        { provide: NATIVE_FEDERATION, useValue: federation },
        provideRouter(createRoutes(federation), withComponentInputBinding()),
    ],
});
