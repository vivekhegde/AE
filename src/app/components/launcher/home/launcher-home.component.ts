import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../../core/services';

@Component({
  selector: 'app-launcher-home',
  templateUrl: './launcher-home.component.html',
  styleUrls: ['./launcher-home.component.scss']
})
export class LauncherHomeComponent implements OnInit {

  constructor(private electronService: ElectronService) { }

  ngOnInit() {
    const path = 'C:/_00/dev/_/';
    this.electronService.fs.readdir(path, (err, files) => {
      if (err) {
        throw err;
      }
      files.forEach((file) => {
        const f = path + '/' + file;
        this.electronService.fs.stat(f, (errX, statX) => {
          if (errX) {
            throw err;
          }
          if (statX.isFile) {
            console.log('[VH]: LauncherHomeComponent -> ngOnInit -> statX', f, statX);
          }
        });
      });
    });
  }
  call() {
    // shell.openItem('C:\\_00\\Dev\\_\\Notepad')
    this.electronService.shell.openItem('C:\\_00\\Dev\\_\\Drive');
  }

}
