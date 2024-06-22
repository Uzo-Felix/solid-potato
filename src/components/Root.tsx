import { FunctionComponent } from "react";
import styles from "./Root.module.css";

export type RootType = {
  className?: string;
};

const Root: FunctionComponent<RootType> = ({ className = "" }) => {
  return (
    <div className={[styles.root, className].join(" ")}>
      <section className={styles.onboardingStep}>
        <div className={styles.onboardingStep1}>
          <div className={styles.onboardingStep2}>
            <h1 className={styles.onboardWithoutThe}>
              Onboard without the risk.
            </h1>
            <div className={styles.onboardingContent}>
              <div className={styles.selectionContent}>
                <div className={styles.valueProposition}>
                  <div className={styles.valuePropositionChild} />
                  <div className={styles.valuePropositionItem} />
                  <div className={styles.valuePropositionInner} />
                </div>
              </div>
              <h1 className={styles.wePickTheContainer}>
                <p className={styles.wePickThe}>
                  We pick the best for you to select.
                </p>
                <p className={styles.thousandsOfVetted}>
                  Thousands of vetted candidates in dozens of categories.
                </p>
                <p className={styles.riskFreeResourceSwapping}>
                  Risk-free resource swapping for the best fit.
                </p>
              </h1>
            </div>
          </div>
          <div className={styles.component1064}>
            <img
              className={styles.component1064Child}
              loading="lazy"
              alt=""
              src="/frame-626624-1.svg"
            />
            <div className={styles.learnMoreButton}>
              <h1 className={styles.learnMore}>Learn More</h1>
            </div>
          </div>
          <div className={styles.designerProfile}>
            <div className={styles.profileContent}>
              <div className={styles.profileDetails}>
                <h2 className={styles.uiuxDesigner}>UI/UX Designer</h2>
                <div className={styles.experienceDetailsWrapper}>
                  <div className={styles.experienceDetails}>
                    <div className={styles.experienceYears}>
                      <div className={styles.div}>
                        <b>5.0</b>
                        <span className={styles.span}>{`       `}</span>
                        <b>15</b>
                      </div>
                    </div>
                    <img
                      className={styles.experienceIcon}
                      loading="lazy"
                      alt=""
                      src="/vector-6.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.skillset}>
                <div className={styles.component1026}>
                  <b className={styles.dModeling}>{`3d Modeling `}</b>
                </div>
                <div className={styles.component922}>
                  <b className={styles.characterRigging}>Character Rigging</b>
                </div>
              </div>
            </div>
            <h2 className={styles.iAmWorking}>
              I am working in design industry from 3+ years as a design lead
            </h2>
          </div>
        </div>
        <div className={styles.component1080Wrapper}>
          <div className={styles.component1080}>
            <div className={styles.projectSlide}>
              <img
                className={styles.image235Icon}
                alt=""
                src="/image-235@2x.png"
              />
              <div className={styles.projectInfo}>
                <img
                  className={styles.image221Icon}
                  alt=""
                  src="/image-221@2x.png"
                />
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <a className={styles.nextChapter}>Next Chapter</a>
                  <div className={styles.groupWrapper}>
                    <img
                      className={styles.groupIcon}
                      loading="lazy"
                      alt=""
                      src="/group.svg"
                    />
                  </div>
                </div>
                <div className={styles.projectForm}>
                  <div className={styles.formContainer}>
                    <div className={styles.formFields}>
                      <div className={styles.tellUsSomething}>
                        Tell us something about yourself
                      </div>
                      <div className={styles.formInput}>
                        <div className={styles.div1}>02:28</div>
                      </div>
                    </div>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.frameItem} />
                      <div className={styles.submitButton} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.developerProfile}>
              <div className={styles.wrapperImage236}>
                <img
                  className={styles.image236Icon}
                  alt=""
                  src="/image-236@2x.png"
                />
              </div>
              <div className={styles.developerContent}>
                <div className={styles.developerDetails}>
                  <div className={styles.mernStackDeveloper}>
                    MERN stack developer with 7+ years of reputed companies
                    worldwide
                  </div>
                  <div className={styles.skillIconsParent}>
                    <div className={styles.skillIcons} />
                    <div className={styles.skillIcons1} />
                    <div className={styles.skillIcons2} />
                  </div>
                </div>
                <div className={styles.invitationDetailsParent}>
                  <div className={styles.invitationDetails}>
                    <div className={styles.invitationMessage}>
                      <div className={styles.messageContent}>
                        <div className={styles.div2}>1</div>
                      </div>
                      <img
                        className={styles.invitationMessageChild}
                        loading="lazy"
                        alt=""
                        src="/group-625348.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.invitationAction}>
                    <div className={styles.invitationButton}>
                      <img
                        className={styles.pathIcon}
                        loading="lazy"
                        alt=""
                        src="/path.svg"
                      />
                    </div>
                    <div className={styles.labelContentWrapper}>
                      <div className={styles.labelContent}>
                        <a className={styles.inviteToTeam}>Invite to Team</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.skillFilter}>
                <div className={styles.skillOptions}>
                  <div className={styles.component10261}>
                    <b className={styles.dModeling1}>{`3d Modeling `}</b>
                  </div>
                  <div className={styles.component9221}>
                    <b className={styles.characterRigging1}>
                      Character Rigging
                    </b>
                  </div>
                  <div className={styles.component920}>
                    <b className={styles.environmentDesign}>
                      Environment Design
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.profileCard}>
        <img
          className={styles.profileCardChild}
          loading="lazy"
          alt=""
          src="/group-625510.svg"
        />
        <div className={styles.cardDetails}>
          <div className={styles.iAmWorking1}>
            I am working in design industry from 3+ years as a MERN Stack
            Developer
          </div>
          <div className={styles.imageGallery}>
            <div className={styles.imageContainer}>
              <img
                className={styles.image235Icon1}
                loading="lazy"
                alt=""
                src="/image-235-1@2x.png"
              />
              <img
                className={styles.image221Icon1}
                alt=""
                src="/image-221-11@2x.png"
              />
            </div>
            <div className={styles.availability}>
              <div className={styles.availabilityLabel}>
                <a className={styles.availibility}>Availibility</a>
              </div>
              <div className={styles.workHours}>
                <div className={styles.hours}>9 Hours</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.designerCard}>
          <div className={styles.cardContainer}>
            <div className={styles.cardContent}>
              <div className={styles.cardImage}>
                <div className={styles.cardImageInner}>
                  <div className={styles.image235Parent}>
                    <img
                      className={styles.image235Icon2}
                      alt=""
                      src="/image-235-2@2x.png"
                    />
                    <img
                      className={styles.image221Icon2}
                      alt=""
                      src="/image-221-2@2x.png"
                    />
                  </div>
                </div>
              </div>
              <h1 className={styles.arianaMarie}>Ariana Marie</h1>
            </div>
          </div>
          <div className={styles.skillHighlight}>
            <div className={styles.highlightContent}>
              <div className={styles.component10262}>
                <b className={styles.dModeling2}>{`3d Modeling `}</b>
              </div>
              <div className={styles.iconPlaceholderParent}>
                <div className={styles.iconPlaceholder}>
                  <div className={styles.div3}>
                    <b>5.0</b>
                    <span className={styles.span1}>{`       `}</span>
                    <b>15</b>
                  </div>
                </div>
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-7.svg"
                />
              </div>
            </div>
            <div className={styles.additionalSkills}>
              <div className={styles.skillSelection}>
                <div className={styles.component9222}>
                  <b className={styles.characterRigging2}>Character Rigging</b>
                </div>
                <div className={styles.component9201}>
                  <b className={styles.environmentDesign1}>
                    Environment Design
                  </b>
                </div>
              </div>
              <div className={styles.interviewActionWrapper}>
                <div className={styles.interviewAction}>
                  <div className={styles.takeInterview}>Take Interview</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.ratingIcon}
        loading="lazy"
        alt=""
        src="/star-1.svg"
      />
    </div>
  );
};

export default Root;
