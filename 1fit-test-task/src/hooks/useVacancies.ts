import { useQuery } from 'react-query'
import { VacancyService } from '../services/vacancy.service'

export const useVacancies = () => {
  
  const {data: vacancies, isLoading} = useQuery(
    'vacanciesList', 
    async () => VacancyService.getVacanciesList(),
    {
      onSuccess: ({ data }) => data,
      onError: ({ error }) => {
        alert(error.message);
      }
    }
  )

  return { vacanciesList: vacancies?.data, isLoading};
}