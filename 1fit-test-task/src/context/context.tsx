import * as React from 'react';
import { Skill } from '../interfaces/Skill';

type Props = React.PropsWithChildren<any>;

export const SkillContext = React.createContext({
  skills: [] as Skill[] | undefined,
  updateSkills: (skill: Skill) => [] as Skill[],
});

export const SkillContextProvider = (props: Props) => {
  const [state, setState] = React.useState<Skill[]>([]);

  const updateSkills = (skill: Skill) => {
    if (skill.isActive) {
      setState((prev: Skill[]) => {
        if (prev.find((prevSkill: Skill) => prevSkill.name === skill.name) === undefined) {
          return [...prev, skill];
        } else return prev;
      });
    } else setState((prev: Skill[]) => prev.filter((prevSkill: Skill) => prevSkill.name != skill.name))
    return state;
  }

  return (<SkillContext.Provider value={{ skills: state, updateSkills }}>{props.children}</SkillContext.Provider>)
};