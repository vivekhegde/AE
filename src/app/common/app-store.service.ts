import { Injectable } from '@angular/core';
import { ElectronService } from '../core/services';
import * as path from 'path';

@Injectable({
  providedIn: 'root'
})
export class AppStoreService {
  private settingsPath: string;
  data: any = {};

  constructor(private eletron: ElectronService) {
    const userDataPath = (this.eletron.app || this.eletron.remote.app).getPath('userData');
    console.log('[VH]: AppStoreService -> constructor -> userDataPath', userDataPath);
    this.settingsPath = path.join(userDataPath, 'mySettings.json');
    this.data = this.parseDataFile(this.settingsPath);
  }

  get(key: string): string {
    return this.data[key];
  }

  set(key: string, val: string): void {
    this.data[key] = val;
    // Wait, I thought using the node.js' synchronous APIs was bad form?
    // We're not writing a server so there's not nearly the same IO demand on the process
    // Also if we used an async API and our app was quit before the asynchronous write had a chance to complete,
    // we might lose that data. Note that in a real app, we would try/catch this.
    this.eletron.fs.writeFileSync(this.settingsPath, JSON.stringify(this.data));
  }

  private parseDataFile(filePath: string): object {
    try {
      const str = this.eletron.fs.readFileSync(filePath, 'utf8');
      if (str && str.length > 0) {
        return JSON.parse(str);
      }
    } catch (error) {
      console.log('[VH]: AppStoreService -> error', error);
    }
  }

}
