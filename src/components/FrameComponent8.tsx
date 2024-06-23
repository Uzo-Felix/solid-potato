import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent8.module.css";

export type FrameComponent8Type = {
  className?: string;
  pexelsChristinaMorillo118?: string;
  shopifyDeveloper?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const FrameComponent8: FunctionComponent<FrameComponent8Type> = ({
  className = "",
  pexelsChristinaMorillo118,
  shopifyDeveloper,
  propWidth,
}) => {
  const pexelsChristinaMorillo11814IconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.pexelsChristinaMorillo11814Wrapper}>
        <img
          className={styles.pexelsChristinaMorillo11814Icon}
          alt=""
          src={pexelsChristinaMorillo118}
          style={pexelsChristinaMorillo11814IconStyle}
        />
      </div>
      <div className={styles.shopifyDeveloperWrapper}>
        <div className={styles.shopifyDeveloper}>{shopifyDeveloper}</div>
      </div>
    </div>
  );
};

export default FrameComponent8;
