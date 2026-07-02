import { useState } from "react";
import AffairsList from "./AffairsList";
import { v1 } from "uuid";

// Types
export type AffairPriorityType = "high" | "middle" | "low";
export type AffairType = {
  _id: string,
  name: string,
  priority: AffairPriorityType,
};
export type FilterType = "all" | AffairPriorityType;

// Constants
const defaultAffairs: Array<AffairType> = [
  { _id: v1(), name: "React", priority: "high" },
  { _id: v1(), name: "Movies", priority: "low" },
  { _id: v1(), name: "Games", priority: "low" },
  { _id: v1(), name: "Work", priority: "high" },
  { _id: v1(), name: "HTML & CSS", priority: "middle" },
];

// Helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
  return filter === "all" ? affairs : affairs.filter(a => a.priority === filter);
};
export const deleteAffair = (affairs: Array<AffairType>, _id: string): Array<AffairType> => {
  return affairs.filter(a => a._id !== _id);
};

export const Affairs = () => {
  const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredAffairs = filterAffairs(affairs, filter);
  const onDeleteAffair = (_id: string) => setAffairs(deleteAffair(affairs, _id));

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
