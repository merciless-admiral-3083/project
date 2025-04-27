export interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'web' | 'app' ;
  link: string;
}

export interface SkillData {
  name: string;
  proficiency: number;
}