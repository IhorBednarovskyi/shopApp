import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Product } from './../../products/models/product.model';

@Injectable()
export class CommunicationService {
    private channel1 = new Subject();

    public channel1$ = this.channel1.asObservable();

    publichData(product: Product) {
        this.channel1.next(product);
    }
}
