import React, { FunctionComponent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TGlobalState } from "../../../../store";
import { TState } from "../../../../store/reducers/onboardingReducer";
import { Actions as OnboardingActions } from "../../../../store/actions/onboardingAction";
import { FaUser, FaUsers } from "react-icons/fa";
import styles from "../../Onboarding.module.scss";

function StepThree() {
  const onboarding: TState = useSelector(
    (store: TGlobalState) => store.onboarding
  );
  const dispatch = useDispatch();
  const [usage, setUsage] = useState<string>(onboarding.usage);
  const handleClick = (newUsage: string): void => {
    if (newUsage === usage) return;
    setUsage(newUsage);
  };
  const handleButtonClick = () => {
    dispatch({
      type: OnboardingActions.UPDATE_ONBOARDING_DATA,
      payload: {
        ...onboarding,
        usage,
        currentStep: onboarding.currentStep + 1,
      },
    });
  };
  return (
    <div>
      <div className={styles.heading}>
        <h2>How are you planning to use Eden?</h2>
        <p>We&apos;ll streamline your setup experience accordingly</p>
      </div>
      <div>
        <div className={styles.form}>
          {/* <div
            className={`${onboarding.usage === "personal" && styles.active}`}
            onClick={() => handleClick("personal")}
          ></div>
          <div
            className={`${onboarding.usage === "team" && styles.active}`}
            onClick={() => handleClick("team")}
          ></div> */}
          <div className={styles.profileContainer}>
            <Profile
              active={usage === "personal"}
              icon={<FaUser />}
              title="For myself"
              description="Write better. Think more clearly. Stay organized."
              clickHandler={(arg: string) => handleClick(arg)}
              usage={"personal"}
            />
            <Profile
              active={usage === "team"}
              icon={<FaUsers />}
              title="With my team"
              description="Wikis, docs, tasks & projects, all in one place."
              clickHandler={(arg: string) => handleClick(arg)}
              usage="team"
            />
          </div>
          <button
            className={`${styles.button} ${styles.s3btn}`}
            onClick={() => handleButtonClick()}
          >
            Create Workspace
          </button>
        </div>
      </div>
    </div>
  );
}

type TProfileProps = {
  active: boolean;
  icon: React.ReactNode;
  title: string;
  description: string;
  clickHandler: (arg: string) => void;
  usage: string;
};
const Profile: FunctionComponent<TProfileProps> = ({
  active,
  icon,
  title,
  description,
  clickHandler,
  usage,
}) => (
  <div
    className={`${styles.profile} ${active ? styles.active : ""}`}
    onClick={() => clickHandler(usage)}
  >
    {icon}
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);
export default StepThree;
