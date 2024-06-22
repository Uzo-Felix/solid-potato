import { FunctionComponent } from "react";
import SelectionDescription from "./SelectionDescription";
import ChatContent from "./ChatContent";
import ActivityBar from "./ActivityBar";
import styles from "./WhyZwiltContent.module.css";

export type WhyZwiltContentType = {
  className?: string;
};

const WhyZwiltContent: FunctionComponent<WhyZwiltContentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.whyZwiltContent, className].join(" ")}>
      <div className={styles.description}>
        <div className={styles.simplifyingHiring}>
          <h1 className={styles.whyChooseZwilt}>Why choose Zwilt?</h1>
          <h3 className={styles.weTakeComplex}>
            We take complex hiring processes - and simplify them. Connecting you
            to the world’s highly qualified talent pool.
          </h3>
        </div>
      </div>
      <div className={styles.exampleProfile}>
        <div className={styles.onboardingContent}>
          <div className={styles.profileDetails}>
            <div className={styles.skillDetailsParent}>
              <div className={styles.skillDetails}>
                <div className={styles.skillList}>
                  <div className={styles.uiuxDesigner}>UI/UX Designer</div>
                  <div className={styles.experience}>
                    <div className={styles.uIDescriptionContent}>
                      <div className={styles.experienceYears}>
                        <div className={styles.uIDescriptionContainer}>
                          <b>5.0</b>
                          <span className={styles.span}>{`       `}</span>
                          <b>15</b>
                        </div>
                      </div>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector-6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.modelingSkills}>
                  <div className={styles.component1026}>
                    <b className={styles.dModeling}>{`3d Modeling `}</b>
                  </div>
                  <div className={styles.component922}>
                    <b className={styles.characterRigging}>Character Rigging</b>
                  </div>
                </div>
              </div>
              <div className={styles.iAmWorking}>
                I am working in design industry from 3+ years as a design lead
              </div>
            </div>
            <div className={styles.onboarding}>
              <div className={styles.onboardingContent1}>
                <div className={styles.onboardingDetails}>
                  <div className={styles.riskFree}>
                    <h1 className={styles.onboardWithoutThe}>
                      Onboard without the risk.
                    </h1>
                  </div>
                  <div className={styles.component1080Wrapper}>
                    <div className={styles.component1080}>
                      <div className={styles.grooveTestimonial}>
                        <img
                          className={styles.image235Icon}
                          alt=""
                          src="/image-235@2x.png"
                        />
                        <div className={styles.secondCardImage}>
                          <img
                            className={styles.image221Icon}
                            alt=""
                            src="/image-221@2x.png"
                          />
                          <div className={styles.rectangleParent}>
                            <div className={styles.frameChild} />
                            <b className={styles.nextChapter}>Next Chapter</b>
                            <div className={styles.groupWrapper}>
                              <img
                                className={styles.groupIcon}
                                alt=""
                                src="/group.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.inputFieldWrapper}>
                            <div className={styles.inputField}>
                              <div className={styles.inputDetails}>
                                <div className={styles.tellUsSomething}>
                                  Tell us something about yourself
                                </div>
                                <div className={styles.inputBox}>
                                  <div className={styles.separator}>02:28</div>
                                </div>
                              </div>
                              <div className={styles.rectangleGroup}>
                                <div className={styles.frameItem} />
                                <div className={styles.experienceBackground} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.wrapperImage236Parent}>
                        <div className={styles.wrapperImage236}>
                          <img
                            className={styles.image236Icon}
                            alt=""
                            src="/image-236@2x.png"
                          />
                        </div>
                        <div className={styles.developerDetails}>
                          <div className={styles.experienceDetails}>
                            <div className={styles.mernStackDeveloper}>
                              MERN stack developer with 7+ years of reputed
                              companies worldwide
                            </div>
                            <div className={styles.experienceIndicators}>
                              <div className={styles.mERNInviteSkills} />
                              <div className={styles.mERNInviteSkills1} />
                              <div className={styles.mERNInviteSkills2} />
                            </div>
                          </div>
                          <div className={styles.actions}>
                            <div className={styles.inviteButtonWrapper}>
                              <div className={styles.inviteButton}>
                                <div className={styles.separatorWrapper}>
                                  <div className={styles.separator1}>1</div>
                                </div>
                                <img
                                  className={styles.inviteButtonChild}
                                  alt=""
                                  src="/group-625348.svg"
                                />
                              </div>
                            </div>
                            <div className={styles.moreSkills}>
                              <div className={styles.pathWrapper}>
                                <img
                                  className={styles.pathIcon}
                                  alt=""
                                  src="/path.svg"
                                />
                              </div>
                              <div className={styles.inviteButtonContainer}>
                                <div className={styles.inviteButton1}>
                                  <a className={styles.inviteToTeam}>
                                    Invite to Team
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.skillTags}>
                          <div className={styles.tagList}>
                            <div className={styles.component10261}>
                              <b
                                className={styles.dModeling1}
                              >{`3d Modeling `}</b>
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
                </div>
                <SelectionDescription
                  wePickTheBestForYouToSele="We pick the best for you to select."
                  thousandsOfVettedCandidat="Thousands of vetted candidates in dozens of categories."
                  riskFreeResourceSwappingF="Risk-free resource swapping for the best fit."
                />
              </div>
              <div className={styles.component1064}>
                <img
                  className={styles.learnMoreContainer}
                  alt=""
                  src="/frame-626624-1.svg"
                />
                <div className={styles.learnMoreWrapper}>
                  <h3 className={styles.learnMore}>Learn More</h3>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.profileCard}>
            <img
              className={styles.profileCardChild}
              alt=""
              src="/group-625510.svg"
            />
            <div className={styles.designExperienceContent}>
              <div className={styles.iAmWorking1}>
                I am working in design industry from 3+ years as a MERN Stack
                Developer
              </div>
              <div className={styles.cardDetails}>
                <div className={styles.designImages}>
                  <img
                    className={styles.image235Icon1}
                    alt=""
                    src="/image-235-1@2x.png"
                  />
                  <img
                    className={styles.image221Icon1}
                    alt=""
                    src="/image-221-1@2x.png"
                  />
                </div>
                <div className={styles.hoursDetails}>
                  <div className={styles.hoursContent}>
                    <div className={styles.availableHours}>
                      <a className={styles.availibility}>Availibility</a>
                    </div>
                    <div className={styles.hoursWrapper}>
                      <div className={styles.hours}>9 Hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.profileContentParent}>
              <div className={styles.profileContent}>
                <div className={styles.arianaContent}>
                  <div className={styles.profileImageContainer}>
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
              <div className={styles.profileName}>
                <h2 className={styles.arianaMarie}>Ariana Marie</h2>
              </div>
              <div className={styles.expertiseContainer}>
                <div className={styles.expertiseList}>
                  <div className={styles.component10262}>
                    <b className={styles.dModeling2}>{`3d Modeling `}</b>
                  </div>
                  <div className={styles.component9222}>
                    <b className={styles.characterRigging2}>
                      Character Rigging
                    </b>
                  </div>
                  <div className={styles.component9201}>
                    <b className={styles.environmentDesign1}>
                      Environment Design
                    </b>
                  </div>
                </div>
                <div className={styles.experienceDetails1}>
                  <div className={styles.experienceYearContainer}>
                    <div className={styles.experienceYearBox}>
                      <div className={styles.experienceYearContent}>
                        <div
                          className={styles.interviewButtonPlaceholderContainer}
                        >
                          <b>5.0</b>
                          <span className={styles.span1}>{`       `}</span>
                          <b>15</b>
                        </div>
                      </div>
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="/vector-7.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.takeInterviewWrapper}>
                    <div className={styles.takeInterview}>
                      <div className={styles.takeInterview1}>
                        Take Interview
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.onboardingContentChild}
            alt=""
            src="/star-1.svg"
          />
        </div>
      </div>
      <div className={styles.chatContentWrapper}>
        <div className={styles.chatContent}>
          <div className={styles.openBookInnerContent}>
            <h1 className={styles.anOpenBook}>An open book.</h1>
            <div className={styles.openBookDescription}>
              <div className={styles.openBookIconContainer}>
                <h3 className={styles.easyAndTransparentContainer}>
                  <p className={styles.easyAndTransparent}>
                    Easy and transparent one-to-one chat with candidates.
                  </p>
                  <p className={styles.simpleAndConvenient}>
                    Simple and convenient payment methods.
                  </p>
                  <p className={styles.reviewPastRatings}>
                    Review past ratings.
                  </p>
                </h3>
                <div className={styles.chatFeatures} />
                <div className={styles.chatFeatures1} />
                <div className={styles.chatFeatures2} />
              </div>
              <div className={styles.component10641}>
                <img
                  className={styles.learnMoreContainer1}
                  alt=""
                  src="/frame-626624-1.svg"
                />
                <div className={styles.learnMoreFrame}>
                  <h3 className={styles.learnMore1}>Learn More</h3>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.chatPreviewContentWrapper}>
            <div className={styles.chatPreviewContent}>
              <div className={styles.chatbar}>
                <div className={styles.chatHeader}>
                  <div className={styles.allMessages}>All Messages</div>
                </div>
                <div className={styles.chatMessageContainer}>
                  <div className={styles.chatMessageContent}>
                    <img
                      className={styles.chatMessageContentChild}
                      alt=""
                      src="/group-626450.svg"
                    />
                    <div className={styles.messageBubbleContainer}>
                      <div className={styles.messageBubble}>
                        <div className={styles.estherHoward}>Esther Howard</div>
                        <div className={styles.pm}>12:00pm</div>
                      </div>
                      <div className={styles.hiLuisI}>
                        Hi Luis I am currently working as an expert at alfizo
                        org
                      </div>
                    </div>
                  </div>
                </div>
                <ChatContent group626450="/group-626450-1.svg" />
                <div className={styles.chatContent1}>
                  <img
                    className={styles.chatContentChild}
                    alt=""
                    src="/vector-406.svg"
                  />
                </div>
                <ChatContent
                  group626450="/group-626450-2.svg"
                  propPadding="0px 0px var(--padding-3xs-2)"
                  propPadding1="unset"
                />
                <div className={styles.chatContent2}>
                  <img
                    className={styles.chatContentItem}
                    alt=""
                    src="/vector-404.svg"
                  />
                </div>
                <ChatContent
                  group626450="/group-626450-3.svg"
                  propPadding="0px 0px var(--padding-3xs-1)"
                  propPadding1="0px 0px 0px"
                />
                <img
                  className={styles.chatbarChild}
                  alt=""
                  src="/vector-405.svg"
                />
                <img
                  className={styles.chatbarItem}
                  loading="lazy"
                  alt=""
                  src="/rectangle-3339.svg"
                />
                <div className={styles.hiLuisI1}>
                  Hi Luis I am currently working as an expert at alfizo org
                </div>
                <div className={styles.actionIconParent}>
                  <img
                    className={styles.actionIcon}
                    alt=""
                    src="/vector-8.svg"
                  />
                  <img
                    className={styles.actionButtonIcon}
                    alt=""
                    src="/action-button@2x.png"
                  />
                </div>
              </div>
              <div className={styles.attachmentButtonWrapper}>
                <div className={styles.attachmentButton}>
                  <img
                    className={styles.replyIcon}
                    alt=""
                    src="/vector-9.svg"
                  />
                  <img
                    className={styles.replyButtonIcon}
                    loading="lazy"
                    alt=""
                    src="/frame-626664@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.chatInputIcon}
            loading="lazy"
            alt=""
            src="/frame-626665@2x.png"
          />
        </div>
      </div>
      <div className={styles.chatWindowFooter}>
        <div className={styles.chatArea}>
          <div className={styles.activityBarContainer}>
            <div className={styles.activityBar}>
              <div className={styles.activityIcon}>00:05:28</div>
              <div className={styles.component2}>
                <img
                  className={styles.searchIcon}
                  alt=""
                  src="/vector-10.svg"
                />
                <div className={styles.searchField} />
              </div>
              <img
                className={styles.messageListIcon}
                alt=""
                src="/message-list.svg"
              />
            </div>
          </div>
          <div className={styles.stayInTheLoopContentParent}>
            <div className={styles.stayInTheLoopContent}>
              <h1 className={styles.stayInThe}>Stay in the loop.</h1>
              <div className={styles.stayInTheLoopIconContaine}>
                <h3 className={styles.trackYourStaffContainer}>
                  <p className={styles.trackYourStaff}>
                    Track your staff activity down to every minute with
                    screenshots.
                  </p>
                  <p className={styles.comprehensiveTimesheetData}>
                    Comprehensive timesheet data to process payments.
                  </p>
                  <p className={styles.createProjectsTo}>
                    Create projects to organize and assign tasks more
                    effectively.
                  </p>
                </h3>
                <div className={styles.trackingBenefits} />
                <div className={styles.trackingBenefits1} />
                <div className={styles.trackingBenefits2} />
              </div>
              <div className={styles.component10642}>
                <img
                  className={styles.trackingLinkIcon}
                  alt=""
                  src="/frame-626624-1.svg"
                />
                <div className={styles.frameDiv}>
                  <h3 className={styles.learnMore2}>Learn More</h3>
                </div>
              </div>
            </div>
            <div className={styles.activityTrackingContentWrapper}>
              <div className={styles.activityTrackingContent}>
                <div className={styles.activityTrackingInnerConten}>
                  <div className={styles.activityTrackingInnerContenInner}>
                    <div className={styles.playIconParent}>
                      <img
                        className={styles.playIcon}
                        alt=""
                        src="/vector-8.svg"
                      />
                      <img
                        className={styles.pauseButtonIcon}
                        alt=""
                        src="/action-button@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.activityTrackingInnerContenChild}>
                    <div className={styles.timerDisplayParent}>
                      <img
                        className={styles.timerDisplayIcon}
                        alt=""
                        src="/vector-9.svg"
                      />
                      <img
                        className={styles.timerResetIcon}
                        loading="lazy"
                        alt=""
                        src="/frame-626664-1@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.timer}>
                    <img
                      className={styles.timerProgressIcon}
                      alt=""
                      src="/timer-progress.svg"
                    />
                    <div className={styles.pexelsItaloMelo2379004RemoParent}>
                      <img
                        className={styles.pexelsItaloMelo2379004RemoIcon}
                        alt=""
                        src="/pexelsitalomelo2379004removebgpreview-2@2x.png"
                      />
                      <img
                        className={styles.pexelsItaloMelo2379004RemoIcon1}
                        alt=""
                        src="/pexelsitalomelo2379004removebgpreview-1@2x.png"
                      />
                    </div>
                    <div className={styles.trackingDetails}>
                      <div className={styles.trackingActionContainer}>
                        <div className={styles.trackingButton}>
                          <div className={styles.startTracking}>
                            Start Tracking
                          </div>
                        </div>
                        <div className={styles.statusIconParent}>
                          <div className={styles.statusIcon}>00:05:28</div>
                          <div className={styles.component21}>
                            <img
                              className={styles.trackSearchIcon}
                              alt=""
                              src="/vector-13.svg"
                            />
                            <div className={styles.trackingSearchField} />
                          </div>
                        </div>
                        <div className={styles.trackedToday}>Tracked today</div>
                        <div className={styles.trackingDetailsWrapper}>
                          <div className={styles.trackingDetails1}>
                            10:15:58
                          </div>
                        </div>
                        <div className={styles.trackingActionContainerInner}>
                          <div className={styles.rectangleContainer}>
                            <div className={styles.frameInner} />
                            <div className={styles.unableToTrack}>
                              Unable to track 50 minutes today I was working on
                              Netflix, please add these hours to my shift
                            </div>
                          </div>
                        </div>
                        <div className={styles.component6}>
                          <div className={styles.addNotes}>Add Notes</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.component7}>
                      <div className={styles.segment} />
                      <img
                        className={styles.segmentDividerIcon}
                        alt=""
                        src="/vector-14.svg"
                      />
                    </div>
                    <div className={styles.component10}>
                      <div className={styles.component10Child} />
                      <img
                        className={styles.vectorIcon2}
                        alt=""
                        src="/vector-15.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.trackingFooter}>
                    <img
                      className={styles.trackingFooterChild}
                      alt=""
                      src="/group-625178.svg"
                    />
                    <div className={styles.zwilttrackerParent}>
                      <div className={styles.zwilttracker}>ZwiltTracker</div>
                      <div className={styles.nameBackground} />
                    </div>
                    <img
                      className={styles.expandIcon}
                      alt=""
                      src="/expand-icon.svg"
                    />
                    <img
                      className={styles.trackingFooterItem}
                      alt=""
                      src="/group-625181.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.activityBarWrapper}>
            <ActivityBar logFilter="pending_1:654" />
          </div>
        </div>
      </div>
      <div className={styles.contentBackground} />
    </div>
  );
};

export default WhyZwiltContent;
