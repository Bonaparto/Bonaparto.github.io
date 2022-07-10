import { useVacancies } from "../../hooks/useVacancies";
import { Vacancy } from "../../interfaces/Vacancy";
import VacancyItem from "./VacancyItem";

export default function VacanciesList() {
  const { vacanciesList, isLoading, isError } = useVacancies();
  return (
    <article>
      {isLoading ? (
        <div className="loader">
          <div></div>
          <div></div>
        </div>
      ) : (
        <>
          {isError ? (
            <div>An error occured. Please, try again.</div>
          ) : (
            <>
              {vacanciesList ? (
                <ul className="vacancy-list">
                  {vacanciesList.map((vacancy: Vacancy) => (
                    <VacancyItem vacancy={vacancy} key={vacancy.id} />
                  ))}
                </ul>
              ) : (
                <h2>No vacancies found</h2>
              )}
            </>
          )}
        </>
      )}
    </article>
  );
}
