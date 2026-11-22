export type ProjectCategory = 
  | 'All' 
  | 'FinTech & Commerce' 
  | 'AI & Health' 
  | 'Enterprise & Operations' 
  | 'Smart Living & Lifestyle';

export interface ProjectArchitecture {
  id: string;
  name: string;
  title: string;
  category: ProjectCategory;
  folder: string;
  screenshots: string[];
  stateManagement: string;
  nativeBridge: string;
  tagline: string;
  valueProposition: string;
  cleanTechPills: string[];
  description: string;
  keyHighlights: string[];
  techStack: string[];
  architectureLayers: {
    presentation: string;
    domain: string;
    data: string;
    hardware: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  githubUrl: string;
  releasesUrl: string;
}

export interface OpenSourcePackage {
  id: string;
  name: string;
  runtime: 'Pure Dart + Wasm' | 'Flutter Multi-Platform';
  summary: string;
  description: string;
  pubDevUrl: string;
  githubUrl: string;
  installCommand: string;
  keyFeatures: string[];
  codeSnippet: string;
  pubScoreTarget: string;
  version: string;
}

export interface EngineeringPillar {
  id: string;
  title: string;
  summary: string;
  details: string[];
  iconName: 'Server' | 'Cpu' | 'ShieldCheck' | 'GitMerge';
  accentColor: string;
  techKeywords: string[];
}

export interface ArchitectureLayer {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  components: string[];
  resilienceMechanism: string;
  iconName: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  badgeCategory: 'AI & Data' | 'Cybersecurity' | 'Cloud & Architecture' | 'DevOps & Systems';
  credlyUrl: string;
  skills: string[];
  verificationId?: string;
}

export interface WorkExperience {
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  stack: string[];
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  description: string;
}
