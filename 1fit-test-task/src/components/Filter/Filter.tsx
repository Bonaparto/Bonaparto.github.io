import { useContext } from "react";
import { SkillContext } from "../../context/context";
import { Skill } from "../../interfaces/Skill";
import removeIcon from "../../assets/images/ui/remove.svg";

type Props = {
  skill: Skill;
};

export default function Filter({ skill }: Props) {
  const filterState = useContext(SkillContext);
  const removeFilter = () => {
    skill.isActive = false;
    filterState.updateSkills(skill);
  }

  return (
    <li className="filter__item">
      <h4 className="filter__item-name">{skill.name}</h4>
      <button className="filter__item-remove" onClick={removeFilter}>
        <img src={removeIcon} alt="Кнопка удаления фильтра" />
      </button>
    </li>
  );
}
