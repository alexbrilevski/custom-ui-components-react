import type { FC } from "react";
import type { AffairType } from "./Affairs";
import styles from "./Affairs.module.css";

type AffairProps = {
  affair: AffairType,
  onDeleteAffair: (affair_ID: number) => void,
};

const Affair: FC<AffairProps> = (props) => {
  const onDeleteClick = () => {
    props.onDeleteAffair(props.affair._id);
  };

  const nameStyles = `${styles.item} ${styles.name}`;
  const priorityStyles = `${styles.item} ${styles.priority} ${styles[props.affair.priority]}`;
  const deleteButtonStyles = `${styles.item} ${styles.button} ${styles.deleteButton}`;

  return (
    <div className={styles.affair}>
      <div className={nameStyles}>{props.affair.name}</div>
      <div className={priorityStyles}>{props.affair.priority}</div>

      <button className={deleteButtonStyles} onClick={onDeleteClick}>X</button>
    </div>
  );
}

export default Affair;
