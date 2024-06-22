import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FindingFit.module.css";

export type FindingFitType = {
  className?: string;
};

const FindingFit: FunctionComponent<FindingFitType> = ({ className = "" }) => {
  return (
    <section className={[styles.findingFit, className].join(" ")}>
      <img className={styles.sideBarIcon} alt="" src="/side-bar@2x.png" />
      <img className={styles.unionIcon} alt="" src="/union.svg" />
      <div className={styles.header}>
        <div className={styles.logoWrapper}>
          <img
            className={styles.logoIcon}
            loading="lazy"
            alt=""
            src="/logo.svg"
          />
        </div>
        <div className={styles.headerInner}>
          <div className={styles.findWorkParent}>
            <div className={styles.findWork}>Find Work</div>
            <div className={styles.findTalent}>Find Talent</div>
            <div className={styles.articles}>Articles</div>
            <div className={styles.aboutUs}>About Us</div>
            <div className={styles.contactUs}>Contact Us</div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.logInWrapper}>
            <div className={styles.logIn}>Log In</div>
          </div>
          <Button
            className={styles.signupButton}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#202229",
              fontSize: "14",
              background: "#fff",
              borderRadius: "16px",
              "&:hover": { background: "#fff" },
              height: 43,
            }}
          >
            Join Now
          </Button>
        </div>
      </div>
      <div className={styles.fAQPreviewWrapper}>
        <div className={styles.fAQPreview}>
          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              <div className={styles.contentInner}>
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
              <div className={styles.contentChild}>
                <div className={styles.withOurRigorousPreVettingParent}>
                  <h3 className={styles.withOurRigorous}>
                    With our rigorous pre-vetting process, you'll never have to
                    worry about finding the ideal candidate ever again.
                  </h3>
                  <div className={styles.component1040Wrapper}>
                    <div className={styles.component1040}>
                      <div className={styles.lookingForDesignWrapper}>
                        <div className={styles.lookingForDesignContainer}>
                          <span>
                            <span className={styles.lookingFor}>
                              Looking for
                            </span>
                            <span className={styles.span}>{` `}</span>
                          </span>
                          <span className={styles.design}>
                            <span>design |</span>
                          </span>
                        </div>
                      </div>
                      <img
                        className={styles.emptyParentIcon}
                        loading="lazy"
                        alt=""
                        src="/frame-626624.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.categories}>
            <div className={styles.categoriesContainer}>
              <div className={styles.pythonDeveloper}>Python Developer</div>
              <div className={styles.shopifyDeveloper}>Shopify Developer</div>
              <div className={styles.mernStackDeveloper}>
                MERN Stack Developer
              </div>
              <div className={styles.fullStackDeveloper}>
                Full Stack Developer
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
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
              <div className={styles.frameWrapper}>
                <div className={styles.dataScientistParent}>
                  <div className={styles.dataScientist}>Data Scientist</div>
                  <div className={styles.frontEndDeveloper}>
                    Front End Developer
                  </div>
                  <div className={styles.shopifyDeveloper1}>
                    Shopify Developer
                  </div>
                  <div className={styles.pythonDeveloper1}>
                    Python Developer
                  </div>
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
      </div>
    </section>
  );
};

export default FindingFit;
