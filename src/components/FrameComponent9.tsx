import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent9.module.css";

export type FrameComponent9Type = {
  className?: string;
};

const FrameComponent9: FunctionComponent<FrameComponent9Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameContainer}>
          <div className={styles.findingTheRightFitHasNeveParent}>
            <h1 className={styles.findingTheRight}>
              Finding the right fit has never been easier.
            </h1>
            <img
              className={styles.zwiltTba1012Icon}
              loading="lazy"
              alt=""
              src="/zwilttba101-2@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameDiv}>
          <div className={styles.withOurRigorousPreVettingParent}>
            <h3 className={styles.withOurRigorous}>
              With our rigorous pre-vetting process, you'll never have to worry
              about finding the ideal candidate ever again.
            </h3>
            <div className={styles.component1040Wrapper}>
              <div className={styles.component1040}>
                <div className={styles.lookingForDesignWrapper}>
                  <div className={styles.lookingForDesignContainer}>
                    <span>
                      <span className={styles.lookingFor}>Looking for</span>
                      <span className={styles.span}>{` `}</span>
                    </span>
                    <span className={styles.design}>
                      <span>design |</span>
                    </span>
                  </div>
                </div>
                <img
                  className={styles.component1040Child}
                  loading="lazy"
                  alt=""
                  src="/frame-626624.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.pythonDeveloperParent}>
            <div className={styles.pythonDeveloper}>Python Developer</div>
            <div className={styles.shopifyDeveloper}>Shopify Developer</div>
            <div className={styles.mernStackDeveloper}>
              MERN Stack Developer
            </div>
            <div className={styles.fullStackDeveloper}>
              Full Stack Developer
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.frameParent3}>
              <Button
                className={styles.frameChild}
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#202229",
                  fontSize: "16",
                  background: "#c7f4c2",
                  borderRadius: "15px",
                  "&:hover": { background: "#c7f4c2" },
                  width: 192,
                  height: 44,
                }}
              >{`IT & Development`}</Button>
              <div className={styles.rectangleParent}>
                <div className={styles.frameItem} />
                <div className={styles.designAndCreative}>
                  Design and Creative
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.dataScientistParent}>
                <div className={styles.dataScientist}>Data Scientist</div>
                <div className={styles.frontEndDeveloper}>
                  Front End Developer
                </div>
                <div className={styles.shopifyDeveloper1}>
                  Shopify Developer
                </div>
                <div className={styles.pythonDeveloper1}>Python Developer</div>
              </div>
            </div>
          </div>
          <div className={styles.shopifyDeveloperParent}>
            <div className={styles.shopifyDeveloper2}>Shopify Developer</div>
            <div className={styles.pythonDeveloper2}>Python Developer</div>
            <div className={styles.fullStackDeveloper1}>
              Full Stack Developer
            </div>
            <div className={styles.exploreMore}>Explore More</div>
          </div>
        </div>
      </div>
      <img className={styles.unionIcon} alt="" src="/union.svg" />
    </section>
  );
};

export default FrameComponent9;
