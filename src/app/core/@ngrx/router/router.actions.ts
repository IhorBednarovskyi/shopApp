import { Action } from '@ngrx/store';

import { NavigationExtras } from '@angular/router';

export enum RouterActionTypes {
  GO = '[Router] GO',
  GO_BACK = '[Router] GO_BACK',
  GO_FORWARD = '[Router] GO_FORWARD'
}

export class Go implements Action {
    readonly type = RouterActionTypes.GO;
    constructor( public payload: {
            path: any[],
            queryParams?: object,
            extras?: NavigationExtras
    }) { }
}

export class GoBack implements Action {
    readonly type = RouterActionTypes.GO_BACK;
}

export class GoForward implements Action {
    readonly type = RouterActionTypes.GO_FORWARD;
}

export type RouterActions
 = Go
 | GoBack
 | GoForward;
