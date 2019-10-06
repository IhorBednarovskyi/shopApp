import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const Generator5String = new InjectionToken<string>('Generator5String');

export function GeneratorNStringFactory(n: number) {
    return (generatorService: GeneratorService): string => {
        return generatorService.generateNString(n);
    };
}
