import React from 'react';
// Added BrainCircuit, Terminal, and BookOpen to imports
import { 
  Flame, 
  Trophy, 
  ChevronRight, 
  Play, 
  CircleDot,
  Calendar as CalendarIcon,
  MessageSquare,
  BrainCircuit,
  Terminal,
  BookOpen
} from 'lucide-react';
import { MOCK_COURSES, MOCK_USER } from '../constants';
import { CourseCard } from '../components/CourseCard';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-10">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-sako-green/20 to-transparent p-6 rounded-2xl border border-sako-green/20 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold text-sako-green uppercase tracking-widest mb-1">Learning Streak</p>
            <h2 className="text-3xl font-black">12 Days <span className="text-sm text-sako-green font-bold ml-2">+2 today</span></h2>
          </div>
          <Flame className="w-12 h-12 text-sako-green fill-sako-green/20" />
        </div>

        <div className="bg-sako-gray/40 p-6 rounded-2xl border border-sako-gray flex items-center justify-between">
          <div className="flex-1">
            <div className="flex justify-between items-end mb-2">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Next Milestone</p>
              <p className="text-xs font-bold text-gray-400">Level {MOCK_USER.level}</p>
            </div>
            <h2 className="text-xl font-black mb-3">{MOCK_USER.xp?.toLocaleString()} <span className="text-sm text-gray-500">/ 10,000 XP</span></h2>
            <div className="w-full bg-sako-black h-2 rounded-full overflow-hidden border border-sako-gray">
              <div className="bg-sako-green h-full neon-glow" style={{ width: '84.5%' }} />
            </div>
          </div>
        </div>

        <div className="bg-sako-gray/40 p-6 rounded-2xl border border-sako-gray flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Certifications</p>
            <h2 className="text-3xl font-black">04 <span className="text-sm text-gray-500 font-bold ml-2">Earned</span></h2>
            <button className="text-sako-green text-[10px] font-bold uppercase mt-2 hover:underline">View Achievements</button>
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-sako-green flex items-center justify-center">
             <Trophy className="w-6 h-6 text-sako-green" />
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          {/* Active Courses */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Play className="w-5 h-5 text-sako-green fill-sako-green" /> Active Courses
              </h2>
              <button className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-white transition-colors">View All</button>
            </div>

            <div className="space-y-4">
              {MOCK_COURSES.filter(c => c.completionPercent).map(course => (
                <div key={course.id} className="bg-sako-gray/20 border border-sako-gray/50 p-4 rounded-2xl hover:border-sako-green/30 transition-all group flex gap-5">
                   <div className="w-48 h-28 rounded-xl overflow-hidden hidden sm:block">
                      <img src={course.thumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                   </div>
                   <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-[10px] font-bold bg-sako-green/10 text-sako-green px-2 py-0.5 rounded uppercase">{course.difficulty}</span>
                        <span className="text-[10px] text-gray-500 font-bold uppercase">Module 4 of 12</span>
                      </div>
                      <h3 className="font-bold text-lg mb-1">{course.title}</h3>
                      <p className="text-xs text-gray-400 mb-4 line-clamp-1">{course.description}</p>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex-1 bg-sako-black h-1.5 rounded-full overflow-hidden border border-sako-gray">
                           <div className="bg-sako-green h-full" style={{ width: `${course.completionPercent}%` }} />
                        </div>
                        <span className="text-xs font-bold text-gray-400">{course.completionPercent}%</span>
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Recommendations */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <BrainCircuit className="w-5 h-5 text-sako-green" />
              <h2 className="text-xl font-bold">AI Recommended</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-sako-gray/20 border border-sako-gray/50 p-5 rounded-2xl hover:border-sako-green/30 transition-all">
                <div className="w-10 h-10 bg-sako-green/10 text-sako-green rounded flex items-center justify-center mb-4">
                  <Terminal className="w-5 h-5" />
                </div>
                <h4 className="font-bold mb-2">Practice: TypeScript Types</h4>
                <p className="text-xs text-gray-400 mb-4">Based on your recent errors in Module 3 lab.</p>
                <button className="text-sako-green text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  START LAB <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-sako-gray/20 border border-sako-gray/50 p-5 rounded-2xl hover:border-sako-green/30 transition-all">
                <div className="w-10 h-10 bg-sako-green/10 text-sako-green rounded flex items-center justify-center mb-4">
                   <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="font-bold mb-2">Article: V8 Engine Internals</h4>
                <p className="text-xs text-gray-400 mb-4">Complementary reading for "Performance Optimization".</p>
                <button className="text-sako-green text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  READ NOW <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-10">
          {/* Live Schedule */}
          <div className="bg-sako-gray/20 border border-sako-gray/50 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
               <h3 className="font-bold">Live Schedule</h3>
               <div className="flex gap-2">
                  <button className="p-1 text-gray-500 hover:text-white"><ChevronRight className="w-4 h-4 rotate-180" /></button>
                  <button className="p-1 text-gray-500 hover:text-white"><ChevronRight className="w-4 h-4" /></button>
               </div>
            </div>
            
            <div className="grid grid-cols-7 gap-2 text-center text-[10px] text-gray-500 font-bold mb-4 uppercase tracking-tighter">
              <span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span>
              {[...Array(7)].map((_, i) => (
                <span key={i} className={`p-2 rounded-lg ${i === 2 ? 'bg-sako-green text-black neon-glow' : 'hover:bg-white/5 cursor-pointer'}`}>
                  {28 + i}
                </span>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-xs text-gray-500 font-bold">14:00</span>
                <div className="flex-1 bg-sako-green/10 border-l-2 border-sako-green p-3 rounded-r-xl">
                   <div className="flex items-center gap-1.5 text-[10px] font-bold text-sako-green uppercase mb-1">
                      <CircleDot className="w-2.5 h-2.5 animate-pulse" /> Live Now
                   </div>
                   <h5 className="text-xs font-bold mb-1">UX Portfolio Review</h5>
                   <p className="text-[10px] text-gray-400">with Sarah Jenkins</p>
                </div>
              </div>

              <div className="flex gap-4 opacity-50">
                <span className="text-xs text-gray-500 font-bold">16:30</span>
                <div className="flex-1 bg-sako-gray border-l-2 border-gray-600 p-3 rounded-r-xl">
                   <h5 className="text-xs font-bold mb-1">Backend Q&A Session</h5>
                   <p className="text-[10px] text-gray-400">with Mark Z.</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Mentor Widget */}
          <div className="bg-sako-gray/20 border border-sako-gray/50 rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-sako-green/5 blur-3xl -z-10 group-hover:bg-sako-green/10 transition-colors" />
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-5 h-5 text-sako-green" />
              <h3 className="font-bold">AI Mentor</h3>
            </div>
            <div className="flex gap-3 items-start mb-6">
              <div className="w-8 h-8 rounded-full bg-sako-green flex items-center justify-center shrink-0">
                <BrainCircuit className="w-4 h-4 text-black" />
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                "I noticed you're speeding through Module 4. Would you like a quick quiz to verify your understanding?"
              </p>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 bg-sako-green/10 text-sako-green border border-sako-green/20 py-2 rounded-lg text-[10px] font-bold uppercase hover:bg-sako-green/20 transition-all">
                Yes, Quiz Me
              </button>
              <button className="flex-1 bg-sako-gray/50 text-gray-400 border border-sako-gray py-2 rounded-lg text-[10px] font-bold uppercase hover:text-white transition-all">
                Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};