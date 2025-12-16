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
  loginAttempts: 'login-attempts',
} as const;

// Resume metadata type
export interface ResumeMetadata {
  filename: string;
  uploadedAt: string;
  size: number;
}

// Login attempt tracking type
export interface LoginAttemptRecord {
  attempts: number;
  lastAttempt: string;
  lockedUntil: string | null;
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
// LOGIN ATTEMPT TRACKING (Rate limiting)
// ============================================

const MAX_LOGIN_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 15 * 60 * 1000; // 15 minutes

function getLoginAttemptKey(identifier: string): string {
  return `${KEYS.loginAttempts}:${identifier}`;
}

export async function getLoginAttempts(
  identifier: string
): Promise<LoginAttemptRecord | null> {
  try {
    const store = getPortfolioStore();
    const key = getLoginAttemptKey(identifier);
    const data = await store.get(key, { type: 'json' });

    if (data && typeof data === 'object' && 'attempts' in data) {
      return data as LoginAttemptRecord;
    }
    return null;
  } catch (error) {
    console.error('Error fetching login attempts from Blobs:', error);
    return null;
  }
}

export async function isLockedOut(
  identifier: string
): Promise<{ locked: boolean; remainingMs?: number }> {
  const record = await getLoginAttempts(identifier);

  if (!record || !record.lockedUntil) {
    return { locked: false };
  }

  const lockedUntilTime = new Date(record.lockedUntil).getTime();
  const now = Date.now();

  if (now < lockedUntilTime) {
    return {
      locked: true,
      remainingMs: lockedUntilTime - now,
    };
  }

  // Lockout has expired, clear the record
  await clearLoginAttempts(identifier);
  return { locked: false };
}

export async function recordFailedLogin(
  identifier: string
): Promise<{ locked: boolean; attemptsRemaining: number }> {
  const store = getPortfolioStore();
  const key = getLoginAttemptKey(identifier);
  const existing = await getLoginAttempts(identifier);

  const now = new Date().toISOString();
  const attempts = (existing?.attempts || 0) + 1;

  let lockedUntil: string | null = null;
  if (attempts >= MAX_LOGIN_ATTEMPTS) {
    lockedUntil = new Date(Date.now() + LOCKOUT_DURATION_MS).toISOString();
  }

  const record: LoginAttemptRecord = {
    attempts,
    lastAttempt: now,
    lockedUntil,
  };

  await store.setJSON(key, record);

  return {
    locked: !!lockedUntil,
    attemptsRemaining: Math.max(0, MAX_LOGIN_ATTEMPTS - attempts),
  };
}

export async function clearLoginAttempts(identifier: string): Promise<void> {
  try {
    const store = getPortfolioStore();
    const key = getLoginAttemptKey(identifier);
    await store.delete(key);
  } catch (error) {
    console.error('Error clearing login attempts from Blobs:', error);
  }
}

export { MAX_LOGIN_ATTEMPTS, LOCKOUT_DURATION_MS };

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
