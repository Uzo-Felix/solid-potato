import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.contentWrapperParent, className].join(" ")}>
      <footer className={styles.contentWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
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
                <div className={styles.linksContainer}>
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
                <div className={styles.platform}>PLATFORM</div>
                <div className={styles.platformLinks}>
                  <div className={styles.helpLinks}>
                    <div className={styles.findWorkParent}>
                      <div className={styles.findWork}>Find Work</div>
                      <img className={styles.icon} alt="" src="/icon.svg" />
                    </div>
                    <div className={styles.findTalent}>Find Talent</div>
                  </div>
                  <div className={styles.categories}>Categories</div>
                  <a className={styles.aboutUs}>About Us</a>
                </div>
              </div>
              <div className={styles.categoriesParent}>
                <div className={styles.categories1}>CATEGORIES</div>
                <div className={styles.socialLinksContainer}>
                  <div className={styles.dataScience}>Data Science</div>
                  <div className={styles.itNetworking}>{`IT & Networking`}</div>
                  <div className={styles.webMobile}>{`Web & Mobile`}</div>
                </div>
              </div>
              <div className={styles.helpParent}>
                <div className={styles.help}>HELP</div>
                <div className={styles.helpLinks1}>
                  <div className={styles.faqs}>FAQ’s</div>
                  <div className={styles.contactUs}>Contact Us</div>
                </div>
              </div>
              <div className={styles.getInTouchParent}>
                <div className={styles.getInTouch}>GET IN TOUCH @</div>
                <div className={styles.instagramParent}>
                  <a className={styles.instagram}>Instagram</a>
                  <a className={styles.linkedin}>LinkedIn</a>
                  <a className={styles.twitter}>Twitter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.iconParent}>
        <img
          className={styles.icon1}
          loading="lazy"
          alt=""
          src="/vector-346.svg"
        />
        <div className={styles.copyrightContentWrapper}>
          <div className={styles.copyrightContent}>
            <div className={styles.allRightsReserved}>
              All rights reserved by Zwilt
            </div>
            <div className={styles.policyLinks}>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div className={styles.termsAndConditions}>
                Terms and Conditions
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.frameItem} alt="" src="/rectangle-3215-1.svg" />
      <div className={styles.needAJobDoneAndDoneWellWrapper}>
        <h1 className={styles.needAJob}>
          Need a job done, and done well? Get started
        </h1>
      </div>
      <div className={styles.emailInputWrapperParent}>
        <div className={styles.emailInputWrapper}>
          <img
            className={styles.emptyParentIcon}
            loading="lazy"
            alt=""
            src="/frame-626624-9@2x.png"
          />
        </div>
        <div className={styles.formInputsParent}>
          <div className={styles.formInputs}>
            <div className={styles.inputLabels}>
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
            <img className={styles.icons} loading="lazy" alt="" />
          </div>
          <div className={styles.formInputs1}>
            <div className={styles.enterYourMessageWrapper}>
              <div className={styles.enterYourMessageContainer}>
                <span className={styles.enterYourMessageContainer1}>
                  <span className={styles.enterYour1}>Enter your</span>
                  <span className={styles.message}> message |</span>
                </span>
              </div>
            </div>
            <img className={styles.formInputsChild} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
