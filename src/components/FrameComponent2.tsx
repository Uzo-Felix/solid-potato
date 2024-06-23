import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/vector-410.svg"
        />
        <div className={styles.frameContainer}>
          <div className={styles.howDoesThePaymentWorksParent}>
            <h3 className={styles.howDoesThe}>How does the payment works?</h3>
            <div className={styles.vectorWrapper}>
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector-16.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.vectorContainer}>
          <img
            className={styles.frameInner}
            loading="lazy"
            alt=""
            src="/vector-410.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
