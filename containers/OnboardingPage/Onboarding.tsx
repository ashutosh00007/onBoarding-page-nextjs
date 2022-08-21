import React, { FunctionComponent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Steps from "./components/Steps";
import { TState } from "../../store/reducers/onboardingReducer";
import { TGlobalState } from "../../store";
import StepOne from "./components/StepOne/StepOne";
import StepTwo from "./components/StepTwo/StepTwo";
import StepThree from "./components/StepThree/StepThree";
import StepFour from "./components/StepFour/StepFour";
import styles from "./Onboarding.module.scss";
import { BiLoaderAlt } from "react-icons/bi";
import { Actions as OnboardingActions } from "../../store/actions/onboardingAction";
import { getSessionStorage } from "../../utils/sessionStorage";

const Onboarding: FunctionComponent = () => {
  const onboarding: TState = useSelector(
    (store: TGlobalState) => store.onboarding
  );
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const getScreen = () => {
    switch (onboarding.currentStep) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      case 4:
        return <StepFour />;
      default:
        return (
          <div className={styles.heading}>
            <h2>Not a step</h2>
          </div>
        );
    }
  };
  useEffect(() => {
    const data = getSessionStorage();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    if (!data) return;
    dispatch({
      type: OnboardingActions.POPULATE_ONBOARDING_DATA,
      payload: data,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main className={styles.main}>
      <Header />
      <Steps
        totalSteps={onboarding.totalSteps}
        currentStep={onboarding.currentStep}
      />
      {loading ? (
        <div className={styles.loading}>
          <BiLoaderAlt />
        </div>
      ) : (
        getScreen()
      )}
    </main>
  );
};

export default Onboarding;
