import { Injectable } from '@angular/core';
import { CoreModule } from './../core.module';

@Injectable({
  providedIn: CoreModule
})
export class LocalStorageService {

    save(key: string, data: any): void {
        localStorage.setItem(key, data); // желательно проверить не объект ли это и JSON.stringify использовать;
    }

    get(key: string): any {
        return localStorage.getItem(key);
    }

    remove(key: string): void {
        localStorage.removeItem(key);
    }
}
