import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { appConfig } from './app/app.config';
import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';

platformBrowserDynamic().bootstrapModule(AppModule)
