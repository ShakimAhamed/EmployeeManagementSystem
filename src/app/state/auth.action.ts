
import { Action } from '@ngrx/store';
import { BesicInfo } from '../model/besicInfo.model';

export enum EmployeeActionType {
  ADD_ITEM = '[Employee] Add Employee',
}

export class AddItemAction implements Action {
  readonly type = EmployeeActionType.ADD_ITEM;

  constructor(public payload: BesicInfo) {}
}

export type EmployeeAction = AddItemAction;