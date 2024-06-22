import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.projectDurationListParent, className].join(" ")}>
      <div className={styles.projectDurationList}>
        <h3 className={styles.howLongAre}>
          How long are the average projects?
        </h3>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img className={styles.shortFAQ} alt="" src="/vector-410.svg" />
        <div className={styles.projectDurationList1}>
          <div className={styles.howDoesThePaymentWorksParent}>
            <h3 className={styles.howDoesThe}>How does the payment works?</h3>
            <div className={styles.projectDurationList2}>
              <img className={styles.vectorIcon} alt="" src="/vector-16.svg" />
            </div>
          </div>
        </div>
        <div className={styles.projectDurationList3}>
          <img
            className={styles.projectDurationListChild}
            alt=""
            src="/vector-410.svg"
          />
        </div>
      </div>
      <div className={styles.projectDurationList4}>
        <h3 className={styles.howMuchCan}>How much can I earn?</h3>
      </div>
    </div>
  );
};

export default FrameComponent2;
