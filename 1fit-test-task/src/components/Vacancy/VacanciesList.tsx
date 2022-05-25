import VacancyItem from './VacancyItem';
import { Vacancy } from '../../interfaces/Vacancy';
import { useState } from 'react';
import { useVacancies } from '../../hooks/useVacancies';

export default function VacanciesList() {

  const vacancies: Vacancy[] | undefined = useVacancies()

  const [vacanciesList, setVacanciesList] = useState<Vacancy[] | undefined>(vacancies)

  return (
    <article>
      {vacanciesList?.length ? (
        <ul className="vacancy-list">
          {vacanciesList.map((vacancy : Vacancy) => (
            <VacancyItem vacancy={vacancy} key={vacancy.id}/>
          ))}
        </ul>
      ) : (<div>No elements found</div>)}
    </article>
  )
}