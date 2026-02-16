
import React, { useState } from 'react';
import { Search, Filter, ChevronDown, LayoutGrid, List } from 'lucide-react';
import { MOCK_COURSES, CATEGORIES } from '../constants';
import { CourseCard } from '../components/CourseCard';

export const CourseLibrary: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ai');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="flex gap-10">
      {/* Sidebar Filters */}
      <aside className="w-64 hidden xl:block shrink-0 space-y-8">
        <div>
          <h3 className="text-[10px] font-bold text-sako-green uppercase tracking-widest mb-6">Categories</h3>
          <div className="space-y-1">
            {CATEGORIES.map(cat => (
              <button 
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium ${
                  activeCategory === cat.id 
                    ? 'bg-sako-green/10 text-sako-green neon-border' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-bold text-sako-green uppercase tracking-widest mb-6">Difficulty</h3>
          <div className="space-y-3">
            {['Beginner', 'Intermediate', 'Advanced'].map(level => (
              <label key={level} className="flex items-center gap-3 group cursor-pointer">
                <div className="w-4 h-4 border border-sako-gray rounded group-hover:border-sako-green transition-colors flex items-center justify-center">
                  <div className="w-2 h-2 bg-sako-green rounded-sm opacity-0 group-hover:opacity-50" />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{level}</span>
              </label>
            ))}
          </div>
        </div>

         <div>
          <h3 className="text-[10px] font-bold text-sako-green uppercase tracking-widest mb-6">Duration</h3>
          <div className="space-y-3">
            {['Short (< 5h)', 'Medium (5-20h)', 'Long (20h+)'].map(time => (
              <label key={time} className="flex items-center gap-3 group cursor-pointer">
                 <input type="checkbox" className="hidden" />
                 <div className="w-4 h-4 border border-sako-gray rounded group-hover:border-sako-green transition-colors flex items-center justify-center">
                   {time.includes('Medium') && <div className="w-2 h-2 bg-sako-green rounded-sm" />}
                 </div>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{time}</span>
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 space-y-8">
        <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
          <div>
            <h2 className="text-3xl font-black mb-1">Explore Library</h2>
            <p className="text-gray-400 text-sm">Discover the future of technology with our curated courses.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-sako-gray/40 border border-sako-gray p-1 rounded-lg">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-sako-green/20 text-sako-green' : 'text-gray-500 hover:text-white'}`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-sako-green/20 text-sako-green' : 'text-gray-500 hover:text-white'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex items-center gap-2 bg-sako-gray/40 border border-sako-gray px-4 py-2 rounded-lg cursor-pointer hover:border-sako-green/50 transition-all">
              <span className="text-[10px] font-bold text-gray-500 uppercase">Sort By:</span>
              <span className="text-xs font-bold flex items-center gap-1">Most Popular <ChevronDown className="w-3 h-3" /></span>
            </div>
          </div>
        </div>

        {/* Search Bar Mobile */}
        <div className="relative xl:hidden">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input 
            type="text" 
            placeholder="Search futuristic courses..."
            className="w-full bg-sako-gray/50 border border-sako-gray rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-sako-green transition-all"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
          {MOCK_COURSES.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
          {/* Duplicate for demo */}
          {MOCK_COURSES.map(course => (
            <CourseCard key={course.id + '-dup'} course={{...course, id: course.id + '-dup'}} />
          ))}
        </div>

        {/* Pagination */}
        <div className="pt-10 flex justify-center items-center gap-3">
          <button className="p-2 border border-sako-gray rounded-lg hover:border-sako-green transition-all"><ChevronDown className="w-4 h-4 rotate-90" /></button>
          {[1, 2, 3, '...', 12].map((p, i) => (
            <button 
              key={i} 
              className={`w-10 h-10 rounded-lg font-bold text-sm transition-all ${
                p === 1 ? 'bg-sako-green text-black neon-glow' : 'border border-sako-gray hover:border-sako-green'
              }`}
            >
              {p}
            </button>
          ))}
          <button className="p-2 border border-sako-gray rounded-lg hover:border-sako-green transition-all"><ChevronDown className="w-4 h-4 -rotate-90" /></button>
        </div>
      </div>
    </div>
  );
};
