import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-remote-unavailable',
  imports: [MatButtonModule, MatIconModule, RouterLink],
  template: `
    <section class="remote-error" role="alert" aria-live="polite">
      <mat-icon class="error-icon" aria-hidden="true">cloud_off</mat-icon>
      <h1 class="error-title">Sección temporalmente no disponible</h1>
      <p class="error-message">
        No pudimos cargar los recursos de esta sección del microfrontend.
        Verifica que el servicio esté activo o intenta nuevamente.
      </p>
      <div class="error-actions">
        <button mat-stroked-button type="button" (click)="reload()">
          <mat-icon>refresh</mat-icon>
          Reintentar
        </button>
        <a mat-flat-button routerLink="/home">
          <mat-icon>home</mat-icon>
          Volver al Inicio
        </a>
      </div>
    </section>
  `,
  styles: `
    .remote-error {
      max-width: 38rem;
      margin: 4rem auto;
      padding: 2.5rem 2rem;
      text-align: center;
      border: 1px solid var(--mat-sys-outline-variant, #c4c7c5);
      border-radius: 12px;
      background: var(--mat-sys-surface-container-low, #f7f9f7);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    }
    .error-icon {
      font-size: 3.5rem;
      width: 3.5rem;
      height: 3.5rem;
      color: var(--mat-sys-error, #ba1a1a);
      margin-bottom: 1rem;
    }
    .error-title {
      font-size: 1.5rem;
      margin: 0 0 0.75rem;
      color: var(--mat-sys-on-surface, #191c1a);
      font-weight: 600;
    }
    .error-message {
      color: var(--mat-sys-on-surface-variant, #404944);
      margin: 0 0 2rem;
      line-height: 1.5;
    }
    .error-actions {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoteUnavailableComponent {
  protected reload(): void {
    window.location.reload();
  }
}
