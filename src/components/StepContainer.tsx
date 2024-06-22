import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StepContainer.module.css";

export type StepContainerType = {
  className?: string;
  step1?: string;
  resumeScreening?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const StepContainer: FunctionComponent<StepContainerType> = ({
  className = "",
  step1,
  resumeScreening,
  propWidth,
}) => {
  const stepLabelsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={[styles.stepContainer, className].join(" ")}>
      <img
        className={styles.placeholderContainerIcon}
        loading="lazy"
        alt=""
        src="/frame-626623-1.svg"
      />
      <div className={styles.stepLabels} style={stepLabelsStyle}>
        <div className={styles.step1ResumeContainer}>
          <span className={styles.step1}>{step1}</span>
          <span>{resumeScreening}</span>
        </div>
      </div>
    </div>
  );
};

export default StepContainer;
