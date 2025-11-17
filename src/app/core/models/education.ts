export interface Education {
  id: number;
  school: string;
  city: string;
  schoolLogo: string;
  degree: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
}
