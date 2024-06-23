import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import ActivityBar from "./ActivityBar";
import styles from "./Root1.module.css";

export type Root1Type = {
  className?: string;
};

const Root1: FunctionComponent<Root1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.root, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.container1}>
          <div className={styles.container2}>
            <h1 className={styles.stayInThe}>Stay in the loop.</h1>
            <div className={styles.container3}>
              <div className={styles.container4}>
                <div className={styles.shapesContainer}>
                  <div className={styles.shapesContainerChild} />
                  <div className={styles.shapesContainerItem} />
                  <div className={styles.shapesContainerInner} />
                </div>
              </div>
              <div className={styles.trackYourStaffContainer}>
                <p className={styles.trackYourStaff}>
                  Track your staff activity down to every minute with
                  screenshots.
                </p>
                <p className={styles.comprehensiveTimesheetData}>
                  Comprehensive timesheet data to process payments.
                </p>
                <p className={styles.createProjectsTo}>
                  Create projects to organize and assign tasks more effectively.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.component1064}>
            <img
              className={styles.containerIcon}
              loading="lazy"
              alt=""
              src="/frame-626624-1.svg"
            />
            <div className={styles.learnMoreButton}>
              <div className={styles.learnMore}>Learn More</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container5}>
        <div className={styles.activityBar}>
          <div className={styles.container6}>
            <input className={styles.container7} type="checkbox" />
          </div>
          <div className={styles.iconContainer}>
            <div className={styles.component2}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/vector-10.svg"
              />
              <div className={styles.background} />
            </div>
          </div>
          <a className={styles.activityLabel}>00:05:28</a>
        </div>
        <div className={styles.container8}>
          <div className={styles.container9}>
            <div className={styles.container10}>
              <div className={styles.imageIconContainerWrapper}>
                <div className={styles.imageIconContainer}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/vector-9.svg"
                  />
                  <img
                    className={styles.containerIcon1}
                    loading="lazy"
                    alt=""
                    src="/frame-6266641@2x.png"
                  />
                </div>
              </div>
              <div className={styles.container11}>
                <div className={styles.container12}>
                  <div className={styles.userImageContainer}>
                    <div className={styles.pexelsItaloMelo2379004RemoParent}>
                      <img
                        className={styles.pexelsItaloMelo2379004RemoIcon}
                        alt=""
                        src="/pexelsitalomelo2379004removebgpreview-21@2x.png"
                      />
                      <img
                        className={styles.pexelsItaloMelo2379004RemoIcon1}
                        loading="lazy"
                        alt=""
                        src="/pexelsitalomelo2379004removebgpreview-11@2x.png"
                      />
                    </div>
                    <div className={styles.container13}>
                      <div className={styles.inputFieldsContainer}>
                        <div className={styles.component10}>
                          <div className={styles.inputBackground} />
                          <img
                            className={styles.inputIcon}
                            loading="lazy"
                            alt=""
                            src="/vector-15.svg"
                          />
                        </div>
                        <div className={styles.component7}>
                          <div className={styles.component7Child} />
                          <img
                            className={styles.vectorIcon}
                            loading="lazy"
                            alt=""
                            src="/vector-14.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.bottomImageIcon}
                  loading="lazy"
                  alt=""
                  src="/timer-progress.svg"
                />
                <div className={styles.container14}>
                  <div className={styles.container15}>
                    <div className={styles.trackingButton}>
                      <div className={styles.startTracking}>Start Tracking</div>
                      <div className={styles.container16}>
                        <div className={styles.trackingIconContainer}>
                          <div className={styles.component21}>
                            <img
                              className={styles.trackingIcon}
                              loading="lazy"
                              alt=""
                              src="/vector-13.svg"
                            />
                            <div className={styles.buttonBackground} />
                          </div>
                        </div>
                        <div className={styles.buttonLabel}>00:05:28</div>
                      </div>
                    </div>
                    <div className={styles.trackingStatus}>
                      <div className={styles.trackedToday}>Tracked today</div>
                      <div className={styles.trackingMessage}>10:15:58</div>
                    </div>
                    <div className={styles.container17}>
                      <div className={styles.containerChild} />
                      <div className={styles.unableToTrack}>
                        Unable to track 50 minutes today I was working on
                        Netflix, please add these hours to my shift
                      </div>
                    </div>
                    <Button
                      className={styles.component6}
                      disableElevation
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#fff",
                        fontSize: "8.6",
                        background: "#525aa0",
                        borderRadius: "3.08px",
                        "&:hover": { background: "#525aa0" },
                        width: 91.1,
                        height: 27.1,
                      }}
                    >
                      Add Notes
                    </Button>
                  </div>
                </div>
              </div>
              <div className={styles.container18}>
                <div className={styles.titleContainer}>
                  <img
                    className={styles.titleContainerChild}
                    loading="lazy"
                    alt=""
                    src="/group-625178.svg"
                  />
                  <div className={styles.zwilttracker}>ZwiltTracker</div>
                </div>
                <div className={styles.container19}>
                  <div className={styles.buttonIconContainer}>
                    <img
                      className={styles.buttonIcon}
                      loading="lazy"
                      alt=""
                      src="/expand-icon.svg"
                    />
                  </div>
                  <div className={styles.buttonBackground1} />
                  <img
                    className={styles.containerItem}
                    loading="lazy"
                    alt=""
                    src="/group-625181.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container20}>
          <ActivityBar
            logFilter="pending_1:951"
            propFlex="unset"
            propWidth="295px"
            propDisplay="inline-block"
            propMinWidth="27.1px"
            propDisplay1="inline-block"
            propMinWidth1="66px"
          />
          <div className={styles.iconContainerWrapper}>
            <div className={styles.iconContainer1}>
              <img className={styles.icon1} alt="" src="/vector-8.svg" />
              <img
                className={styles.containerIcon2}
                loading="lazy"
                alt=""
                src="/frame-626662@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root1;