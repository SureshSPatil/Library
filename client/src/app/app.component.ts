import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
 selector: 'app-root',
 template: `
 <div class="container-md">
    <router-outlet></router-outlet>
 </div>
 `
})
export class AppComponent { }
