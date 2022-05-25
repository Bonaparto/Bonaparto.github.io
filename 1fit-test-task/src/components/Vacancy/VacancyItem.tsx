import { Vacancy } from "../../interfaces/Vacancy";
import { Skill } from "../../interfaces/Skill";
import { useState } from "react";

export default function VacancyItem(props: {vacancy : Vacancy}) {
  const vacancy: Vacancy = props.vacancy
  let skillNames: string[] = [
    vacancy.role, 
    vacancy.level,
    ...vacancy.languages,
    ...vacancy.tools
  ]

  let [skillList, setSkillList] = useState(skillNames.map((skillName, index) => ({
    id: index,
    name: skillName,
    isActive: false
  })))

  function toggleState(skillId: number) {
    setSkillList(skillList.map(skill => {
      if (skill.id === skillId) {
        skill.isActive = !skill.isActive
      }
      return skill
    }))
  }

  return (
    <li className="vacancy-item">
      <div className="vacancy-item__logo-and-info">
        <img 
          src={require(`../../assets/images/company-logos${vacancy.logo}`)} 
          alt={`Логотип компании ${vacancy.company}`} 
          height="88"
          width="88"
        />
        <div className="vacancy-item__info">
          <div className="vacancy-item__labels">
            <h3 className="vacancy-item__company-name">{vacancy.company}</h3>
            {vacancy.new && <div className="vacancy-item__label" style={{backgroundColor: "#5CA5A5"}}>NEW!</div>}
            {vacancy.featured && <div className="vacancy-item__label" style={{backgroundColor: "#2B3939"}}>FEATURED</div>}
          </div>
          <h2 
            className="vacancy-item__vacancy-name" 
            style={{ textShadow: vacancy.id === 1 ? "4px 4px rgba(0, 0, 0, 0.25)" : "none"}}>{vacancy.position}</h2>
          <div className="vacancy-item__add-info">
            <h4 className="vacancy-item__add-info-line">{vacancy.postedAt}</h4>
            <h4 className="vacancy-item__add-info-line">{vacancy.contract}</h4>
            <h4 className="vacancy-item__add-info-line">{vacancy.location}</h4>
          </div>
        </div>
      </div>
      <ul className="vacancy-item__skills-list">
        {skillList.map((skill: Skill) => (
          <li className="vacancy-item__skill-item" key={skill.id}>
            <h4 
              className={`vacancy-item__skill-name ${skill.isActive ? "btn-active" : ""}`} 
              onClick={() => toggleState(skill.id)}
            >{skill.name}</h4>
          </li>
        ))}  
      </ul>
    </li>
  )
}