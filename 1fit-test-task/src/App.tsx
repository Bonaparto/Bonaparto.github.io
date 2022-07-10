import { QueryClient, QueryClientProvider } from "react-query";
import { SkillContextProvider } from "./context/context";
import VacanciesList from "./components/Vacancy/VacanciesList";
import FilterList from "./components/Filter/FilterList";
import { Skill } from "./interfaces/Skill";
import "./App.scss";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SkillContextProvider value={[] as Skill[]}>
        <div className="app">
          <header className="header" />
          <main className="main">
            <FilterList />
            <VacanciesList />
          </main>
        </div>
      </SkillContextProvider>
    </QueryClientProvider>
  );
}
