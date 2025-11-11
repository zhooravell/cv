export interface Experience {
  company: string;
  companyLogo: string;
  position: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
  tags: string[];
}

export interface ExperienceList {
  data: Experience[]
}
