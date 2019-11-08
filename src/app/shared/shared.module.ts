import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';

@NgModule({
<<<<<<< HEAD
    declarations: [PageNotFoundComponent, WebviewDirective],
    imports: [CommonModule, TranslateModule],
    exports: [TranslateModule, WebviewDirective]
=======
  declarations: [PageNotFoundComponent, WebviewDirective],
  imports: [CommonModule, TranslateModule, FormsModule],
  exports: [TranslateModule, WebviewDirective, FormsModule]
>>>>>>> upstream/master
})
export class SharedModule { }
