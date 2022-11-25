 
import { BesicInfo } from "../model/besicInfo.model";
import { EmployeeAction, EmployeeActionType } from "./auth.action";
 
const initialState: Array<BesicInfo> = [];

export function EmployeeReducer(
  state: Array<BesicInfo> = initialState,
  action: EmployeeAction
) {
  switch (action.type) {
    case EmployeeActionType.ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
}