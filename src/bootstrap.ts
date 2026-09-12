import { NativeFederationResult } from '@angular-architects/native-federation';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { createAppConfig } from './app/app.config';

export function bootstrap(federation: NativeFederationResult): Promise<unknown> {
  return bootstrapApplication(AppComponent, createAppConfig(federation));
}
