import React, { FunctionComponent, useLayoutEffect, useRef } from "react";
import styles from "../Onboarding.module.scss";

type TProps = {
  totalSteps: number;
  currentStep: number;
};
const Steps: FunctionComponent<TProps> = ({ totalSteps, currentStep }) => {
  const progressRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (progressRef.current) {
      if (currentStep >= totalSteps) {
        progressRef.current.style.width = `100%`;
        return;
      }
      const currentElementDOM = document
        .getElementById(`step-${currentStep}`)
        ?.getBoundingClientRect();

      const nextElementDOM = document
        .getElementById(`step-${currentStep + 1}`)
        ?.getBoundingClientRect();
      if (currentElementDOM && nextElementDOM) {
        const f = currentElementDOM.width || nextElementDOM.width;
        const width = nextElementDOM?.left - currentElementDOM?.left;
        if (currentStep === 1) {
          progressRef.current.style.width = `${
            (width * currentStep + f) / 2
          }px`;
        } else {
          progressRef.current.style.width = `${
            currentStep * width - (width - f) / 2
          }px`;
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep, progressRef]);

  return (
    <div className={styles.stepsContainer}>
      {[...new Array(totalSteps)].map((_: any, index: number) => (
        <div
          id={`step-${index + 1}`}
          key={index}
          className={`${styles.step} ${
            (index + 1 === currentStep || index + 1 < currentStep) &&
            styles.active
          }`}
        >
          {index + 1}
        </div>
      ))}
      <div className={styles.progress}>
        <span ref={progressRef} />
      </div>
    </div>
  );
};

export default Steps;
