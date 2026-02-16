
import React from 'react';
import { Play, Clock, MoreVertical } from 'lucide-react';
import { MOCK_COURSES } from '../constants';
import { Link } from 'react-router-dom';

export const MyCourses: React.FC = () => {
  const activeCourses = MOCK_COURSES.filter(c => c.completionPercent !== undefined);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black mb-2">My Courses</h1>
        <p className="text-gray-500">Track your current learning paths and continue where you left off.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
        {activeCourses.map(course => (
          <div key={course.id} className="bg-sako-gray/20 border border-sako-gray rounded-2xl overflow-hidden group hover:border-sako-green/30 transition-all">
            <div className="relative aspect-video">
              <img src={course.thumbnail} className="w-full h-full object-cover" alt={course.title} />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Link to="/course-player" className="w-14 h-14 bg-sako-green text-black rounded-full flex items-center justify-center neon-glow transform scale-90 group-hover:scale-100 transition-transform">
                  <Play className="w-6 h-6 fill-black ml-1" />
                </Link>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-bold text-sako-green uppercase tracking-widest bg-sako-green/10 px-2 py-0.5 rounded">In Progress</span>
                <button className="text-gray-500 hover:text-white"><MoreVertical className="w-4 h-4" /></button>
              </div>
              <h3 className="font-bold text-lg mb-2">{course.title}</h3>
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-6">
                <Clock className="w-3.5 h-3.5" /> 2h 45m left
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  <span>Progress</span>
                  <span>{course.completionPercent}%</span>
                </div>
                <div className="w-full h-1.5 bg-sako-black rounded-full overflow-hidden border border-sako-gray">
                  <div className="bg-sako-green h-full" style={{ width: `${course.completionPercent}%` }} />
                </div>
              </div>

              <Link to="/course-player" className="block w-full text-center mt-6 py-3 border border-sako-green/20 text-sako-green text-xs font-black uppercase tracking-widest rounded-xl hover:bg-sako-green/5 transition-all">
                Resume Course
              </Link>
            </div>
          </div>
        ))}

        {/* Empty Slot for Exploration */}
        <Link to="/programs" className="border-2 border-dashed border-sako-gray rounded-2xl flex flex-col items-center justify-center p-10 group hover:border-sako-green/30 transition-all">
          <div className="w-12 h-12 bg-sako-gray/50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Play className="w-5 h-5 text-gray-400 group-hover:text-sako-green" />
          </div>
          <span className="text-sm font-bold text-gray-500 group-hover:text-white transition-colors">Start a new program</span>
        </Link>
      </div>
    </div>
  );
};
