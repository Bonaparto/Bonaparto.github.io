export interface Skill {
  id: number,
  name: string,
  isActive: Boolean
}

export type SkillContextType = {
  skills: Skill[];
  addSkill: (skill: Skill) => Skill[];
  removeSkill: (skillId: number) => Skill[];
}