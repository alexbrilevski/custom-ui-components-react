import type { FC } from "react";

import styles from "./Message.module.css";

type MessageProps = {
  messageData: {
    avatar: string,
    name: string,
    text: string,
    time: string,
  }
};

const Message: FC<MessageProps> = (props) => {
  const { name, text, avatar, time } = props.messageData;
  const isOutgoing = name === "Joel";

  const messageClasses =
    `${styles["message"]} ${isOutgoing ? styles["outgoing"] : styles["incoming"]}`;

  return (
    <div className={messageClasses}>
      <div className={styles.content}>
        <p className={styles.name}>{name}</p>
        <p className={styles.text}>{text}</p>
        <p className={styles.time}>{time}</p>
      </div>

      <div className={styles.angle} />

      <img className={styles.avatar} src={avatar} alt={name} />
    </div>
  );
};

export default Message;
