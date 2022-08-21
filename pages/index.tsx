import type { GetServerSideProps, NextPage } from "next";
import Onboarding from "../containers/OnboardingPage/Onboarding";
import { wrapper } from "../store";

const OnboardingPage: NextPage = () => {
  return <Onboarding />;
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    return { props: {} };
  });

export default OnboardingPage;
