import { FunctionComponent } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.vectorParent, className].join(" ")}>
      <img className={styles.frameChild} alt="" src="/rectangle-3215.svg" />
      <div className={styles.rectangleParent}>
        <div className={styles.frameItem} />
        <div className={styles.teamBuilding}>
          <div className={styles.buildTeam}>
            <img
              className={styles.xIcon}
              loading="lazy"
              alt=""
              src="/10x.svg"
            />
          </div>
          <h1 className={styles.startBuildingYour}>
            Start building your team.
          </h1>
        </div>
        <div className={styles.onboardYourCandidate}>
          Onboard your candidate right away and start creating the next big
          thing.
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameInner} />
            <img
              className={styles.profileImageIcon}
              alt=""
              src="/profile-image@2x.png"
            />
            <img className={styles.leelarIcon} alt="" src="/leelar.svg" />
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.emptySkillParent}>
            <a className={styles.emptySkill}>3</a>
            <div className={styles.browseContent}>
              <div className={styles.teamContent}>
                <h1 className={styles.startBuildingYour1}>
                  Start building your team.
                </h1>
                <div className={styles.onboardYourCandidate1}>
                  Onboard your candidate right away and start creating the next
                  big thing.
                </div>
                <div className={styles.component1058}>
                  <img
                    className={styles.emptyButtonBackground}
                    alt=""
                    src="/frame-626624-3.svg"
                  />
                  <div className={styles.joinNowWrapper}>
                    <div className={styles.joinNow}>Join Now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangleDiv} />
          <div className={styles.profileContainer}>
            <div className={styles.wrapperEllipse3}>
              <img
                className={styles.wrapperEllipse3Child}
                alt=""
                src="/ellipse-3@2x.png"
              />
            </div>
            <div className={styles.nameContainer}>
              <h3 className={styles.allisonParker}>Allison Parker</h3>
            </div>
          </div>
          <div className={styles.experienceContainer}>
            <div className={styles.rubyDeveloper}>Ruby Developer</div>
            <div className={styles.redwoodCityCalifornia}>
              Redwood City, California 7 years experience
            </div>
          </div>
          <img className={styles.leelarIcon1} alt="" src="/leelar-1.svg" />
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
