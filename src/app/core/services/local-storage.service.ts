import { Injectable } from '@angular/core';
import { CoreModule } from './../core.module';

@Injectable({
  providedIn: CoreModule
})
export class LocalStorageService {

    save(key: string, data: any): void {
        localStorage.setItem(key, data);
    }

    get(key: string): any {
        return localStorage.getItem(key);
    }

    remove(key: string): void {
        localStorage.removeItem(key);
    }
}
