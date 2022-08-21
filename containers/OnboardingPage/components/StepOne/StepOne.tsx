import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TGlobalState } from "../../../../store";
import { Actions as OnboardingActions } from "../../../../store/actions/onboardingAction";
import { TState } from "../../../../store/reducers/onboardingReducer";
import styles from "../../Onboarding.module.scss";

function StepOne() {
  const onboarding: TState = useSelector(
    (store: TGlobalState) => store.onboarding
  );
  const dispatch = useDispatch();
  const [state, setState] = useState({
    fullName: "",
    displayName: "",
  });
  const formSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onboarding.currentStep;
    const newState = {
      ...onboarding,
      ...state,
      currentStep: onboarding.currentStep + 1,
    };
    dispatch({
      type: OnboardingActions.UPDATE_ONBOARDING_DATA,
      payload: newState,
    });
  };
  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <div className={styles.heading}>
        <h2>Welcome! First things first...</h2>
        <p>You can always change them later.</p>
      </div>
      <form onSubmit={formSubmit} className={styles.form}>
        <div className={styles.input}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={state.fullName}
            onChange={handleInput}
            placeholder="Full Name"
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="displayName">Display Name</label>
          <input
            type="text"
            id="displayName"
            name="displayName"
            value={state.displayName}
            onChange={handleInput}
            placeholder="Display Name"
          />
        </div>
        <button className={styles.button} type="submit">
          Create Workspace
        </button>
      </form>
    </div>
  );
}

export default StepOne;
