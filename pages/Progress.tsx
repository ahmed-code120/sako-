
import React from 'react';
import { BarChart3, TrendingUp, Calendar, Zap, Activity } from 'lucide-react';
import { MOCK_USER } from '../constants';

export const ProgressPage: React.FC = () => {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-black mb-2">My Progress</h1>
        <p className="text-gray-500">Detailed analytics of your technological growth.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-8">
          {/* Main Chart Card */}
          <div className="bg-sako-gray/20 border border-sako-gray rounded-3xl p-8">
            <div className="flex justify-between items-center mb-10">
              <h3 className="font-bold flex items-center gap-2">
                <Activity className="w-5 h-5 text-sako-green" /> Learning Activity
              </h3>
              <select className="bg-sako-black border border-sako-gray rounded-lg px-3 py-1.5 text-xs font-bold text-gray-400 focus:outline-none">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
            
            <div className="h-64 flex items-end justify-between gap-4 px-4">
              {[65, 40, 85, 50, 95, 30, 75].map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
                  <div className="w-full bg-sako-green/5 rounded-t-lg relative overflow-hidden flex flex-col justify-end" style={{ height: '100%' }}>
                     <div className="w-full bg-sako-green rounded-t-lg transition-all duration-700 group-hover:brightness-125" style={{ height: `${val}%` }} />
                  </div>
                  <span className="text-[10px] font-bold text-gray-500">Day {i+1}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-sako-gray/20 border border-sako-gray rounded-3xl p-6">
               <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Focus Distribution</h4>
               <div className="space-y-4">
                  {[
                    { label: 'Deep Learning', val: 45 },
                    { label: 'Infrastructure', val: 30 },
                    { label: 'Security', val: 15 },
                    { label: 'Architecture', val: 10 }
                  ].map(item => (
                    <div key={item.label} className="space-y-1.5">
                      <div className="flex justify-between text-[11px] font-bold">
                        <span>{item.label}</span>
                        <span className="text-sako-green">{item.val}%</span>
                      </div>
                      <div className="w-full h-1 bg-sako-black rounded-full overflow-hidden">
                        <div className="bg-sako-green h-full" style={{ width: `${item.val}%` }} />
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="bg-sako-gray/20 border border-sako-gray rounded-3xl p-6">
               <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Milestone History</h4>
               <div className="space-y-4">
                  {[
                    { date: '24 Oct', label: 'Advanced ML Certification', type: 'award' },
                    { date: '12 Oct', label: 'Level 20 Milestone', type: 'milestone' },
                    { date: '05 Oct', label: '30 Day Learning Streak', type: 'streak' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 bg-sako-black/30 rounded-xl border border-sako-gray/50">
                       <div className="text-[9px] font-bold text-gray-500 w-10">{item.date}</div>
                       <div className="text-xs font-bold text-gray-300 flex-1">{item.label}</div>
                       <Zap className="w-3.5 h-3.5 text-sako-green" />
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-sako-green/20 to-transparent border border-sako-green/30 rounded-3xl p-6 text-center">
             <div className="w-20 h-20 bg-sako-green/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-sako-green/20">
                <TrendingUp className="w-10 h-10 text-sako-green" />
             </div>
             <h3 className="text-2xl font-black mb-1">Top 1%</h3>
             <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Global Rank</p>
             <div className="mt-6 pt-6 border-t border-sako-green/20">
                <p className="text-[10px] text-gray-400 leading-relaxed">You are outperforming 99% of learners in <strong>Deep Learning Architecture</strong> this week.</p>
             </div>
          </div>

          <div className="bg-sako-gray/20 border border-sako-gray rounded-3xl p-6">
             <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6">Learning Velocity</h4>
             <div className="text-3xl font-black mb-2">12.4 <span className="text-sm font-bold text-sako-green">h/week</span></div>
             <p className="text-xs text-gray-500">+2.1h from last month</p>
             <div className="mt-8">
                <button className="w-full py-3 bg-sako-black border border-sako-gray rounded-xl text-[10px] font-black uppercase tracking-widest hover:border-sako-green transition-all">
                  Download Report
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
