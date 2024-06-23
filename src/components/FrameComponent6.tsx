import { FunctionComponent, useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import FrameComponent8 from "./FrameComponent8";
import FrameComponent7 from "./FrameComponent7";
import styles from "./FrameComponent6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={[styles.frameWrapper, className].join(" ")}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.findDevAndItProfessionalsParent}>
                  <h3 className={styles.findDevAnd}>
                    Find Dev and IT professionals to scale your business.
                  </h3>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.frameParent1}>
                      <div className={styles.skillsParent}>
                        <div className={styles.skills}>989 Skills</div>
                        <div className={styles.profiles}>1011 Profiles</div>
                      </div>
                      <div className={styles.subCategories}>
                        45 Sub-Categories
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.itDevelopmentWrapper}>
                  <div
                    className={styles.itDevelopment}
                  >{`IT & Development`}</div>
                </div>
                <div className={styles.frameParent3}>
                  <FrameComponent8
                    pexelsChristinaMorillo118="/pexelschristinamorillo1181424removebgpreview-1@2x.png"
                    shopifyDeveloper="Shopify Developer"
                  />
                  <FrameComponent8
                    pexelsChristinaMorillo118="/pexelspuwadonsangngern13419240removebgpreview-1@2x.png"
                    shopifyDeveloper="Magento Developer"
                    propWidth="32px"
                  />
                  <div className={styles.frameParent4}>
                    <div className={styles.image244Wrapper}>
                      <img
                        className={styles.image244Icon}
                        alt=""
                        src="/image-244@2x.png"
                      />
                    </div>
                    <div className={styles.dataScientistWrapper}>
                      <a className={styles.dataScientist}>
                        <p className={styles.data}>Data</p>
                        <p className={styles.scientist}>Scientist</p>
                      </a>
                    </div>
                  </div>
                  <div className={styles.frameParent5}>
                    <div className={styles.image247Wrapper}>
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
                  <div className={styles.frameParent6}>
                    <div className={styles.frameParent7}>
                      <div className={styles.image246Wrapper}>
                        <img
                          className={styles.image246Icon}
                          loading="lazy"
                          alt=""
                          src="/image-246@2x.png"
                        />
                      </div>
                      <img
                        className={styles.frameChild}
                        loading="lazy"
                        alt=""
                        src="/frame-626623.svg"
                      />
                    </div>
                    <div className={styles.dotNetDeveloperWrapper}>
                      <div className={styles.dotNetDeveloper}>
                        Dot Net Developer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent8}>
              <div className={styles.frameWrapper2}>
                <div className={styles.frameParent9}>
                  <div className={styles.frameParent10}>
                    <div className={styles.wrapper}>
                      <DatePicker
                        value={frameDateTimePickerValue}
                        onChange={(newValue: any) => {
                          setFrameDateTimePickerValue(newValue);
                        }}
                        sx={{
                          fieldset: {
                            borderColor: "transparent",
                            borderTopWidth: 0,
                            borderRightWidth: 0,
                            borderBottomWidth: 0,
                            borderLeftWidth: 0,
                          },
                          "&:hover": {
                            fieldset: { borderColor: "transparent" },
                            ".MuiOutlinedInput-notchedOutline": {
                              borderColor: "transparent",
                            },
                          },
                          "& input::placeholder": {
                            textColor: "#202229",
                            fontSize: 24,
                          },
                          input: {
                            color: "#202229",
                            fontSize: 24,
                            textAlign: "left",
                            fontWeight: "500",
                          },
                          "& .MuiInputBase-root": {
                            height: 85.10000000000036,
                            gap: "8px",
                            flexDirection: { flexDirection: "row" },
                          },
                        }}
                        slotProps={{
                          textField: {
                            size: "medium",
                            fullWidth: true,
                            required: false,
                            autoFocus: false,
                            error: false,
                            placeholder:
                              "Explore Creative individuals with a keen eye for detail.  ",
                          },
                          openPickerIcon: {
                            component: () => (
                              <img
                                width="10.2px"
                                height="20.1px"
                                src="/vector-1.svg"
                              />
                            ),
                          },
                        }}
                      />
                    </div>
                    <div className={styles.frameWrapper3}>
                      <div className={styles.frameParent11}>
                        <div className={styles.skillsGroup}>
                          <div className={styles.skills1}>989 Skills</div>
                          <div className={styles.profiles1}>1011 Profiles</div>
                        </div>
                        <div className={styles.subCategories1}>
                          45 Sub-Categories
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent12}>
                    <div className={styles.component1063Wrapper}>
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
                    <div className={styles.vectorParent}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector-3.svg"
                      />
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="/vector-4.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent13}>
                <div className={styles.designCreativeParent}>
                  <div
                    className={styles.designCreative}
                  >{`Design & Creative`}</div>
                  <div className={styles.frameParent14}>
                    <img
                      className={styles.frameItem}
                      loading="lazy"
                      alt=""
                      src="/frame-626624-2@2x.png"
                    />
                    <div className={styles.frameParent15}>
                      <div className={styles.frameParent16}>
                        <div className={styles.image248Wrapper}>
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
                      <div className={styles.frameWrapper4}>
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
                    <div className={styles.frameParent17}>
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
                    <FrameComponent7
                      image250="/image-250@2x.png"
                      unreal="Unreal"
                      engine="Engine"
                    />
                    <FrameComponent7
                      image250="/image-251@2x.png"
                      unreal="Cinema"
                      engine="4D"
                    />
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
          <img className={styles.vectorIcon2} alt="" src="/vector-5.svg" />
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default FrameComponent6;
