import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.vectorParent, className].join(" ")}>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src="/vector-410.svg"
      />
      <h3 className={styles.howLongAre}>How long are the average projects?</h3>
      <img
        className={styles.frameItem}
        loading="lazy"
        alt=""
        src="/vector-410.svg"
      />
      <div className={styles.frameParent}>
        <div className={styles.howLongAreTheAverageProjeWrapper}>
          <h3 className={styles.howLongAre1}>
            How long are the average projects?
          </h3>
        </div>
        <img
          className={styles.frameInner}
          loading="lazy"
          alt=""
          src="/vector-410.svg"
        />
        <div className={styles.howMuchCanIEarnWrapper}>
          <h3 className={styles.howMuchCan}>How much can I earn?</h3>
        </div>
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector-410.svg" />
    </section>
  );
};

export default FrameComponent;
