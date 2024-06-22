import { FunctionComponent } from "react";
import FrameComponent6 from "./FrameComponent6";
import FrameComponent5 from "./FrameComponent5";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.yourOneStopMarketplaceForWrapper}>
        <h1 className={styles.yourOneStopMarketplace}>
          Your one-stop marketplace for finding the talent your business needs.
        </h1>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-3206.svg" />
        <img className={styles.profileIcon} alt="" src="/profile.svg" />
        <img className={styles.downIcon} alt="" src="/profile.svg" />
        <img className={styles.subIconPair} alt="" src="/vector-2.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector-2.svg" />
        <img className={styles.iconPair} alt="" src="/vector-4.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector-4.svg" />
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.businessItemsParent}>
          <div className={styles.businessItems}>
            <h3 className={styles.findDevAnd}>
              Find Dev and IT professionals to scale your business.
            </h3>
            <div className={styles.businessItemsInner}>
              <div className={styles.frameContainer}>
                <div className={styles.skillsParent}>
                  <div className={styles.skills}>989 Skills</div>
                  <div className={styles.profiles}>1011 Profiles</div>
                </div>
                <div className={styles.subCategories}>45 Sub-Categories</div>
              </div>
            </div>
          </div>
          <div className={styles.businessItems1}>
            <h3
              className={styles.exploreCreativeIndividuals}
            >{`Explore Creative individuals with a keen eye for detail.  `}</h3>
            <div className={styles.businessItemsChild}>
              <div className={styles.featureGridParent}>
                <div className={styles.featureGrid}>
                  <div className={styles.skills1}>989 Skills</div>
                  <div className={styles.profiles1}>1011 Profiles</div>
                </div>
                <div className={styles.subCategories1}>45 Sub-Categories</div>
              </div>
            </div>
          </div>
          <div className={styles.component1063}>
            <img
              className={styles.component1063Child}
              loading="lazy"
              alt=""
              src="/frame-626624-1.svg"
            />
            <div className={styles.exploreMoreWrapper}>
              <h3 className={styles.exploreMore}>Explore More</h3>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameDiv}>
            <div className={styles.jasonTestimonialParent}>
              <div className={styles.jasonTestimonial}>
                <div className={styles.itDevelopmentWrapper}>
                  <div
                    className={styles.itDevelopment}
                  >{`IT & Development`}</div>
                </div>
                <div className={styles.frameParent1}>
                  <FrameComponent6
                    pexelsChristinaMorillo118="/pexelschristinamorillo1181424removebgpreview-1@2x.png"
                    shopifyDeveloper="Shopify Developer"
                  />
                  <FrameComponent6
                    pexelsChristinaMorillo118="/pexelspuwadonsangngern13419240removebgpreview-1@2x.png"
                    shopifyDeveloper="Magento Developer"
                    propWidth="32px"
                  />
                  <div className={styles.platformLabelParent}>
                    <div className={styles.platformLabel}>
                      <img
                        className={styles.image244Icon}
                        alt=""
                        src="/image-244@2x.png"
                      />
                    </div>
                    <div className={styles.dataScientistWrapper}>
                      <div className={styles.dataScientist}>
                        <p className={styles.data}>Data</p>
                        <p className={styles.scientist}>Scientist</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.purchaseParent}>
                    <div className={styles.purchase}>
                      <img
                        className={styles.image247Icon}
                        alt=""
                        src="/image-247@2x.png"
                      />
                    </div>
                    <div className={styles.webflowDeveloperWrapper}>
                      <div className={styles.webflowDeveloper}>
                        Webflow Developer
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent2}>
                    <div className={styles.imageParent}>
                      <div className={styles.image}>
                        <img
                          className={styles.image246Icon}
                          loading="lazy"
                          alt=""
                          src="/image-246@2x.png"
                        />
                      </div>
                      <img
                        className={styles.someDataCard}
                        loading="lazy"
                        alt=""
                        src="/frame-626623.svg"
                      />
                    </div>
                    <div className={styles.devCategory}>
                      <div className={styles.dotNetDeveloper}>
                        Dot Net Developer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.jasonTestimonial1}>
                <div
                  className={styles.designCreative}
                >{`Design & Creative`}</div>
                <div className={styles.otherlinksParent}>
                  <img
                    className={styles.otherlinksIcon}
                    loading="lazy"
                    alt=""
                    src="/frame-626624-2@2x.png"
                  />
                  <div className={styles.frameParent3}>
                    <div className={styles.dashboardchartcontainerParent}>
                      <div className={styles.dashboardchartcontainer}>
                        <img
                          className={styles.image248Icon}
                          alt=""
                          src="/image-248@2x.png"
                        />
                      </div>
                      <div className={styles.image249Wrapper}>
                        <img
                          className={styles.image249Icon}
                          alt=""
                          src="/image-249@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.frameWrapper1}>
                      <div className={styles.uxDesignerParent}>
                        <div className={styles.uxDesigner}>
                          <p className={styles.ux}>UX</p>
                          <p className={styles.designer}>Designer</p>
                        </div>
                        <div className={styles.graphicsDesigner}>
                          <p className={styles.graphics}>Graphics</p>
                          <p className={styles.designer1}>Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent4}>
                    <div className={styles.image249Container}>
                      <img
                        className={styles.image249Icon1}
                        alt=""
                        src="/image-249-1@2x.png"
                      />
                    </div>
                    <div className={styles.illustrationArtistWrapper}>
                      <div className={styles.illustrationArtist}>
                        <p className={styles.illustration}>Illustration</p>
                        <p className={styles.artist}>Artist</p>
                      </div>
                    </div>
                  </div>
                  <FrameComponent5
                    image250="/image-250@2x.png"
                    unreal="Unreal"
                    engine="Engine"
                  />
                  <FrameComponent5
                    image250="/image-251@2x.png"
                    unreal="Cinema"
                    engine="4D"
                  />
                </div>
              </div>
            </div>
            <h3 className={styles.moreToExploreContainer}>
              <b>30 more</b>
              <span className={styles.span}>{` `}</span>
              <span>to explore</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
