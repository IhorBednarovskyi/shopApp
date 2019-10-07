import { Injectable } from '@angular/core';
import { CoreModule } from './../core.module';

interface ConfigParams {
    [key: string]: string|number|null;
}

@Injectable({
  providedIn: CoreModule
})
export class ConfigOptionsService {
    private config: ConfigParams = {
        id: null,
        login: null,
        email: null,
        userType: null
    };

    setConfig(data: ConfigParams): void {
        for (const key in data) {
            if (this.config.hasOwnProperty(key)) {
                this.config[key] = data[key];
            }
        }
        // может так this.config = {...this.config, ...data} вместо for
    }

    getConfig(): ConfigParams {
        return this.config;
    }
}
