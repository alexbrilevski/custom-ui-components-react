import { useState } from "react";
import AffairsList from "./AffairsList";

// Types
export type AffairPriorityType = "high" | "middle" | "low";
export type AffairType = {
  _id: number,
  name: string,
  priority: AffairPriorityType,
};
export type FilterType = "all" | AffairPriorityType;

// Constants
const defaultAffairs: Array<AffairType> = [
  { _id: 1, name: "React", priority: "high" },
  { _id: 2, name: "Movies", priority: "low" },
  { _id: 3, name: "Games", priority: "low" },
  { _id: 4, name: "Work", priority: "high" },
  { _id: 5, name: "HTML & CSS", priority: "middle" },
];

// Helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
  return filter === "all" ? affairs : affairs.filter(a => a.priority === filter);
};
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
  return affairs.filter(a => a._id !== _id);
};

export const Affairs = () => {
  const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredAffairs = filterAffairs(affairs, filter);
  const onDeleteAffair = (_id: number) => setAffairs(deleteAffair(affairs, _id));

  return (
    <div>
      <AffairsList
        data={filteredAffairs}
        filter={filter}
        setFilter={setFilter}
        onDeleteAffair={onDeleteAffair}
      />
    </div>
  );
};

export default Affairs;
