import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { config } from './app/app.config.server';
import { AppComponent } from './app/app.component';

//const bootstrap = () => platformBrowserDynamic.bootstrapModule(AppModule);
//const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule).then(;
//const bootstrap = () => bootstrapApplication(AppComponent, config);
const bootstrap = AppModule;
export default bootstrap;
