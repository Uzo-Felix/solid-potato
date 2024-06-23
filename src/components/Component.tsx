import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./Component.module.css";

export type ComponentType = {
  className?: string;
};

const Component: FunctionComponent<ComponentType> = ({ className = "" }) => {
  return (
    <section className={[styles.component1083, className].join(" ")}>
      <div className={styles.frameParent}>
        <footer className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.frameParent1}>
                  <img
                    className={styles.frameChild}
                    loading="lazy"
                    alt=""
                    src="/group-625177.svg"
                  />
                  <div className={styles.weTakeComplex}>
                    We take complex hiring processes - and simplify them.
                    Connecting you to the world’s highly qualified talent pool.
                  </div>
                </div>
                <div className={styles.linksAndRedirectsParent}>
                  <div className={styles.linksAndRedirects}>
                    LINKS AND REDIRECTS
                  </div>
                  <div className={styles.component1047Parent}>
                    <Button
                      className={styles.component1047}
                      disableElevation
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#edefff",
                        fontSize: "14.9",
                        background: "#292b34",
                        borderRadius: "0px 0px 0px 0px",
                        "&:hover": { background: "#292b34" },
                        height: 50,
                      }}
                    >
                      Hire now
                    </Button>
                    <Button
                      className={styles.component1048}
                      disableElevation
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#edefff",
                        fontSize: "14.9",
                        background: "#292b34",
                        borderRadius: "0px 0px 0px 0px",
                        "&:hover": { background: "#292b34" },
                        height: 50,
                      }}
                    >
                      Apply now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.connectingTheRightPeopleToParent}>
              <h1 className={styles.connectingTheRight}>
                Connecting the right people to the right businesses.
              </h1>
              <div className={styles.groupDiv}>
                <div className={styles.platformParent}>
                  <a className={styles.platform}>PLATFORM</a>
                  <div className={styles.frameParent2}>
                    <div className={styles.frameParent3}>
                      <div className={styles.findWorkParent}>
                        <div className={styles.findWork}>Find Work</div>
                        <img
                          className={styles.frameItem}
                          alt=""
                          src="/icon.svg"
                        />
                      </div>
                      <div className={styles.findTalent}>Find Talent</div>
                    </div>
                    <div className={styles.categories}>Categories</div>
                    <div className={styles.aboutUs}>About Us</div>
                  </div>
                </div>
                <div className={styles.categoriesParent}>
                  <div className={styles.categories1}>CATEGORIES</div>
                  <div className={styles.dataScienceParent}>
                    <div className={styles.dataScience}>Data Science</div>
                    <div
                      className={styles.itNetworking}
                    >{`IT & Networking`}</div>
                    <div className={styles.webMobile}>{`Web & Mobile`}</div>
                  </div>
                </div>
                <div className={styles.helpParent}>
                  <div className={styles.help}>HELP</div>
                  <div className={styles.faqsParent}>
                    <div className={styles.faqs}>FAQ’s</div>
                    <div className={styles.contactUs}>Contact Us</div>
                  </div>
                </div>
                <div className={styles.getInTouchParent}>
                  <div className={styles.getInTouch}>GET IN TOUCH @</div>
                  <div className={styles.instagramParent}>
                    <div className={styles.instagram}>Instagram</div>
                    <div className={styles.linkedin}>LinkedIn</div>
                    <div className={styles.twitter}>Twitter</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className={styles.vectorParent}>
          <img className={styles.frameInner} alt="" src="/vector-346.svg" />
          <div className={styles.frameWrapper1}>
            <div className={styles.allRightsReservedByZwiltParent}>
              <div className={styles.allRightsReserved}>
                All rights reserved by Zwilt
              </div>
              <div className={styles.privacyPolicyParent}>
                <div className={styles.privacyPolicy}>Privacy Policy</div>
                <div className={styles.termsAndConditions}>
                  Terms and Conditions
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-3215-1.svg"
        />
        <div className={styles.needAJobDoneAndDoneWellWrapper}>
          <h1 className={styles.needAJob}>
            Need a job done, and done well? Get started
          </h1>
        </div>
        <div className={styles.frameParent4}>
          <div className={styles.frameWrapper2}>
            <img
              className={styles.frameIcon}
              loading="lazy"
              alt=""
              src="/frame-626624-9@2x.png"
            />
          </div>
          <div className={styles.frameParent5}>
            <div className={styles.frameParent6}>
              <div className={styles.enterYourEmailWrapper}>
                <div className={styles.enterYourEmailContainer}>
                  <span className={styles.enterYourEmailContainer1}>
                    <span>
                      <span className={styles.enterYour}>Enter your</span>
                      <span className={styles.span}>{` `}</span>
                    </span>
                    <span className={styles.email}>
                      <span>email |</span>
                    </span>
                  </span>
                </div>
              </div>
              <img className={styles.vectorIcon} alt="" />
            </div>
            <div className={styles.frameParent7}>
              <div className={styles.enterYourMessageWrapper}>
                <div className={styles.enterYourMessageContainer}>
                  <span className={styles.enterYourMessageContainer1}>
                    <span className={styles.enterYour1}>Enter your</span>
                    <span className={styles.message}> message |</span>
                  </span>
                </div>
              </div>
              <img className={styles.frameChild1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component;
