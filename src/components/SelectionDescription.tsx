import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SelectionDescription.module.css";

export type SelectionDescriptionType = {
  className?: string;
  wePickTheBestForYouToSele?: string;
  thousandsOfVettedCandidat?: string;
  riskFreeResourceSwappingF?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlexWrap?: CSSProperties["flexWrap"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propBackgroundColor2?: CSSProperties["backgroundColor"];
};

const SelectionDescription: FunctionComponent<SelectionDescriptionType> = ({
  className = "",
  wePickTheBestForYouToSele,
  thousandsOfVettedCandidat,
  riskFreeResourceSwappingF,
  propWidth,
  propFlexWrap,
  propAlignSelf,
  propBackgroundColor,
  propBackgroundColor1,
  propBackgroundColor2,
}) => {
  const selectionDescriptionStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      flexWrap: propFlexWrap,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propFlexWrap, propAlignSelf]);

  const uIUXSkillsStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const uIUXSkills1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const uIUXSkills2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  return (
    <div
      className={[styles.selectionDescription, className].join(" ")}
      style={selectionDescriptionStyle}
    >
      <div className={styles.selectionContent}>
        <div className={styles.selectionIndicators}>
          <div className={styles.uIUXSkills} style={uIUXSkillsStyle} />
          <div className={styles.uIUXSkills1} style={uIUXSkills1Style} />
          <div className={styles.uIUXSkills2} style={uIUXSkills2Style} />
        </div>
      </div>
      <h3 className={styles.wePickTheContainer}>
        <p className={styles.wePickThe}>{wePickTheBestForYouToSele}</p>
        <p className={styles.thousandsOfVetted}>{thousandsOfVettedCandidat}</p>
        <p className={styles.riskFreeResourceSwapping}>
          {riskFreeResourceSwappingF}
        </p>
      </h3>
    </div>
  );
};

export default SelectionDescription;
