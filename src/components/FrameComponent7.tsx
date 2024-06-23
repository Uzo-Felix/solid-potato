import { FunctionComponent } from "react";
import styles from "./FrameComponent7.module.css";

export type FrameComponent7Type = {
  className?: string;
  image250?: string;
  unreal?: string;
  engine?: string;
};

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
  className = "",
  image250,
  unreal,
  engine,
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.image250Wrapper}>
        <img
          className={styles.image250Icon}
          loading="lazy"
          alt=""
          src={image250}
        />
      </div>
      <div className={styles.unrealEngineWrapper}>
        <div className={styles.unrealEngine}>
          <p className={styles.unreal}>{unreal}</p>
          <p className={styles.engine}>{engine}</p>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
