/*!

=========================================================
* CTV Angular - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/ctv-angular
* Copyright 2019 Coptic Orthodox Church (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/ctv-angular/blob/master/LICENSE.md)

* Coded by Coptic Orthodox Church

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
