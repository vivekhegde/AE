import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../../core/services';
import { LaunchItemModel } from '../launch-items.model';

@Component({
  selector: 'app-launcher-home',
  templateUrl: './launcher-home.component.html',
  styleUrls: ['./launcher-home.component.scss']
})
export class LauncherHomeComponent implements OnInit {
  items: LaunchItemModel[] = [];
  constructor(private electronService: ElectronService) { }

  ngOnInit() {
    this.items.push({
      id: 1,
      target: 'C:/Users/viveka.hegade/AppData/Local/Programs/Microsoft VS Code/Code.exe',
      args: 'C:/_00/Dev/_/workspaces/UI_Kinetic.code-workspace'
    });

    this.items.forEach(i => {
      this.electronService.app.getFileIcon(i.target, { size: 'normal' }).then(
        (res) => {
          if (res) {
            i.icon = res.toDataURL();
          }
        }
      );
    });

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

  launch(item: LaunchItemModel): void {
    this.electronService.shell.openItem(item.args);
    this.electronService.ipcRenderer.send('hide-window');
  }

}
