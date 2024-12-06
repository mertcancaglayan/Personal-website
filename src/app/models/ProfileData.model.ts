export interface ProfileData {
  profile: Profile[];
  loading: boolean;
  error: any;
}

export interface Profile {
  personalInfo: PersonalInfo;
  expertise: Expertise[];
  projects: Projects;
  id: string;
}

export interface PersonalInfo {
  about: About;
  avatar: string;
}

export interface About {
  english: English;
  turkish: Turkish;
}

export interface English {
  name: string;
  article: string;
}

export interface Turkish {
  name: string;
  article: string;
}

export interface Expertise {
  skill: string;
  logo: string;
}

export interface Projects {
  [key: string]: Project[];
}

export interface Project {
  name: string;
  repo: string;
  liveDemo?: string;
  previewImages: string[];
  expertise: Expertise[];
  projectDetails: ProjectDetails;
}

export interface ProjectDetails {
  english: string;
  turkish: string;
}
