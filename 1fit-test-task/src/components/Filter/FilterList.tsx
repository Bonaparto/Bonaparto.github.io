import { useContext } from "react";
import { SkillContext } from "../../context/context";
import { Skill } from "../../interfaces/Skill";

export default function FilterList() {
  const state = useContext(SkillContext);

  return (<div>{state.skills?.map((skill: Skill) => <div>{skill.name}</div>)}</div>)
}