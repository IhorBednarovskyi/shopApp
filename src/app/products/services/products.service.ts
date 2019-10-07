import { Injectable } from '@angular/core';

import { Product } from './../models/product.model';
import { ProductType } from './../models/product-type.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts(): Array<Product> {
    return [
        new Product(`Car Charger for Samsung Galaxy S5`,
        `Of Imitation Leather. leaves full access to your phone's ...`,
        12.56, ProductType.InteriorAccessories, true),
        new Product(`Thule 933300 Easyfold XT 2-Bike Towbar Carrier`,
        `Pre-assembled, no tools required. Lock your bikes to the bike ...`,
        517.00, ProductType.ExteriorAccessories),
        new Product(`Snell SA2015 Approved Full Face Racing Helmet`,
        `These Snell SA2015 helmets keep comfort in mind for drivers with ...`,
        168.88, ProductType.Motorcycle, true),
        new Product(`22x11.00-10 with 10x7 Fusion Glossy Black Wheels for Golf Cart`,
        `Set of 4 Tire and Wheel Assemblies ** Wheel Color: Glossy Black ...`,
        379.24, ProductType.Wheels, true),
        new Product(`Fit Hyundai Genesis Coupe 2Dr Black Full LED Sequential
         Tail Lights Brake Lamps`,
        `Exactly the same as shown in the picture! High quality black ...`,
        419.22, ProductType.LightingAccessories, false),
        new Product(`Radiator Cooling Fan Motor Assembly`,
        `Radiator Cooling Fan Motor Assembly with Control Module Replacement ...`,
        159.58, ProductType.ReplacementParts, true)
    ];
  }
}
