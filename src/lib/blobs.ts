import { getStore } from '@netlify/blobs';
import type { Project, GamesData, SkillsData, Experience } from './types';

// Import static data as fallbacks
import { projects as staticProjects } from '@/data/projects';
import { tabletopGames as staticGames } from '@/data/tabletopGames';
import { skillsData as staticSkills } from '@/data/skills';
import { experienceData as staticExperience } from '@/data/experience';

const STORE_NAME = 'portfolio-data';

// Keys for each data type
const KEYS = {
  projects: 'projects',
  games: 'games',
  skills: 'skills',
  experience: 'experience',
  resume: 'resume',
  resumeMetadata: 'resume-metadata',
} as const;

// Resume metadata type
export interface ResumeMetadata {
  filename: string;
  uploadedAt: string;
  size: number;
}

// Get the Netlify Blobs store
function getPortfolioStore() {
  return getStore(STORE_NAME);
}

// Helper to generate unique IDs
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

// ============================================
// PROJECTS
// ============================================

export async function getProjects(): Promise<Project[]> {
  try {
    const store = getPortfolioStore();
    const data = await store.get(KEYS.projects, { type: 'json' });

    if (data && Array.isArray(data) && data.length > 0) {
      return data as Project[];
    }
  } catch (error) {
    console.error('Error fetching projects from Blobs:', error);
  }

  // Fallback to static data, adding id and order
  return staticProjects.map((project, index) => ({
    ...project,
    id: generateId(),
    order: index,
  }));
}

export async function saveProjects(projects: Project[]): Promise<void> {
  const store = getPortfolioStore();
  await store.setJSON(KEYS.projects, projects);
}

// ============================================
// GAMES
// ============================================

export async function getGames(): Promise<GamesData> {
  try {
    const store = getPortfolioStore();
    const data = await store.get(KEYS.games, { type: 'json' });

    if (data && typeof data === 'object' && 'games' in data) {
      return data as GamesData;
    }
  } catch (error) {
    console.error('Error fetching games from Blobs:', error);
  }

  // Fallback to static data, adding id and order to games
  return {
    statusColor: staticGames.statusColor,
    games: staticGames.games.map((game, index) => ({
      ...game,
      id: generateId(),
      order: index,
    })),
  };
}

export async function saveGames(gamesData: GamesData): Promise<void> {
  const store = getPortfolioStore();
  await store.setJSON(KEYS.games, gamesData);
}

// ============================================
// SKILLS
// ============================================

export async function getSkills(): Promise<SkillsData> {
  try {
    const store = getPortfolioStore();
    const data = await store.get(KEYS.skills, { type: 'json' });

    if (data && typeof data === 'object' && Object.keys(data).length > 0) {
      return data as SkillsData;
    }
  } catch (error) {
    console.error('Error fetching skills from Blobs:', error);
  }

  // Fallback to static data
  return staticSkills as SkillsData;
}

export async function saveSkills(skills: SkillsData): Promise<void> {
  const store = getPortfolioStore();
  await store.setJSON(KEYS.skills, skills);
}

// ============================================
// EXPERIENCE
// ============================================

export async function getExperience(): Promise<Experience[]> {
  try {
    const store = getPortfolioStore();
    const data = await store.get(KEYS.experience, { type: 'json' });

    if (data && Array.isArray(data) && data.length > 0) {
      return data as Experience[];
    }
  } catch (error) {
    console.error('Error fetching experience from Blobs:', error);
  }

  // Fallback to static data, adding id and order
  return staticExperience.map((exp, index) => ({
    ...exp,
    id: generateId(),
    order: index,
  }));
}

export async function saveExperience(experience: Experience[]): Promise<void> {
  const store = getPortfolioStore();
  await store.setJSON(KEYS.experience, experience);
}

// ============================================
// RESUME (PDF binary storage)
// ============================================

export async function getResume(): Promise<ReadableStream | null> {
  try {
    const store = getPortfolioStore();
    const data = await store.get(KEYS.resume, { type: 'stream' });
    return data;
  } catch (error) {
    console.error('Error fetching resume from Blobs:', error);
    return null;
  }
}

export async function getResumeAsBuffer(): Promise<ArrayBuffer | null> {
  try {
    const store = getPortfolioStore();
    const data = await store.get(KEYS.resume, { type: 'arrayBuffer' });
    return data;
  } catch (error) {
    console.error('Error fetching resume from Blobs:', error);
    return null;
  }
}

export async function saveResume(
  file: ArrayBuffer,
  metadata: ResumeMetadata
): Promise<void> {
  const store = getPortfolioStore();
  // Store the binary PDF
  await store.set(KEYS.resume, file);
  // Store metadata separately as JSON
  await store.setJSON(KEYS.resumeMetadata, metadata);
}

export async function getResumeMetadata(): Promise<ResumeMetadata | null> {
  try {
    const store = getPortfolioStore();
    const data = await store.get(KEYS.resumeMetadata, { type: 'json' });
    if (data && typeof data === 'object' && 'filename' in data) {
      return data as ResumeMetadata;
    }
    return null;
  } catch (error) {
    console.error('Error fetching resume metadata from Blobs:', error);
    return null;
  }
}

export async function deleteResume(): Promise<void> {
  const store = getPortfolioStore();
  await store.delete(KEYS.resume);
  await store.delete(KEYS.resumeMetadata);
}

// ============================================
// SEED DATA (migrate static to Blobs)
// ============================================

export async function seedAllData(): Promise<{
  projects: number;
  games: number;
  skills: number;
  experience: number;
}> {
  // Get static data with IDs added
  const projects: Project[] = staticProjects.map((project, index) => ({
    ...project,
    id: generateId(),
    order: index,
  }));

  const gamesData: GamesData = {
    statusColor: staticGames.statusColor,
    games: staticGames.games.map((game, index) => ({
      ...game,
      id: generateId(),
      order: index,
    })),
  };

  const skills = staticSkills as SkillsData;

  const experience: Experience[] = staticExperience.map((exp, index) => ({
    ...exp,
    id: generateId(),
    order: index,
  }));

  // Save to Blobs
  await saveProjects(projects);
  await saveGames(gamesData);
  await saveSkills(skills);
  await saveExperience(experience);

  return {
    projects: projects.length,
    games: gamesData.games.length,
    skills: Object.keys(skills).length,
    experience: experience.length,
  };
}

// Check if data has been seeded
export async function isDataSeeded(): Promise<boolean> {
  try {
    const store = getPortfolioStore();
    const projects = await store.get(KEYS.projects, { type: 'json' });
    return projects !== null && Array.isArray(projects) && projects.length > 0;
  } catch {
    return false;
  }
}
