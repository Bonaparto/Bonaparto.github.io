import axios from "axios";
import { RawVacancy } from "../interfaces/Vacancy";

const baseURL = "http://localhost:3004";
axios.defaults.baseURL = baseURL;

export const VacancyService = {
  getVacanciesList() {
    return axios.get<RawVacancy[]>("/vacancies");
  },
};
