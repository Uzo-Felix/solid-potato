import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent10.module.css";

export type FrameComponent10Type = {
  className?: string;
};

const FrameComponent10: FunctionComponent<FrameComponent10Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.homepageInner, className].join(" ")}>
      <header className={styles.frameParent}>
        <div className={styles.logoWrapper}>
          <img
            className={styles.logoIcon}
            loading="lazy"
            alt=""
            src="/logo.svg"
          />
        </div>
        <nav className={styles.frameWrapper}>
          <nav className={styles.findWorkParent}>
            <div className={styles.findWork}>Find Work</div>
            <div className={styles.findTalent}>Find Talent</div>
            <div className={styles.articles}>Articles</div>
            <div className={styles.aboutUs}>About Us</div>
            <div className={styles.contactUs}>Contact Us</div>
          </nav>
        </nav>
        <div className={styles.frameGroup}>
          <div className={styles.logInWrapper}>
            <div className={styles.logIn}>Log In</div>
          </div>
          <Button
            className={styles.frameChild}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#202229",
              fontSize: "14",
              background: "#fff",
              borderRadius: "16px",
              "&:hover": { background: "#fff" },
              height: 43,
            }}
          >
            Join Now
          </Button>
        </div>
      </header>
    </section>
  );
};

export default FrameComponent10;
