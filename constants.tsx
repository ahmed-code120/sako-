
import React from 'react';
import { UserRole, Course, User, Module } from './types';
import { 
  Cpu, 
  ShieldCheck, 
  Terminal, 
  BrainCircuit, 
  Code2, 
  Database, 
  Globe, 
  Layers 
} from 'lucide-react';

export const COLORS = {
  black: '#0A0F0D',
  green: '#00FF88',
  gray: '#1A1F1E',
  accent: '#0A1A14'
};

export const MOCK_USER: User = {
  id: 'u-1',
  name: 'Alex Rivera',
  email: 'alex@sako.edu',
  role: UserRole.STUDENT,
  avatar: 'https://picsum.photos/id/64/200/200',
  level: 24,
  xp: 8450,
  streak: 12
};

export const CATEGORIES = [
  { id: 'ai', name: 'AI & Data Science', icon: <BrainCircuit className="w-5 h-5" /> },
  { id: 'ml', name: 'Machine Learning', icon: <Cpu className="w-5 h-5" /> },
  { id: 'eng', name: 'Engineering', icon: <Layers className="w-5 h-5" /> },
  { id: 'cloud', name: 'Cloud Computing', icon: <Globe className="w-5 h-5" /> },
  { id: 'sec', name: 'Cybersecurity', icon: <ShieldCheck className="w-5 h-5" /> },
  { id: 'dev', name: 'Web Development', icon: <Code2 className="w-5 h-5" /> },
  { id: 'db', name: 'Database Architecture', icon: <Database className="w-5 h-5" /> }
];

export const MOCK_COURSES: Course[] = [
  {
    id: 'c-1',
    title: 'Advanced Machine Learning',
    description: 'Master deep learning architectures and deployment strategies for scale.',
    instructor: 'Dr. Sarah Chen',
    instructorRole: 'Head of AI @ Anthropic',
    thumbnail: 'https://picsum.photos/id/1/800/600',
    duration: '12.5 Hours',
    chapters: 8,
    rating: 4.9,
    reviews: 1200,
    price: 89.99,
    category: 'AI & Data Science',
    difficulty: 'Intermediate',
    tags: ['AI MASTER'],
    completionPercent: 65
  },
  {
    id: 'c-2',
    title: 'Neural Network Architecture',
    description: 'Design custom neural layers and loss functions for specialized domains.',
    instructor: 'Prof. Alexander Vance',
    instructorRole: 'MIT Research Lead',
    thumbnail: 'https://picsum.photos/id/2/800/600',
    duration: '18.0 Hours',
    chapters: 12,
    rating: 4.7,
    reviews: 856,
    price: 124.99,
    category: 'Machine Learning',
    difficulty: 'Advanced',
    tags: ['CLOUD']
  },
  {
    id: 'c-3',
    title: 'Ethical Hacking in AI Systems',
    description: 'Learn to secure LLMs against prompt injection and adversarial attacks.',
    instructor: 'Marcus Holloway',
    instructorRole: 'Security Consultant',
    thumbnail: 'https://picsum.photos/id/3/800/600',
    duration: '6.5 Hours',
    chapters: 5,
    rating: 4.8,
    reviews: 2400,
    price: 59.99,
    category: 'Cybersecurity',
    difficulty: 'Beginner',
    tags: ['SECURE']
  }
];

export const MOCK_MODULES: Module[] = [
  {
    id: 'm-1',
    title: 'COURSE INTRODUCTION',
    completedCount: 2,
    lessons: [
      { id: 'l-1', title: 'Course Introduction', duration: '05:20', type: 'video', isCompleted: true, isLocked: false },
      { id: 'l-2', title: 'Setting up Workspace', duration: '12:15', type: 'video', isCompleted: true, isLocked: false }
    ]
  },
  {
    id: 'm-2',
    title: 'MODULE 2: CORE CONCEPTS',
    completedCount: 6,
    lessons: [
      { id: 'l-3', title: 'The Theory of Design Tokens', duration: '18:45', type: 'video', isCompleted: true, isLocked: false }
    ]
  },
  {
    id: 'm-3',
    title: 'MODULE 3: ARCHITECTURE',
    completedCount: 1,
    lessons: [
      { id: 'l-4', title: 'Systemic Organization', duration: '14:20', type: 'video', isCompleted: true, isLocked: false },
      { id: 'l-5', title: 'Atomic Design in Scale', duration: '22:10', type: 'video', isCompleted: false, isLocked: false, videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
      { id: 'l-6', title: 'Performance Optimization', duration: '12:30', type: 'video', isCompleted: false, isLocked: false },
      { id: 'l-7', title: 'Enterprise Grid Systems', duration: '15:00', type: 'video', isCompleted: false, isLocked: true }
    ]
  }
];
