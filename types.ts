
export enum UserRole {
  VISITOR = 'VISITOR',
  STUDENT = 'STUDENT',
  INSTRUCTOR = 'INSTRUCTOR',
  ENTERPRISE_ADMIN = 'ENTERPRISE_ADMIN',
  PLATFORM_ADMIN = 'PLATFORM_ADMIN'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  level?: number;
  xp?: number;
  streak?: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  instructorRole?: string;
  thumbnail: string;
  duration: string;
  chapters: number;
  rating: number;
  reviews: number;
  price: number;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  completionPercent?: number;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'text' | 'quiz' | 'lab';
  content?: string;
  videoUrl?: string;
  isCompleted: boolean;
  isLocked: boolean;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
  completedCount: number;
}

export interface ChatMessage {
  role: 'user' | 'model' | 'system';
  content: string;
  timestamp: Date;
}
