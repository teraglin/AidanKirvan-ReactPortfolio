'use server';

import {
  getProjects,
  saveProjects,
  getGames,
  saveGames,
  getSkills,
  saveSkills,
  getExperience,
  saveExperience,
  seedAllData,
  isDataSeeded,
  generateId,
} from '@/lib/blobs';
import type {
  Project,
  TabletopGame,
  GamesData,
  SkillsData,
  SkillCategory,
  StatusColors,
  Experience,
  NewProject,
  NewTabletopGame,
  NewExperience,
} from '@/lib/types';
import { revalidatePath } from 'next/cache';

// ============================================
// DATA FETCHING (read operations)
// ============================================

export async function fetchProjects(): Promise<Project[]> {
  return getProjects();
}

export async function fetchGames(): Promise<GamesData> {
  return getGames();
}

export async function fetchSkills(): Promise<SkillsData> {
  return getSkills();
}

export async function fetchExperience(): Promise<Experience[]> {
  return getExperience();
}

export async function checkDataSeeded(): Promise<boolean> {
  return isDataSeeded();
}

// ============================================
// PROJECTS CRUD
// ============================================

export async function addProject(
  projectData: NewProject
): Promise<{ success: boolean; error?: string }> {
  try {
    const projects = await getProjects();
    const maxOrder = Math.max(...projects.map((p) => p.order), -1);

    const newProject: Project = {
      ...projectData,
      id: generateId(),
      order: maxOrder + 1,
    };

    projects.push(newProject);
    await saveProjects(projects);
    revalidatePath('/');
    revalidatePath('/admin/projects');
    return { success: true };
  } catch (error) {
    console.error('Error adding project:', error);
    return { success: false, error: 'Failed to add project' };
  }
}

export async function updateProject(
  id: string,
  updates: Partial<Omit<Project, 'id'>>
): Promise<{ success: boolean; error?: string }> {
  try {
    const projects = await getProjects();
    const index = projects.findIndex((p) => p.id === id);

    if (index === -1) {
      return { success: false, error: 'Project not found' };
    }

    projects[index] = { ...projects[index], ...updates };
    await saveProjects(projects);
    revalidatePath('/');
    revalidatePath('/admin/projects');
    return { success: true };
  } catch (error) {
    console.error('Error updating project:', error);
    return { success: false, error: 'Failed to update project' };
  }
}

export async function deleteProject(
  id: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const projects = await getProjects();
    const filtered = projects.filter((p) => p.id !== id);

    if (filtered.length === projects.length) {
      return { success: false, error: 'Project not found' };
    }

    // Re-order remaining projects
    const reordered = filtered.map((p, index) => ({ ...p, order: index }));
    await saveProjects(reordered);
    revalidatePath('/');
    revalidatePath('/admin/projects');
    return { success: true };
  } catch (error) {
    console.error('Error deleting project:', error);
    return { success: false, error: 'Failed to delete project' };
  }
}

export async function reorderProjects(
  orderedIds: string[]
): Promise<{ success: boolean; error?: string }> {
  try {
    const projects = await getProjects();
    const reordered = orderedIds
      .map((id, index) => {
        const project = projects.find((p) => p.id === id);
        if (project) {
          return { ...project, order: index };
        }
        return null;
      })
      .filter((p): p is Project => p !== null);

    await saveProjects(reordered);
    revalidatePath('/');
    revalidatePath('/admin/projects');
    return { success: true };
  } catch (error) {
    console.error('Error reordering projects:', error);
    return { success: false, error: 'Failed to reorder projects' };
  }
}

// ============================================
// GAMES CRUD
// ============================================

export async function addGame(
  gameData: NewTabletopGame
): Promise<{ success: boolean; error?: string }> {
  try {
    const gamesData = await getGames();
    const maxOrder = Math.max(...gamesData.games.map((g) => g.order), -1);

    const newGame: TabletopGame = {
      ...gameData,
      id: generateId(),
      order: maxOrder + 1,
    };

    gamesData.games.push(newGame);
    await saveGames(gamesData);
    revalidatePath('/tabletop');
    revalidatePath('/admin/games');
    return { success: true };
  } catch (error) {
    console.error('Error adding game:', error);
    return { success: false, error: 'Failed to add game' };
  }
}

export async function updateGame(
  id: string,
  updates: Partial<Omit<TabletopGame, 'id'>>
): Promise<{ success: boolean; error?: string }> {
  try {
    const gamesData = await getGames();
    const index = gamesData.games.findIndex((g) => g.id === id);

    if (index === -1) {
      return { success: false, error: 'Game not found' };
    }

    gamesData.games[index] = { ...gamesData.games[index], ...updates };
    await saveGames(gamesData);
    revalidatePath('/tabletop');
    revalidatePath('/admin/games');
    return { success: true };
  } catch (error) {
    console.error('Error updating game:', error);
    return { success: false, error: 'Failed to update game' };
  }
}

export async function deleteGame(
  id: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const gamesData = await getGames();
    const filtered = gamesData.games.filter((g) => g.id !== id);

    if (filtered.length === gamesData.games.length) {
      return { success: false, error: 'Game not found' };
    }

    // Re-order remaining games
    gamesData.games = filtered.map((g, index) => ({ ...g, order: index }));
    await saveGames(gamesData);
    revalidatePath('/tabletop');
    revalidatePath('/admin/games');
    return { success: true };
  } catch (error) {
    console.error('Error deleting game:', error);
    return { success: false, error: 'Failed to delete game' };
  }
}

