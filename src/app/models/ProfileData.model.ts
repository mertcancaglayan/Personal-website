export type Root = ProfileData[];

export interface ProfileData {
  profile: Profile;
  expertise: Expertise[];
  projects: Projects;
  id: string;
}

export interface Profile {
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
  angularProjects: Project[];
  reactProjects: Project[];
  javascriptProjects: Project[];
  componentProjects: Project[];
}

export interface Project {
  name: string;
  repo: string;
  liveDemo?: string;
  previewImages: string[];
  expertise: Expertise[];
}
