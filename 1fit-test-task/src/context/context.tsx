import * as React from "react";
import { Skill } from "../interfaces/Skill";

type Props = React.PropsWithChildren<any>;

export const SkillContext = React.createContext({
  skills: [] as Skill[] | undefined,
  updateSkills: (skill: Skill) => [] as Skill[],
  clearSkills: () => [] as Skill[],
});

export const SkillContextProvider = (props: Props) => {
  const [state, setState] = React.useState<Skill[]>([]);

  const updateSkills = (skill: Skill) => {
    if (skill.isActive) {
      setState((prev: Skill[]) => {
        if (!isSkillInList(prev, skill)) {
          return [...prev, skill];
        } else return prev;
      });
    } else removeSkill(skill);
    return state;
  };

  const clearSkills = () => {
    state.forEach((skill: Skill) => (skill.isActive = false));
    setState([]);
    return state;
  };

  const isSkillInList = (skills: Skill[], skill: Skill) =>
    skills.find((prevSkill: Skill) => prevSkill.name === skill.name);

  const removeSkill = (skill: Skill) => {
    setState((prev: Skill[]) =>
      prev.filter((prevSkill: Skill) => prevSkill.name !== skill.name)
    );
  };

  return (
    <SkillContext.Provider value={{ skills: state, updateSkills, clearSkills }}>
      {props.children}
    </SkillContext.Provider>
  );
};
