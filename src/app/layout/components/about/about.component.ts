import { Component, Optional, InjectionToken,
    Inject, OnInit } from '@angular/core';

import { GeneratorService } from './../../../core/services/generator.service';
import { GeneratorNStringFactory, Generator5String } from './../../../core/services/generator.factory';
import { ConfigOptionsService } from './../../../core/services/config-options.service';
import { AppConstants } from './../../../core/services/constant.service';
import { LocalStorageService } from './../../../core/services/local-storage.service';

const APP_CONSTANTS = new AppConstants();

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [
      GeneratorService,
      { provide: Generator5String, useFactory: GeneratorNStringFactory(5), deps: [GeneratorService] },
      { provide: AppConstants, useValue: APP_CONSTANTS }
  ]
})
export class AboutComponent implements OnInit {

  constructor(
    @Optional() private generatorService: GeneratorService,
    @Optional() @Inject(Generator5String) private generator5String: string,
    @Optional() private configOptionsService: ConfigOptionsService,
    @Optional() private appConstants: AppConstants,
    @Optional() private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
      console.log(this.generator5String);
  }

}
