import { NativeFederationResult } from '@angular-architects/native-federation';
import {
  ApplicationConfig,
  InjectionToken,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { createRoutes } from './app.routes';

export const NATIVE_FEDERATION =
  new InjectionToken<NativeFederationResult>('NATIVE_FEDERATION');

export const createAppConfig = (
  federation: NativeFederationResult,
): ApplicationConfig => ({
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideAnimationsAsync(),
    { provide: NATIVE_FEDERATION, useValue: federation },
    provideRouter(createRoutes(federation), withComponentInputBinding()),
  ],
});
