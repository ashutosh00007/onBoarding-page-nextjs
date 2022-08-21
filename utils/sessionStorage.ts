import { TState } from "../store/reducers/onboardingReducer";

export const setSessionStorage = (data: TState) => {
  sessionStorage.setItem("onboarding", JSON.stringify(data));
};
export const getSessionStorage = (): TState | null => {
  const data = sessionStorage.getItem("onboarding");
  if (data) {
    if (data === undefined) return null;
    return JSON.parse(data);
  } else {
    return null;
  }
};
