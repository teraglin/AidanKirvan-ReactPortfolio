// Shared TypeScript interfaces for Netlify Blobs data

export interface Project {
  id: string;
  projectName: string;
  description: string;
  link: string;
  image: string;
  show: boolean;
  order: number;
}

export type GameStatus = 'developing' | 'testing' | 'published';

export interface TabletopGame {
  id: string;
  title: string;
  description: string;
  players: string;
  time: string;
  displayOn: boolean;
  titleImage: string;
  images: string[];
  status: GameStatus;
  order: number;
}

export interface StatusColors {
  developing: string;
  testing: string;
  published: string;
}

export interface GamesData {
  statusColor: StatusColors;
  games: TabletopGame[];
}

export type ColumnValue = 1 | 2 | 3;

export interface SkillCategory {
  title: string;
  skills: string[];
  cols: [ColumnValue, ColumnValue];
}

export type SkillsData = Record<string, SkillCategory>;

// Helper type for creating new items (without id and order)
export type NewProject = Omit<Project, 'id' | 'order'>;
export type NewTabletopGame = Omit<TabletopGame, 'id' | 'order'>;
