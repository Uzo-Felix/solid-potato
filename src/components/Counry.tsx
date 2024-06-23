import { FunctionComponent } from "react";
import styles from "./Counry.module.css";

export type CounryType = {
  className?: string;
};

const Counry: FunctionComponent<CounryType> = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.anOpenBookParent}>
          <b className={styles.anOpenBook}>An open book.</b>
          <div className={styles.frameContainer}>
            <div className={styles.frameWrapper}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.frameItem} />
                <div className={styles.frameInner} />
              </div>
            </div>
            <div className={styles.easyAndTransparentContainer}>
              <p className={styles.easyAndTransparent}>
                Easy and transparent one-to-one chat with candidates.
              </p>
              <p className={styles.simpleAndConvenient}>
                Simple and convenient payment methods.
              </p>
              <p className={styles.reviewPastRatings}>Review past ratings.</p>
            </div>
          </div>
        </div>
        <div className={styles.component1064}>
          <img
            className={styles.component1064Child}
            alt=""
            src="/frame-626624-1.svg"
          />
          <div className={styles.learnMoreWrapper}>
            <div className={styles.learnMore}>Learn More</div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.chatbarParent}>
          <div className={styles.chatbar}>
            <div className={styles.allMessages}>All Messages</div>
            <div className={styles.chatbarInner}>
              <div className={styles.frameParent1}>
                <img
                  className={styles.groupIcon}
                  alt=""
                  src="/group-626450.svg"
                />
                <div className={styles.frameParent2}>
                  <div className={styles.estherHowardParent}>
                    <div className={styles.estherHoward}>Esther Howard</div>
                    <div className={styles.pm}>12:00pm</div>
                  </div>
                  <div className={styles.hiLuisI}>
                    Hi Luis I am currently working as an expert at alfizo org
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.frameWrapper1}>
                <div className={styles.frameParent4}>
                  <div className={styles.frameParent5}>
                    <img
                      className={styles.frameChild1}
                      alt=""
                      src="/group-626450-1.svg"
                    />
                    <div className={styles.frameParent6}>
                      <div className={styles.estherHowardGroup}>
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
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector-406.svg"
                  />
                  <div className={styles.frameParent7}>
                    <img
                      className={styles.frameChild2}
                      alt=""
                      src="/group-626450-2.svg"
                    />
                    <div className={styles.frameParent8}>
                      <div className={styles.estherHowardContainer}>
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
                    className={styles.frameChild3}
                    alt=""
                    src="/vector-404.svg"
                  />
                  <div className={styles.frameParent9}>
                    <img
                      className={styles.frameChild4}
                      alt=""
                      src="/group-626450-3.svg"
                    />
                    <div className={styles.frameParent10}>
                      <div className={styles.estherHowardParent1}>
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
                    className={styles.frameChild5}
                    alt=""
                    src="/vector-405.svg"
                  />
                </div>
              </div>
              <div className={styles.vectorParent}>
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-3339.svg"
                />
                <div className={styles.hiLuisI4}>
                  Hi Luis I am currently working as an expert at alfizo org
                </div>
                <div className={styles.vectorGroup}>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector-8.svg"
                  />
                  <img
                    className={styles.frameIcon}
                    alt=""
                    src="/frame-626662@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.vectorContainer}>
              <img className={styles.vectorIcon2} alt="" src="/vector-9.svg" />
              <img
                className={styles.frameChild6}
                alt=""
                src="/frame-626664@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <img className={styles.frameChild7} alt="" src="/frame-6266651@2x.png" />
    </div>
  );
};

export default Counry;
