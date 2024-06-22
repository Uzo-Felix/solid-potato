import { FunctionComponent } from "react";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  className?: string;
  image250?: string;
  unreal?: string;
  engine?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
  image250,
  unreal,
  engine,
}) => {
  return (
    <div className={[styles.navParent, className].join(" ")}>
      <div className={styles.nav}>
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

export default FrameComponent5;
