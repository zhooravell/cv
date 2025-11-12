export interface Experience {
  id: number;
  company: string;
  companyLogo: string;
  position: string;
  startDate: string;
  endDate: string | null;
  description: string;
  tags: string[];
}

export interface ExperienceList {
  data: Experience[]
}
