import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TGlobalState } from "../../../../store";
import { Actions as OnboardingActions } from "../../../../store/actions/onboardingAction";
import { TState } from "../../../../store/reducers/onboardingReducer";
import styles from "../../Onboarding.module.scss";

function StepTwo() {
  const onboarding: TState = useSelector(
    (store: TGlobalState) => store.onboarding
  );
  const dispatch = useDispatch();
  const [state, setState] = useState({
    workspaceName: "",
    workspaceUrl: "",
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
      <form className={styles.form} onSubmit={formSubmit}>
        <div className={styles.input}>
          <label htmlFor="workspaceName">Workspace Name</label>
          <input
            type="text"
            id="workspaceName"
            name="workspaceName"
            value={state.workspaceName}
            onChange={handleInput}
            placeholder="Workspace Name"
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="workspaceUrl">
            Workspace Name<p>(optional)</p>
          </label>
          <div className={styles.inputWithExample}>
            <div>www.wden.com</div>
            <input
              type="text"
              id="workspaceUrl"
              name="workspaceUrl"
              value={state.workspaceUrl}
              onChange={handleInput}
              placeholder="Workspace Url"
            />
          </div>
        </div>
        <button className={styles.button} type="submit">
          Create Workspace
        </button>
      </form>
    </div>
  );
}

export default StepTwo;
