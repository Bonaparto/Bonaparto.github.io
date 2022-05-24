import React from 'react';
import './App.css';
import { QueryClient, useQuery, QueryClientProvider} from 'react-query'
import { VacancyService } from './services/vacancy.service';
import { Vacancy } from './interfaces/Vacancy';


const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Example />
      </div>  
    </QueryClientProvider>  
  );
}

function Example() {
  const { isLoading, error, data: response } = useQuery('vacanciesList', () => VacancyService.getVacanciesList())

  console.log('data', response);

  if (isLoading) return <div>'Loading...'</div>

  if (error) return <div>'An error has occurred: '</div>

  return (
    <div>
      {response?.data.length ? (
        <div>
          {response.data.map((vacancy : Vacancy) => (
            <div key={vacancy.id}>
              <h1>{vacancy.company}</h1>
              <p>{vacancy.position}</p>
              <strong>👀 {vacancy.role}</strong>{' '}
              <strong>✨ {vacancy.location}</strong>{' '}
              <strong>🍴 {vacancy.contract}</strong>
            </div>
          ))}
        </div>
      ) : (<div>No elements found</div>)}
    </div>
  )
}
