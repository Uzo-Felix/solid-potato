import { FunctionComponent } from "react";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent6 from "../components/FrameComponent6";
import Component1 from "../components/Component1";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Component from "../components/Component";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  return (
    <div className={styles.homepage}>
      <img className={styles.rectangleIcon} alt="" src="/side-bar@2x.png" />
      <img className={styles.homepageChild} alt="" src="/rectangle-3206.svg" />
      <FrameComponent10 />
      <FrameComponent9 />
      <img
        className={styles.homepageItem}
        loading="lazy"
        alt=""
        src="/vector-343.svg"
      />
      <section className={styles.yourOneStopMarketplaceForWrapper}>
        <h1 className={styles.yourOneStopMarketplace}>
          Your one-stop marketplace for finding the talent your business needs.
        </h1>
      </section>
      <img
        className={styles.homepageInner}
        alt=""
        src="/rectangle-3206-2.svg"
      />
      <section className={styles.frameParent}>
        <FrameComponent6 />
        <Component1 />
      </section>
      <img
        className={styles.vectorIcon}
        loading="lazy"
        alt=""
        src="/vector-343-1.svg"
      />
      <FrameComponent5 />
      <section className={styles.frameGroup}>
        <FrameComponent4 />
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.frequentlyAskedQuestionsWrapper}>
              <h1 className={styles.frequentlyAskedQuestions}>
                Frequently asked questions
              </h1>
            </div>
            <img className={styles.frameChild} alt="" src="/vector-410.svg" />
          </div>
        </div>
        <div className={styles.frameDiv}>
          <FrameComponent3 />
          <div className={styles.howLongAreTheAverageProjeWrapper}>
            <h3 className={styles.howLongAre}>
              How long are the average projects?
            </h3>
          </div>
          <FrameComponent2 />
          <div className={styles.howMuchCanIEarnWrapper}>
            <h3 className={styles.howMuchCan}>How much can I earn?</h3>
          </div>
          <FrameComponent1 />
        </div>
      </section>
      <FrameComponent />
      <div className={styles.rectangleDiv} />
      <Component />
    </div>
  );
};

export default Homepage;
