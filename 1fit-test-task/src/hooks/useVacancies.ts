import { useQuery } from "react-query";
import { RawVacancy } from "../interfaces/Vacancy";
import { VacancyService } from "../services/vacancy.service";

export const useVacancies = () => {
  const { data, isLoading, isError } = useQuery(
    "vacanciesList",
    async () => VacancyService.getVacanciesList(),
    {
      onSuccess: ({ data }) => data,
      onError: ({ error }) => {
        alert(error.message);
      },
    }
  );

  const vacanciesList = data?.data.map((vacancy: RawVacancy) => ({
    ...vacancy,
    isActive: false,
  }));

  return { vacanciesList, isLoading, isError };
};
