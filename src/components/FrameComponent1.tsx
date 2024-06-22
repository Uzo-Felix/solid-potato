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
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.journeyButton}>
          <h3 className={styles.general}>General</h3>
        </div>
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/vector-415.svg"
        />
      </div>
      <h3 className={styles.iWantTo}>
        I want to work part-time, is that possible
      </h3>
      <h3 className={styles.joiningProcess}>Joining Process</h3>
      <img className={styles.frameInner} alt="" src="/vector-415.svg" />
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
