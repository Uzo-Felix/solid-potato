import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent6.module.css";

export type FrameComponent6Type = {
  className?: string;
  pexelsChristinaMorillo118?: string;
  shopifyDeveloper?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
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
    <div className={[styles.someDataCardParent, className].join(" ")}>
      <div className={styles.someDataCard}>
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

export default FrameComponent6;
