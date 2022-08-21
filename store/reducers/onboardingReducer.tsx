import { setSessionStorage } from "../../utils/sessionStorage";
import { Actions } from "../actions/onboardingAction";

export type TState = {
  totalSteps: number;
  currentStep: number;
  fullName: string;
  displayName: string;
  workspaceName: string;
  workspaceUrl: string;
  usage: "personal" | "team";
};
type TActions = {
  type: string;
  payload?: any;
};
const initialState: TState = {
  totalSteps: 4,
  currentStep: 1,
  fullName: "User",
  displayName: "",
  workspaceName: "",
  workspaceUrl: "",
  usage: "personal",
};

export const onboardingReducer = (state = initialState, action: TActions) => {
  const { type, payload } = action;
  switch (type) {
    case Actions.POPULATE_ONBOARDING_DATA:
      return payload;
    case Actions.UPDATE_ONBOARDING_DATA:
      setSessionStorage(payload);
      return payload;
    case Actions.RESET_ONBOARDING_DATA:
      setSessionStorage(initialState);
      return initialState;
    default:
      return state;
  }
};
