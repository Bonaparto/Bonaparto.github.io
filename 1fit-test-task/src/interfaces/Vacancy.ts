export interface Vacancy {
  id: number;
  company: string;
  logo: string;
  new: Boolean;
  featured: Boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: Array<string>;
  tools: Array<string>;
}