export async function reorderGames(
  orderedIds: string[]
): Promise<{ success: boolean; error?: string }> {
  try {
    const gamesData = await getGames();
    const reordered = orderedIds
      .map((id, index) => {
        const game = gamesData.games.find((g) => g.id === id);
        if (game) {
          return { ...game, order: index };
        }
        return null;
      })
      .filter((g): g is TabletopGame => g !== null);

    gamesData.games = reordered;
    await saveGames(gamesData);
    revalidatePath('/tabletop');
    revalidatePath('/admin/games');
    return { success: true };
  } catch (error) {
    console.error('Error reordering games:', error);
    return { success: false, error: 'Failed to reorder games' };
  }
}

// ============================================
// STATUS COLORS
// ============================================

export async function updateStatusColors(
  colors: StatusColors
): Promise<{ success: boolean; error?: string }> {
  try {
    const gamesData = await getGames();
    gamesData.statusColor = colors;
    await saveGames(gamesData);
    revalidatePath('/tabletop');
    revalidatePath('/admin/games');
    return { success: true };
  } catch (error) {
    console.error('Error updating status colors:', error);
    return { success: false, error: 'Failed to update status colors' };
  }
}

// ============================================
// SKILLS CRUD
// ============================================

export async function updateSkillCategory(
  key: string,
  data: SkillCategory
): Promise<{ success: boolean; error?: string }> {
  try {
    const skills = await getSkills();
    skills[key] = data;
    await saveSkills(skills);
    revalidatePath('/');
    revalidatePath('/admin/skills');
    return { success: true };
  } catch (error) {
    console.error('Error updating skill category:', error);
    return { success: false, error: 'Failed to update skill category' };
  }
}

export async function addSkillCategory(
  key: string,
  data: SkillCategory
): Promise<{ success: boolean; error?: string }> {
  try {
    const skills = await getSkills();

    if (skills[key]) {
      return { success: false, error: 'Category key already exists' };
    }

    skills[key] = data;
    await saveSkills(skills);
    revalidatePath('/');
    revalidatePath('/admin/skills');
    return { success: true };
  } catch (error) {
    console.error('Error adding skill category:', error);
    return { success: false, error: 'Failed to add skill category' };
  }
}

export async function deleteSkillCategory(
  key: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const skills = await getSkills();

    if (!skills[key]) {
      return { success: false, error: 'Category not found' };
    }

    delete skills[key];
    await saveSkills(skills);
    revalidatePath('/');
    revalidatePath('/admin/skills');
    return { success: true };
  } catch (error) {
    console.error('Error deleting skill category:', error);
    return { success: false, error: 'Failed to delete skill category' };
  }
}

// ============================================
// EXPERIENCE CRUD
// ============================================

export async function addExperience(
  experienceData: NewExperience
): Promise<{ success: boolean; error?: string }> {
  try {
    const experience = await getExperience();
    const maxOrder = Math.max(...experience.map((e) => e.order), -1);

    const newExperience: Experience = {
      ...experienceData,
      id: generateId(),
      order: maxOrder + 1,
    };

    experience.push(newExperience);
    await saveExperience(experience);
    revalidatePath('/');
    revalidatePath('/admin/experience');
    return { success: true };
  } catch (error) {
    console.error('Error adding experience:', error);
    return { success: false, error: 'Failed to add experience' };
  }
}

export async function updateExperience(
  id: string,
  updates: Partial<Omit<Experience, 'id'>>
): Promise<{ success: boolean; error?: string }> {
  try {
    const experience = await getExperience();
    const index = experience.findIndex((e) => e.id === id);

    if (index === -1) {
      return { success: false, error: 'Experience not found' };
    }

    experience[index] = { ...experience[index], ...updates };
    await saveExperience(experience);
    revalidatePath('/');
    revalidatePath('/admin/experience');
    return { success: true };
  } catch (error) {
    console.error('Error updating experience:', error);
    return { success: false, error: 'Failed to update experience' };
  }
}

export async function deleteExperience(
  id: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const experience = await getExperience();
    const filtered = experience.filter((e) => e.id !== id);

    if (filtered.length === experience.length) {
      return { success: false, error: 'Experience not found' };
    }

    // Re-order remaining experience entries
    const reordered = filtered.map((e, index) => ({ ...e, order: index }));
    await saveExperience(reordered);
    revalidatePath('/');
    revalidatePath('/admin/experience');
    return { success: true };
  } catch (error) {
    console.error('Error deleting experience:', error);
    return { success: false, error: 'Failed to delete experience' };
  }
}

export async function reorderExperience(
  orderedIds: string[]
): Promise<{ success: boolean; error?: string }> {
  try {
    const experience = await getExperience();
    const reordered = orderedIds
      .map((id, index) => {
        const exp = experience.find((e) => e.id === id);
        if (exp) {
          return { ...exp, order: index };
        }
        return null;
      })
      .filter((e): e is Experience => e !== null);

    await saveExperience(reordered);
    revalidatePath('/');
    revalidatePath('/admin/experience');
    return { success: true };
  } catch (error) {
    console.error('Error reordering experience:', error);
    return { success: false, error: 'Failed to reorder experience' };
  }
}

// ============================================
// SEED DATA
// ============================================

export async function seedData(): Promise<{
  success: boolean;
  counts?: { projects: number; games: number; skills: number; experience: number };
  error?: string;
}> {
  try {
    const counts = await seedAllData();
    revalidatePath('/');
    revalidatePath('/tabletop');
    return { success: true, counts };
  } catch (error) {
    console.error('Error seeding data:', error);
    return { success: false, error: 'Failed to seed data' };
  }
}
