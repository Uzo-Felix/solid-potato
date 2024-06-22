import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ActivityBar.module.css";

export type ActivityBarType = {
  className?: string;
  logFilter?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay1?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const ActivityBar: FunctionComponent<ActivityBarType> = ({
  className = "",
  logFilter,
  propFlex,
  propWidth,
  propDisplay,
  propMinWidth,
  propDisplay1,
  propMinWidth1,
}) => {
  const activityBarStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
    };
  }, [propFlex, propWidth]);

  const filterIconStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const todaysActivityStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  return (
    <div
      className={[styles.activityBar, className].join(" ")}
      style={activityBarStyle}
    >
      <div className={styles.component2}>
        <img className={styles.vectorIcon} alt="" src="/vector-10.svg" />
        <div className={styles.component2Child} />
      </div>
      <img className={styles.logFilterIcon} alt="" src={logFilter} />
      <b className={styles.filterIcon} style={filterIconStyle}>
        42%
      </b>
      <div className={styles.todaysActivity} style={todaysActivityStyle}>
        Today’s Activity
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.logEntry} />
      </div>
    </div>
  );
};

export default ActivityBar;
