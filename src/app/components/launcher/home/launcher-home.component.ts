import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../../core/services';
import { LaunchItemModel } from '../launch-items.model';

@Component({
  selector: 'app-launcher-home',
  templateUrl: './launcher-home.component.html',
  styleUrls: ['./launcher-home.component.scss']
})
export class LauncherHomeComponent implements OnInit {
  showNav: boolean;
  constructor(private electronService: ElectronService) { }

  links = [
    { label: 'My Day', icon: 'mdi mdi-white-balance-sunny', navLink: ['list'] },
    { label: 'Focus', icon: 'mdi mdi-format-list-checks', navLink: ['list', { type: 'focus' }] },
    { label: 'Explore', icon: 'mdi mdi-webhook', navLink: ['list'] },
    { label: 'Collaboration', icon: 'mdi mdi-note-outline', navLink: ['list'] },
    { label: 'Vault', icon: 'mdi mdi-lock', navLink: ['list'] }
  ];
  ngOnInit() {
    // this.items.push({
    //   id: 1,
    //   target: 'C:/Users/viveka.hegade/AppData/Local/Programs/Microsoft VS Code/Code.exe',
    //   args: 'C:/_00/Dev/_/workspaces/UI_Kinetic.code-workspace'
    // });

    // this.items.forEach(i => {
    //   this.electronService.app.getFileIcon(i.target, { size: 'normal' }).then(
    //     (res) => {
    //       if (res) {
    //         i.icon = res.toDataURL();
    //       }
    //     }
    //   );
    // });

    // const path = 'C:/_00/dev/_/';
    // this.electronService.fs.readdir(path, (err, files) => {
    //   if (err) {
    //     throw err;
    //   }
    //   files.forEach((file) => {
    //     this.getFileX(path, file, err);
    //   });
    // });
    // this.getFileX(p, 'Ssms.exe');
  }
  // private getFileX(path: string, file: string) {
  //   const fileName = join(path, file);
  //   this.electronService.fs.stat(fileName, (errX, statX) => {
  //     if (errX) {
  //       throw errX;
  //     }
  //     if (statX.isFile) {
  //       this.electronService.app.getFileIcon(fileName, { size: 'normal' }, (errXX, res) => {
  //         if (res) {
  //           document.write('<img src="' + res.toDataURL() + '" />');
  //         }
  //       });
  //       console.log('[VH]: LauncherHomeComponent -> ngOnInit -> statX', fileName, statX);
  //     }
  //   });
  // }

  // launch(item: LaunchItemModel): void {
  //   this.electronService.shell.openItem(item.args);
  //   this.electronService.ipcRenderer.send('hide-window');
  // }

}
