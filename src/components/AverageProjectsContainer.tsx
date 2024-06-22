import { FunctionComponent } from "react";
import styles from "./AverageProjectsContainer.module.css";

export type AverageProjectsContainerType = {
  className?: string;
};

const AverageProjectsContainer: FunctionComponent<
  AverageProjectsContainerType
> = ({ className = "" }) => {
  return (
    <div className={[styles.averageProjectsContainer, className].join(" ")}>
      <div className={styles.howLongAreTheAverageProjeWrapper}>
        <h3 className={styles.howLongAre}>
          How long are the average projects?
        </h3>
      </div>
      <img
        className={styles.separatorIcon}
        loading="lazy"
        alt=""
        src="/vector-410.svg"
      />
      <div className={styles.fAQList}>
        <h3 className={styles.howLongAre1}>
          How long are the average projects?
        </h3>
      </div>
      <div className={styles.fAQList1}>
        <img
          className={styles.fAQListChild}
          loading="lazy"
          alt=""
          src="/vector-410.svg"
        />
      </div>
      <div className={styles.howMuchCanIEarnWrapper}>
        <h3 className={styles.howMuchCan}>How much can I earn?</h3>
      </div>
    </div>
  );
};

export default AverageProjectsContainer;
