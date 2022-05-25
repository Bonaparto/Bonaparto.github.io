import * as React from 'react';
import { SkillContextType, Skill } from '../interfaces/Skill';

export const SkillContext = React.createContext<SkillContextType | null>(null);

const SkillProvider: React.FC<React.ReactNode> = () => {
  const [skills, setSkills] = React.useState<Skill[]>([]);
  const addSkill = (Skill: Skill) => {
    setSkills([...skills, Skill]);
    return skills
  };
  const removeSkill = (id: number) => {
    skills.filter((Skill: Skill) => Skill.id !== id);
    return skills
  };
  return <SkillContext.Provider value={{ skills, addSkill, removeSkill }}></SkillContext.Provider>;
};

export default SkillProvider;