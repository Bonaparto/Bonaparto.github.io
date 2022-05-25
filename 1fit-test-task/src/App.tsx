import * as React from 'react'
import './App.scss';
import VacanciesList from './components/Vacancy/VacanciesList'
import { QueryClient, QueryClientProvider} from 'react-query'
import { Skill, SkillContextType } from './interfaces/Skill';

const queryClient = new QueryClient()

export const SkillContext = React.createContext<SkillContextType | null>(null);

// const SkillProvider: React.FC<React.ReactNode> = () => {
//   const [skills, setSkills] = React.useState<Skill[]>([]);
// }

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <div className="app">
          <header className="header"></header>
          <main className="main">
            <VacanciesList />
          </main>
        </div>  
    </QueryClientProvider>  
  );
}
