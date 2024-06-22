import { FunctionComponent } from "react";
import styles from "./MarketplaceCallToAction.module.css";

export type MarketplaceCallToActionType = {
  className?: string;
};

const MarketplaceCallToAction: FunctionComponent<
  MarketplaceCallToActionType
> = ({ className = "" }) => {
  return (
    <div className={[styles.marketplaceCallToAction, className].join(" ")}>
      <div className={styles.component1062}>
        <img
          className={styles.thirdEmptyButton}
          alt=""
          src="/frame-626624-3.svg"
        />
        <div className={styles.joinNowWrapper}>
          <div className={styles.joinNow}>Join Now</div>
        </div>
      </div>
      <div className={styles.button}>
        <img
          className={styles.secondFooterShape}
          alt=""
          src="/second-footer-shape.svg"
        />
      </div>
      <div className={styles.exploreTheVast}>
        Explore the vast Zwilt marketplace to find the candidate that meets your
        needs.
      </div>
      <h1 className={styles.findYourNext}>Find your next star performer.</h1>
    </div>
  );
};

export default MarketplaceCallToAction;
