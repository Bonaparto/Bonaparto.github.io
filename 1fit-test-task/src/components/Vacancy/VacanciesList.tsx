import VacancyItem from './VacancyItem';
import { Vacancy } from '../../interfaces/Vacancy';
import { useEffect, useState } from 'react';
import { useVacancies } from '../../hooks/useVacancies';

export default function VacanciesList() {

  const { vacancies, isLoading } = useVacancies() 

  const [vacanciesList, setVacanciesList] = useState<Vacancy[] | undefined>([])

  useEffect(() => {
    setVacanciesList(vacancies?.data)
  }, [isLoading])
  
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