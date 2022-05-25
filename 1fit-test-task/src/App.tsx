import React from 'react';
import './App.scss';
import VacanciesList from './components/Vacancy/VacanciesList'
import { QueryClient, QueryClientProvider} from 'react-query'


const queryClient = new QueryClient()

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
