import { FunctionComponent } from "react";
import styles from "./Component1.module.css";

export type Component1Type = {
  className?: string;
};

const Component1: FunctionComponent<Component1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.component1084, className].join(" ")}>
      <div className={styles.image7Parent}>
        <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
        <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
      </div>
      <div className={styles.component1084Inner}>
        <div className={styles.frameParent}>
          <div className={styles.howItWorkedForJasonAtParent}>
            <h1 className={styles.howItWorkedContainer}>
              <p className={styles.howItWorked}>How it worked</p>
              <p className={styles.forJason}>for Jason at</p>
              <p className={styles.p}>{`            `}</p>
            </h1>
            <img
              className={styles.groovehqIcon}
              loading="lazy"
              alt=""
              src="/groovehq.svg"
            />
          </div>
          <h3 className={styles.zwiltEnabledUs}>
            Zwilt enabled us to deliver on time and they’ve been heavy hitters
            in our corner since.
          </h3>
          <div className={styles.frameGroup}>
            <img
              className={styles.frameChild}
              alt=""
              src="/frame-626653@2x.png"
            />
            <img
              className={styles.frameItem}
              alt=""
              src="/frame-626624-5.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.parent}>
        <img className={styles.icon} loading="lazy" alt="" src="/.svg" />
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.image6Parent}>
              <img
                className={styles.image6Icon1}
                alt=""
                src="/image-6-1@2x.png"
              />
              <img
                className={styles.groovehqIcon1}
                alt=""
                src="/groovehq-1.svg"
              />
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.jasonMakkiParent}>
                <h1 className={styles.jasonMakki}>Jason Makki</h1>
                <div className={styles.engineerAtGrooveParent}>
                  <div className={styles.engineerAtGrooveContainer}>
                    <span>{`Engineer at `}</span>
                    <span className={styles.groove}>GROOVE</span>
                  </div>
                  <div className={styles.sanFrancisco}>San Francisco</div>
                </div>
              </div>
            </div>
          </div>
          <h3 className={styles.zwiltEnabledUs1}>
            Zwilt enabled us to deliver on time and they’ve been heavy hitters
            in our corner since. Zwilt enabled us to deliver on time and they’ve
            been heavy hitters in our corner since.Zwilt enabled us to deliver
            on time and they’ve been heavy hitters.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Component1;
