import axios from 'axios'
import { Vacancy } from '../interfaces/Vacancy'

const baseURL = 'http://localhost:3004' 
axios.defaults.baseURL = baseURL


export const VacancyService = {
  async getVacanciesList() {
    return axios.get<Vacancy[]>('/vacancies')
  }
}