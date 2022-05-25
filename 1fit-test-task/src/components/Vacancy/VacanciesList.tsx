import React from 'react'
import VacancyItem from './VacancyItem';
import { useQuery } from 'react-query'
import { VacancyService } from '../../services/vacancy.service'
import { Vacancy } from '../../interfaces/Vacancy';
import { useState } from 'react';

export default function VacanciesList() {

  const [vacanciesList, setVacanciesList] = useState<Vacancy[]>([])

  const {} = useQuery(
    'vacanciesList', 
    () => VacancyService.getVacanciesList(),
    {
      onSuccess: ({ data }) => {
        setVacanciesList(data)
      },
      onError: ({ error }) => {
        alert(error.message)
      }
    }
  )

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