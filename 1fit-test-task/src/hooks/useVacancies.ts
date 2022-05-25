import { useQuery } from 'react-query'
import { VacancyService } from '../services/vacancy.service'


export const useVacancies = () => {
  
  const {data: vacancies} = useQuery(
    'vacanciesList', 
    () => VacancyService.getVacanciesList(),
    {
      onSuccess: ({ data }) => {
        return data
      },
      onError: ({ error }) => {
        alert(error.message)
      }
    }
  )

  return vacancies?.data
}