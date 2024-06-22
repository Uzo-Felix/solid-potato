import { FunctionComponent } from "react";
import SelectionDescription from "./SelectionDescription";
import styles from "./Counry.module.css";

export type CounryType = {
  className?: string;
};

const Counry: FunctionComponent<CounryType> = ({ className = "" }) => {
  return (
    <div className={[styles.counry, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.anOpenBookParent}>
          <h1 className={styles.anOpenBook}>An open book.</h1>
          <SelectionDescription
            wePickTheBestForYouToSele="Easy and transparent one-to-one chat with candidates."
            thousandsOfVettedCandidat="Simple and convenient payment methods."
            riskFreeResourceSwappingF="Review past ratings."
            propWidth="unset"
            propFlexWrap="unset"
            propAlignSelf="stretch"
            propBackgroundColor="#ffbe2e"
            propBackgroundColor1="#ffbe2e"
            propBackgroundColor2="#ffbe2e"
          />
        </div>
        <div className={styles.component1064}>
          <img
            className={styles.component1064Child}
            loading="lazy"
            alt=""
            src="/frame-626624-1.svg"
          />
          <div className={styles.learnMoreButton}>
            <h3 className={styles.learnMore}>Learn More</h3>
          </div>
        </div>
      </div>
      <div className={styles.chatAreaWrapper}>
        <div className={styles.chatArea}>
          <div className={styles.chatbar}>
            <div className={styles.allMessages}>All Messages</div>
            <div className={styles.chatbarInner}>
              <div className={styles.frameGroup}>
                <img
                  className={styles.frameChild}
                  loading="lazy"
                  alt=""
                  src="/group-626450.svg"
                />
                <div className={styles.frameContainer}>
                  <div className={styles.estherHowardParent}>
                    <div className={styles.estherHoward}>Esther Howard</div>
                    <div className={styles.pm}>12:00pm</div>
                  </div>
                  <a className={styles.hiLuisI}>
                    Hi Luis I am currently working as an expert at alfizo org
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.userMessage}>
              <div className={styles.messageBubbleWrapper}>
                <div className={styles.messageBubble}>
                  <div className={styles.frameDiv}>
                    <img
                      className={styles.frameItem}
                      loading="lazy"
                      alt=""
                      src="/group-626450-1.svg"
                    />
                    <div className={styles.sub}>
                      <div className={styles.uk}>
                        <div className={styles.estherHoward1}>
                          Esther Howard
                        </div>
                        <div className={styles.pm1}>12:00pm</div>
                      </div>
                      <div className={styles.hiLuisI1}>
                        Hi Luis I am currently working as an expert at alfizo
                        org
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.messageBubbleChild}
                    loading="lazy"
                    alt=""
                    src="/vector-406.svg"
                  />
                  <div className={styles.sub1}>
                    <img
                      className={styles.subChild}
                      loading="lazy"
                      alt=""
                      src="/group-626450-2.svg"
                    />
                    <div className={styles.france}>
                      <div className={styles.estherHowardGroup}>
                        <div className={styles.estherHoward2}>
                          Esther Howard
                        </div>
                        <div className={styles.pm2}>12:00pm</div>
                      </div>
                      <div className={styles.hiLuisI2}>
                        Hi Luis I am currently working as an expert at alfizo
                        org
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.subIcon}
                    loading="lazy"
                    alt=""
                    src="/vector-404.svg"
                  />
                  <div className={styles.others}>
                    <img
                      className={styles.othersChild}
                      loading="lazy"
                      alt=""
                      src="/group-626450-3.svg"
                    />
                    <div className={styles.frameParent1}>
                      <div className={styles.estherHowardContainer}>
                        <div className={styles.estherHoward3}>
                          Esther Howard
                        </div>
                        <div className={styles.pm3}>12:00pm</div>
                      </div>
                      <div className={styles.hiLuisI3}>
                        Hi Luis I am currently working as an expert at alfizo
                        org
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.messageBubbleItem}
                    loading="lazy"
                    alt=""
                    src="/vector-405.svg"
                  />
                </div>
              </div>
              <div className={styles.vectorParent}>
                <img
                  className={styles.frameInner}
                  alt=""
                  src="/rectangle-3339.svg"
                />
                <div className={styles.hiLuisI4}>
                  Hi Luis I am currently working as an expert at alfizo org
                </div>
                <div className={styles.vectorGroup}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector-8.svg"
                  />
                  <img
                    className={styles.frameIcon}
                    loading="lazy"
                    alt=""
                    src="/frame-626662@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.typingIconWrapper}>
            <div className={styles.typingIcon}>
              <img className={styles.buttonIcon} alt="" src="/vector-9.svg" />
              <img
                className={styles.typingIconChild}
                loading="lazy"
                alt=""
                src="/frame-626664@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.counryChild}
        loading="lazy"
        alt=""
        src="/frame-6266651@2x.png"
      />
    </div>
  );
};

export default Counry;
