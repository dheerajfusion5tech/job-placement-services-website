export type JobType = "Full-time" | "Contract" | "Part-time";
export type ExperienceLevel = "Entry" | "Mid" | "Senior" | "Lead";

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: JobType;
  experience: ExperienceLevel;
  salaryMin: number;
  salaryMax: number;
  remote: boolean;
  tags: string[];
  description: string;
  postedAt: string;
}
