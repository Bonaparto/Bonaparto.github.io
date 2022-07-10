import { useContext } from "react";
import Filter from "./Filter";
import { SkillContext } from "../../context/context";
import { Skill } from "../../interfaces/Skill";

export default function FilterList() {
  const filterState = useContext(SkillContext);
  const clearFilters = () => filterState.clearSkills();

  return (
    <>
      {filterState.skills?.length !== 0 && (
        <div className="filters">
          <ul className="filters__list">
            {filterState.skills?.map((skill: Skill) => (
              <Filter key={skill.name} skill={skill} />
            ))}
          </ul>
          <button className="filters__clear" onClick={clearFilters}>Clear</button>
        </div>
      )}
    </>
  );
}
