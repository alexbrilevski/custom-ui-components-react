import type { FC } from "react";
import Affair from "./Affair";
import type { AffairType, FilterType } from "./Affairs";
import styles from "./Affairs.module.css";

type AffairsListsProps = {
  data: Array<AffairType>,
  filter: FilterType,
  setFilter: (filterValue: FilterType) => void,
  onDeleteAffair: (affair_ID: string) => void,
};

export const AffairsList: FC<AffairsListsProps> = (props) => {
  const mappedAffairs = props.data.map((a: AffairType) => (
    <li key={a._id}>
      <Affair
        affair={a}
        onDeleteAffair={props.onDeleteAffair}
      />
    </li>
  ));

  const setAll = () => { props.setFilter("all") };
  const setHigh = () => { props.setFilter("high") };
  const setMiddle = () => { props.setFilter("middle") };
  const setLow = () => { props.setFilter("low") };

  const getFilterStyles = (filter: FilterType) => {
    return props.filter === filter ?
      `${styles.button} ${styles.filterButton} ${styles.active}` :
      `${styles.button} ${styles.filterButton}`;
  };

  return (
    <div>
      <ul className={styles.affairsList}>
        {mappedAffairs}
      </ul>

      <button onClick={setAll} className={getFilterStyles("all")}>All</button>
      <button onClick={setHigh} className={getFilterStyles("high")}>High</button>
      <button onClick={setMiddle} className={getFilterStyles("middle")}>Middle</button>
      <button onClick={setLow} className={getFilterStyles("low")}>Low</button>
    </div>
  );
};

export default AffairsList;
