export interface Experience {
  dateStart: string;
  dateEnd: string;
  url: string;
  title: string;
  companyName: string;
  content: string[];
  listOfLanguage: string[];
}

export interface CardProps {
  experiences: Experience;
}
