import { Component, ViewChild, ElementRef } from '@angular/core';
import { ElectronService } from './core/services';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';
import { Router, NavigationEnd } from '@angular/router';
import { AppStoreService } from './common/app-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('main', { static: true }) mainContainer: ElementRef<any>;
  constructor(
    public electronService: ElectronService,
    private translate: TranslateService,
    private storeService: AppStoreService,
    private router: Router
  ) {
    // storeService.set('ABC', 'val' + Date.now());
    translate.setDefaultLang('en');
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        this.electronService.ipcRenderer.send('resize-window',
          { width: this.mainContainer.nativeElement.clientWidth, height: this.mainContainer.nativeElement.clientHeight });
      }
    });
    // console.log('AppConfig', AppConfig);

    // if (electronService.isElectron) {
    //   console.log(process.env);
    //   console.log('Mode electron');
    //   console.log('Electron ipcRenderer', electronService.ipcRenderer);
    //   console.log('NodeJS childProcess', electronService.childProcess);
    // } else {
    //   console.log('Mode web');
    // }
  }
}
