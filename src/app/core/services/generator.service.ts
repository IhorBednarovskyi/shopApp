import { Injectable } from '@angular/core';
import { CoreModule } from './../core.module';

@Injectable({
  providedIn: CoreModule
})
export class GeneratorService {
    private charactersList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    generateNString(n: number): string {
        let result = '';

        if (!n || n <= 0) {
            console.error('Invalid number.');
        } else {
            for (let i = 0; i < n; i++) {
                const randomNumber = this.getRandomNumber();
                result += this.charactersList.charAt(randomNumber);
            }
        }

        return result;
    }

    private getRandomNumber(): number {
        const length: number = this.charactersList.length;
        return Math.floor(Math.random() * length);
    }
}
