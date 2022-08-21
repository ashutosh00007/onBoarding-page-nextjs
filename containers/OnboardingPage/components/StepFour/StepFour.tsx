import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TGlobalState } from "../../../../store";
import { TState } from "../../../../store/reducers/onboardingReducer";
import { BsCheck2 } from "react-icons/bs";
import { Actions as OnboardingActions } from "../../../../store/actions/onboardingAction";
import styles from "../../Onboarding.module.scss";

function StepFour() {
  const onboarding: TState = useSelector(
    (store: TGlobalState) => store.onboarding
  );
  const dispatch = useDispatch();
  const resetRedux = () => {
    dispatch({ type: OnboardingActions.RESET_ONBOARDING_DATA });
  };
  return (
    <div>
      <div className={styles.completed}>
        <BsCheck2 />
      </div>
      <div className={styles.heading}>
        <h2>Congratulations, {onboarding.fullName}</h2>
        <p>You have completed the onboarding, you can start using the Eden!</p>
      </div>
      <div className={styles.form}>
        <button className={styles.button} onClick={resetRedux}>
          Launch Eden
        </button>
      </div>
    </div>
  );
}

export default StepFour;
