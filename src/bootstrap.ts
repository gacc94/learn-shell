import { bootstrapApplication } from '@angular/platform-browser';
import type { NativeFederationResult } from '@angular-architects/native-federation';
import { AppComponent } from './app/app.component';
import { createAppConfig } from './app/app.config';

export function bootstrap(federation: NativeFederationResult): Promise<unknown> {
    return bootstrapApplication(AppComponent, createAppConfig(federation));
}
