import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameContainer}>
          <div className={styles.frameGroup}>
            <div className={styles.frameDiv}>
              <div className={styles.generalWrapper}>
                <h3 className={styles.general}>General</h3>
              </div>
              <img className={styles.frameChild} alt="" src="/vector-415.svg" />
            </div>
            <div className={styles.iWantToWorkPartTimeIsTWrapper}>
              <h3 className={styles.iWantTo}>
                I want to work part-time, is that possible
              </h3>
            </div>
          </div>
        </div>
        <img className={styles.frameItem} alt="" src="/vector-410.svg" />
      </div>
    </div>
  );
};

export default FrameComponent3;
