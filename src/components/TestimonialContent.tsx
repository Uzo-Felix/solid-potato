import { FunctionComponent } from "react";
import styles from "./TestimonialContent.module.css";

export type TestimonialContentType = {
  className?: string;
};

const TestimonialContent: FunctionComponent<TestimonialContentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.testimonialContent, className].join(" ")}>
      <div className={styles.component1084}>
        <div className={styles.testimonialImages}>
          <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
          <img
            className={styles.image6Icon}
            loading="lazy"
            alt=""
            src="/image-6@2x.png"
          />
        </div>
        <div className={styles.component1084Inner}>
          <div className={styles.companyExperienceParent}>
            <div className={styles.companyExperience}>
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
            <div className={styles.ratingContainer}>
              <img
                className={styles.quoteSeparatorIcon}
                loading="lazy"
                alt=""
                src="/frame-626653@2x.png"
              />
              <img
                className={styles.quoteSeparatorIcon1}
                alt=""
                src="/frame-626624-5.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.quoteContainer}>
          <img className={styles.icon} loading="lazy" alt="" src="/.svg" />
          <div className={styles.quoteContentWrapper}>
            <div className={styles.quoteContent}>
              <div className={styles.quoteAuthorInfo}>
                <div className={styles.authorImage}>
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
                <div className={styles.authorRoleContainer}>
                  <div className={styles.authorRole}>
                    <h1 className={styles.jasonMakki}>Jason Makki</h1>
                    <div className={styles.authorPosition}>
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
                Zwilt enabled us to deliver on time and they’ve been heavy
                hitters in our corner since. Zwilt enabled us to deliver on time
                and they’ve been heavy hitters in our corner since.Zwilt enabled
                us to deliver on time and they’ve been heavy hitters.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialContent;
