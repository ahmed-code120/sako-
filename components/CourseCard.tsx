import React from 'react';
// Added Zap to the imports
import { Clock, BookOpen, Star, Plus, Zap } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  compact?: boolean;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, compact }) => {
  return (
    <div className="group bg-sako-gray/40 border border-sako-gray rounded-2xl overflow-hidden hover:border-sako-green/50 transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sako-black/80 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          {course.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold bg-sako-green text-black px-2 py-0.5 rounded uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-4 text-xs text-sako-green font-medium mb-3">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="w-3 h-3" /> {course.chapters} CHAPTERS
          </span>
        </div>
        
        <h3 className="text-lg font-bold mb-2 group-hover:text-sako-green transition-colors">{course.title}</h3>
        
        <div className="flex items-center gap-2 mb-4">
          <img src={`https://i.pravatar.cc/40?u=${course.instructor}`} className="w-6 h-6 rounded-full" />
          <span className="text-xs text-gray-400">{course.instructor}</span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-sako-gray/50">
          <div className="flex items-center gap-1 text-sako-green">
            <Star className="w-4 h-4 fill-sako-green" />
            <span className="text-sm font-bold">{course.rating}</span>
            <span className="text-xs text-gray-500 font-normal">({(course.reviews / 1000).toFixed(1)}k)</span>
          </div>
          <span className="text-lg font-bold text-sako-green">${course.price}</span>
        </div>

        <button className="w-full mt-4 bg-sako-green text-black font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:brightness-110 transition-all group-hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]">
          Enroll Now <Zap className="w-4 h-4 fill-black" />
        </button>
      </div>
    </div>
  );
};