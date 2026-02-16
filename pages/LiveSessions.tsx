
import React from 'react';
import { Calendar, Users, Video, Clock, ChevronRight } from 'lucide-react';

export const LiveSessions: React.FC = () => {
  const sessions = [
    {
      id: 1,
      title: 'Real-world LLM Deployment',
      instructor: 'Dr. Sarah Chen',
      time: 'Today, 18:00 UTC',
      duration: '90 min',
      students: 245,
      type: 'Workshop'
    },
    {
      id: 2,
      title: 'Infrastructure scaling for SASS',
      instructor: 'Mark Z.',
      time: 'Tomorrow, 14:00 UTC',
      duration: '60 min',
      students: 120,
      type: 'Q&A'
    }
  ];

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black mb-2">Live Sessions</h1>
          <p className="text-gray-500">Engage with industry leaders in real-time technical workshops.</p>
        </div>
        <button className="bg-sako-green/10 text-sako-green border border-sako-green/20 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-sako-green/20 transition-all">
          My Calendar
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 space-y-6">
          <h2 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em]">Upcoming This Week</h2>
          {sessions.map(session => (
            <div key={session.id} className="bg-sako-gray/20 border border-sako-gray rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 group hover:border-sako-green/30 transition-all">
               <div className="w-full md:w-32 h-32 bg-sako-black rounded-2xl flex flex-col items-center justify-center text-center border border-sako-gray relative overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-1 bg-sako-green" />
                  <span className="text-3xl font-black tracking-tighter">24</span>
                  <span className="text-[10px] font-bold text-gray-500 uppercase">Oct</span>
               </div>

               <div className="flex-1 space-y-4 text-center md:text-left">
                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    <span className="text-[9px] font-black uppercase tracking-widest bg-sako-green/10 text-sako-green px-2 py-0.5 rounded border border-sako-green/20">{session.type}</span>
                    <span className="text-[9px] font-black uppercase tracking-widest bg-sako-gray text-gray-400 px-2 py-0.5 rounded border border-sako-gray">High Priority</span>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-sako-green transition-colors">{session.title}</h3>
                  <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-xs text-gray-500 font-medium">
                    <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> {session.time}</span>
                    <span className="flex items-center gap-2"><Users className="w-3.5 h-3.5" /> {session.students} joined</span>
                  </div>
               </div>

               <button className="w-full md:w-auto bg-sako-black border border-sako-gray text-white font-bold px-8 py-4 rounded-xl hover:bg-sako-green hover:text-black transition-all flex items-center justify-center gap-2">
                 Join Stream <Video className="w-4 h-4" />
               </button>
            </div>
          ))}
        </div>

        <div className="space-y-8">
           <div className="bg-sako-gray/20 border border-sako-gray rounded-3xl p-8">
              <h3 className="font-bold mb-6">Elite Mentors</h3>
              <div className="space-y-6">
                {[
                  { name: 'Dr. Sarah Chen', role: 'AI Principal', status: 'Available' },
                  { name: 'Alex Rivera', role: 'Lead Architect', status: 'In Session' }
                ].map((mentor, i) => (
                  <div key={i} className="flex items-center justify-between">
                     <div className="flex items-center gap-4">
                        <img src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border border-sako-gray" alt="" />
                        <div>
                          <p className="text-sm font-bold">{mentor.name}</p>
                          <p className="text-[10px] text-gray-500 font-bold uppercase">{mentor.role}</p>
                        </div>
                     </div>
                     <button className="p-2 text-gray-500 hover:text-sako-green transition-colors"><ChevronRight className="w-5 h-5" /></button>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 py-3 border border-sako-gray rounded-xl text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all">
                View All Mentors
              </button>
           </div>

           <div className="bg-sako-green/5 border border-sako-green/20 rounded-3xl p-8 text-center relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-sako-green blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity" />
              <Calendar className="w-10 h-10 text-sako-green mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Book 1-on-1 Session</h3>
              <p className="text-xs text-gray-400 mb-6">Schedule a private deep-dive with any of our senior engineers.</p>
              <button className="w-full bg-sako-green text-black font-black py-4 rounded-xl text-xs uppercase tracking-widest hover:brightness-110 transition-all neon-glow">
                Schedule Now
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
