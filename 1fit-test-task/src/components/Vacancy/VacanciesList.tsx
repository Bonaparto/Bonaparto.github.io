import { useVacancies } from '../../hooks/useVacancies';
import { Vacancy } from '../../interfaces/Vacancy';
import VacancyItem from './VacancyItem';

export default function VacanciesList() {
  const { vacanciesList } = useVacancies();

  return (
    <article>
      {vacanciesList ? (
        <ul className="vacancy-list">
          {vacanciesList.map((vacancy : Vacancy) => (
            <VacancyItem vacancy={vacancy} key={vacancy.id}/>
          ))}
        </ul>
      ) : (<div>No elements found</div>)}
    </article>
  )
}