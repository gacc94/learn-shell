import { TestBed } from '@angular/core/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { describe, expect, it } from 'vitest';
import { AppComponent } from './app.component';

describe('AppComponent (Learn Shell)', () => {
    it('crea el componente host correctamente', async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent],
            providers: [provideRouter([]), provideAnimationsAsync()],
        }).compileComponents();

        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();

        expect(fixture.componentInstance).toBeTruthy();
    });

    it('renderiza el título del dashboard en la barra superior', async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent],
            providers: [provideRouter([]), provideAnimationsAsync()],
        }).compileComponents();

        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();

        const compiled = fixture.nativeElement as HTMLElement;
        const title = compiled.querySelector('.toolbar-title');
        expect(title?.textContent).toContain('Good Morning, William');
    });

    it('contiene los enlaces de navegación a los tres microfrontends', async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent],
            providers: [provideRouter([]), provideAnimationsAsync()],
        }).compileComponents();

        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();

        const compiled = fixture.nativeElement as HTMLElement;
        const navLinks = compiled.querySelectorAll('a[mat-list-item]');
        expect(navLinks.length).toBeGreaterThanOrEqual(3);

        const hrefs = Array.from(navLinks).map((link) => link.getAttribute('routerLink'));
        expect(hrefs).toContain('/home');
        expect(hrefs).toContain('/shadowing');
        expect(hrefs).toContain('/grammar');
    });
});
