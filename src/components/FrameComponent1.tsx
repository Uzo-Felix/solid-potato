import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.generalWrapper}>
            <h3 className={styles.general}>General</h3>
          </div>
          <img className={styles.frameItem} alt="" src="/vector-415.svg" />
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.joiningProcessWrapper}>
            <h3 className={styles.joiningProcess}>Joining Process</h3>
          </div>
          <img className={styles.frameInner} alt="" src="/vector-415.svg" />
        </div>
        <div className={styles.iWantToWorkPartTimeIsTWrapper}>
          <h3 className={styles.iWantTo}>
            I want to work part-time, is that possible
          </h3>
        </div>
      </div>
      <img
        className={styles.vectorIcon}
        loading="lazy"
        alt=""
        src="/vector-410.svg"
      />
    </div>
  );
};

export default FrameComponent1;
