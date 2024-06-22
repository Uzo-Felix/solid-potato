import { FunctionComponent } from "react";
import styles from "./GroupComponent1.module.css";

export type GroupComponent1Type = {
  className?: string;
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.vectorParent, className].join(" ")}>
      <img className={styles.frameChild} alt="" src="/rectangle-3214.svg" />
      <img className={styles.maskGroupIcon} alt="" src="/mask-group.svg" />
      <div className={styles.component1060}>
        <img
          className={styles.secondEmptyButton}
          alt=""
          src="/frame-626624-3.svg"
        />
        <div className={styles.browseMoreWrapper}>
          <div className={styles.browseMore}>Browse More</div>
        </div>
      </div>
      <div className={styles.assessTheCandidate}>
        Assess the candidate through work history, transparent tests and video
        interviews.
      </div>
      <h1 className={styles.evaluateToYour}>
        Evaluate to your heart’s content.
      </h1>
    </div>
  );
};

export default GroupComponent1;
