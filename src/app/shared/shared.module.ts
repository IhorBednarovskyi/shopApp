import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunicationService } from './services/communication.service';

@NgModule({
  imports: [CommonModule],
  providers: [CommunicationService]
})

export class SharedModule { }
