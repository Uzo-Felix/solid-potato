import { FunctionComponent } from "react";
import FindingFit from "../components/FindingFit";
import FrameComponent4 from "../components/FrameComponent4";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent from "../components/GroupComponent";
import TestimonialContent from "../components/TestimonialContent";
import FrameComponent3 from "../components/FrameComponent3";
import MarketplaceCallToAction from "../components/MarketplaceCallToAction";
import WhyZwiltContent from "../components/WhyZwiltContent";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import AverageProjectsContainer from "../components/AverageProjectsContainer";
import FrameComponent from "../components/FrameComponent";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  return (
    <div className={styles.homepage}>
      <FindingFit />
      <FrameComponent4 />
      <h1 className={styles.startYourJourney}>Start your journey today.</h1>
      <div className={styles.frameParent}>
        <GroupComponent1 />
        <GroupComponent />
      </div>
      <section className={styles.vettingDescription}>
        <TestimonialContent />
        <div className={styles.testimonialNavigation}>
          <img
            className={styles.testimonialNavigationChild}
            loading="lazy"
            alt=""
            src="/vector-343.svg"
          />
          <FrameComponent3 />
        </div>
      </section>
      <section className={styles.questionList}>
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/rectangle-3213.svg" />
          <div className={styles.candidateCards}>
            <div className={styles.candidateCardsChild} />
            <div className={styles.cardBackgrounds}>
              <div className={styles.cardBackgroundsChild} />
              <img
                className={styles.maskGroupIcon}
                loading="lazy"
                alt=""
                src="/mask-group-1@2x.png"
              />
            </div>
            <div className={styles.candidateInformation}>
              <div className={styles.candidateDetailsGrid}>
                <div className={styles.rubyDeveloper}>Ruby Developer</div>
                <div className={styles.redwoodCityCalifornia}>
                  Redwood City, California 7 years experience
                </div>
              </div>
            </div>
          </div>
          <div className={styles.candidateCards1}>
            <div className={styles.candidateCardsItem} />
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <img
                className={styles.maskGroupIcon1}
                loading="lazy"
                alt=""
                src="/mask-group-2@2x.png"
              />
            </div>
            <div className={styles.candidateCardsInner}>
              <div className={styles.rubyDeveloperParent}>
                <div className={styles.rubyDeveloper1}>Ruby Developer</div>
                <div className={styles.redwoodCityCalifornia1}>
                  Redwood City, California 7 years experience
                </div>
              </div>
            </div>
          </div>
          <div className={styles.candidateCardList} />
          <div className={styles.candidateCardList1} />
          <div className={styles.candidateCards2}>
            <div className={styles.rectangleDiv} />
            <div className={styles.rectangleGroup}>
              <div className={styles.frameInner} />
              <img
                className={styles.maskGroupIcon2}
                loading="lazy"
                alt=""
                src="/mask-group-3@2x.png"
              />
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.systemOpsEngineerParent}>
                <div className={styles.systemOpsEngineer}>
                  System ops engineer
                </div>
                <div className={styles.abuDhabiUae}>
                  Abu Dhabi, UAE 5 years experience
                </div>
              </div>
            </div>
          </div>
          <div className={styles.candidateCards3}>
            <div className={styles.candidateCardsChild1} />
            <div className={styles.rectangleContainer}>
              <div className={styles.frameChild1} />
              <img
                className={styles.maskGroupIcon3}
                loading="lazy"
                alt=""
                src="/mask-group-4@2x.png"
              />
            </div>
            <div className={styles.candidateCardsInner1}>
              <div className={styles.rubyDeveloperGroup}>
                <div className={styles.rubyDeveloper2}>Ruby Developer</div>
                <div className={styles.redwoodCityCalifornia2}>
                  Redwood City, California 7 years experience
                </div>
              </div>
            </div>
          </div>
          <div className={styles.candidateCardList2} />
          <div className={styles.candidateCardList3} />
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.groupDiv}>
                <div className={styles.frameChild2} />
                <img
                  className={styles.image247Icon}
                  alt=""
                  src="/image-247-1@2x.png"
                />
              </div>
              <div className={styles.rectangleParent1}>
                <div className={styles.frameChild3} />
                <img
                  className={styles.pexelsPuwadonSangngern13419Icon}
                  alt=""
                  src="/pexelspuwadonsangngern13419240removebgpreview-1-1@2x.png"
                />
              </div>
            </div>
            <div className={styles.rectangleParent2}>
              <div className={styles.frameChild4} />
              <img
                className={styles.pexelsChristinaMorillo11814Icon}
                alt=""
                src="/pexelschristinamorillo1181424removebgpreview-1-1@2x.png"
              />
            </div>
            <div className={styles.frameChild5} />
            <div className={styles.frameChild6} />
          </div>
          <MarketplaceCallToAction />
        </div>
        <div className={styles.whyZwiltContainer}>
          <img
            className={styles.whyZwiltContainerChild}
            alt=""
            src="/rectangle-3206-1.svg"
          />
          <WhyZwiltContent />
        </div>
      </section>
      <img
        className={styles.homepageChild}
        loading="lazy"
        alt=""
        src="/vector-343-1.svg"
      />
      <section className={styles.fitDescription}>
        <img
          className={styles.fitDescriptionChild}
          alt=""
          src="/rectangle-3206-2.svg"
        />
        <div className={styles.frameParent1}>
          <div className={styles.frequentlyAskedQuestionsWrapper}>
            <h1 className={styles.frequentlyAskedQuestions}>
              Frequently asked questions
            </h1>
          </div>
          <img className={styles.vectorIcon} alt="" src="/vector-410.svg" />
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.frameWrapper}>
            <div className={styles.generalAnswerParent}>
              <div className={styles.generalAnswer}>
                <div className={styles.frameParent3}>
                  <div className={styles.frameParent4}>
                    <div className={styles.generalWrapper}>
                      <div className={styles.general}>General</div>
                    </div>
                    <img
                      className={styles.frameChild7}
                      alt=""
                      src="/vector-415.svg"
                    />
                  </div>
                  <div className={styles.partTimeFAQ}>
                    <div className={styles.iWantTo}>
                      I want to work part-time, is that possible
                    </div>
                  </div>
                </div>
              </div>
              <img
                className={styles.frameChild8}
                alt=""
                src="/vector-410.svg"
              />
            </div>
          </div>
          <FrameComponent2 />
          <FrameComponent1 />
          <img
            className={styles.frameChild9}
            loading="lazy"
            alt=""
            src="/vector-410.svg"
          />
        </div>
        <div className={styles.questionsList}>
          <AverageProjectsContainer />
        </div>
        <div className={styles.projectQuestions}>
          <img
            className={styles.projectQuestionsChild}
            loading="lazy"
            alt=""
            src="/vector-410.svg"
          />
        </div>
      </section>
      <section className={styles.component1083}>
        <FrameComponent />
      </section>
      <div className={styles.homepageItem} />
    </div>
  );
};

export default Homepage;
