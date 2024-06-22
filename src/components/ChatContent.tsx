import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ChatContent.module.css";

export type ChatContentType = {
  className?: string;
  group626450?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
};

const ChatContent: FunctionComponent<ChatContentType> = ({
  className = "",
  group626450,
  propPadding,
  propPadding1,
}) => {
  const chatContentStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const senderInfoStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div
      className={[styles.chatContent, className].join(" ")}
      style={chatContentStyle}
    >
      <div className={styles.frameParent}>
        <img className={styles.frameChild} alt="" src={group626450} />
        <div className={styles.senderInfo} style={senderInfoStyle}>
          <div className={styles.senderName}>
            <div className={styles.estherHoward}>Esther Howard</div>
            <div className={styles.pm}>12:00pm</div>
          </div>
          <div className={styles.hiLuisI}>
            Hi Luis I am currently working as an expert at alfizo org
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatContent;
