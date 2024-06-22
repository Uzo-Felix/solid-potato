import { FunctionComponent } from "react";
import StepContainer from "./StepContainer";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div
      className={[styles.howWeEnsureYoureInGoodHParent, className].join(" ")}
    >
      <h1 className={styles.howWeEnsure}>
        How we ensure you’re in good hands.
      </h1>
      <h3 className={styles.withOurComprehensive}>
        With our comprehensive screening process, we hand-pick highly skilled
        candidates so you can onboard them in a matter of days.
      </h3>
      <div className={styles.processSteps}>
        <StepContainer step1="Step 1:" resumeScreening=" Resume Screening" />
        <div className={styles.interviewStep}>
          <div className={styles.emptyParentParent}>
            <img
              className={styles.emptyParentIcon}
              loading="lazy"
              alt=""
              src="/frame-626623-2.svg"
            />
            <div className={styles.assessmentSubheading}>
              <div className={styles.step2VideoContainer}>
                <span className={styles.step2}>Step 2:</span>
                <span> Video Interview</span>
              </div>
            </div>
          </div>
          <div className={styles.candidatesAreAssessed}>
            Candidates are assessed through skill based questions in a virtual
            setting. Allowing you to gauge personality and cultural fit.
          </div>
        </div>
        <StepContainer
          step1="Step 3:"
          resumeScreening=" Technical Evaluation"
          propWidth="202px"
        />
        <StepContainer
          step1="Step 4:"
          resumeScreening=" Application Review"
          propWidth="191px"
        />
        <StepContainer
          step1="Step 5:"
          resumeScreening=" Lets get to work"
          propWidth="168px"
        />
      </div>
    </div>
  );
};

export default FrameComponent3;
