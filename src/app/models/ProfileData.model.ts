export type Root = ProfileData[];

export interface ProfileData {
  profile: Profile;
  expertise: Expertise[];
  projects: any[];
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
