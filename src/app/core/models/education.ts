export interface Education {
  school: string;
  schoolLogo: string;
  degree: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
}

export interface EducationList {
  data: Education[]
}
