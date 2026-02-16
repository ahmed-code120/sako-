
import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Lock, 
  Search, 
  Download, 
  PlayCircle,
  BrainCircuit,
  MessageSquare,
  ChevronRight,
  Maximize2,
  Settings,
  Volume2,
  SkipForward,
  FastForward,
  Terminal
} from 'lucide-react';
import { MOCK_MODULES, MOCK_COURSES } from '../constants';
import { getGeminiResponse } from '../services/gemini';

export const CoursePlayer: React.FC = () => {
  const [activeLessonId, setActiveLessonId] = useState('l-5');
  const [activeTab, setActiveTab] = useState('transcript');
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{ role: string, content: string }[]>([]);
  const [isAiThinking, setIsAiThinking] = useState(false);

  const handleAiChat = async () => {
    if (!chatMessage.trim()) return;
    
    const userMsg = { role: 'user', content: chatMessage };
    setChatHistory(prev => [...prev, userMsg]);
    setChatMessage('');
    setIsAiThinking(true);

    const context = `Lesson: Atomic Design in Scale. Course: Advanced React. Topic: Design Systems and Component Architecture.`;
    const response = await getGeminiResponse(chatMessage, context);
    
    setChatHistory(prev => [...prev, { role: 'model', content: response }]);
    setIsAiThinking(false);
  };

  return (
    <div className="h-full flex flex-col xl:flex-row gap-8">
      {/* Left: Player Area */}
      <div className="flex-1 space-y-6 overflow-y-auto">
        <div className="bg-sako-black rounded-3xl border border-sako-gray overflow-hidden relative group">
          <div className="aspect-video bg-black relative flex items-center justify-center">
             <video 
              className="w-full h-full"
              poster="https://picsum.photos/id/1/1200/800"
              controls
             >
               <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
             </video>
             
             {/* Custom Controls Overlay (Mock) */}
             <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-4">
                  <PlayCircle className="w-8 h-8 text-sako-green fill-sako-green/20" />
                  <div className="h-1.5 w-64 bg-white/20 rounded-full overflow-hidden">
                    <div className="bg-sako-green h-full" style={{ width: '45%' }} />
                  </div>
                  <span className="text-xs font-mono">04:22 / 12:45</span>
                </div>
                <div className="flex items-center gap-4">
                  <Volume2 className="w-5 h-5" />
                  <Settings className="w-5 h-5" />
                  <Maximize2 className="w-5 h-5" />
                </div>
             </div>
          </div>
        </div>

        <div className="flex justify-between items-start">
           <div>
              <h1 className="text-2xl font-black mb-2">Lesson 3.2: Atomic Design in Scale</h1>
              <p className="text-gray-400 text-sm max-w-2xl">
                Learn how to implement atomic design principles within a large-scale enterprise application using design tokens and high-performance React components.
              </p>
           </div>
           <button className="bg-sako-green text-black font-black px-6 py-3 rounded-xl flex items-center gap-2 hover:brightness-110 transition-all neon-glow">
             Next Lesson <ChevronRight className="w-5 h-5" />
           </button>
        </div>

        <div className="border-b border-sako-gray flex gap-8">
          {['Transcript', 'Notes', 'Resources (3)', 'Discussions'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase().split(' ')[0])}
              className={`pb-4 text-sm font-bold transition-all relative ${
                activeTab === tab.toLowerCase().split(' ')[0] ? 'text-sako-green' : 'text-gray-500 hover:text-white'
              }`}
            >
              {tab}
              {activeTab === tab.toLowerCase().split(' ')[0] && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-sako-green neon-glow" />
              )}
            </button>
          ))}
        </div>

        {activeTab === 'transcript' && (
          <div className="space-y-6 pt-4 h-[400px] overflow-y-auto pr-4">
            <div className="flex gap-4 group cursor-pointer">
              <span className="text-xs font-mono text-sako-green font-bold w-12 pt-1 group-hover:underline">00:12</span>
              <p className="text-sm text-gray-400 leading-relaxed flex-1 group-hover:text-white transition-colors">
                Welcome back to the third module of our UI Architecture course. In this specific lesson, we're going to dive deep into how atomic design patterns actually translate to real-world production environments where performance is the number one priority.
              </p>
            </div>
            <div className="flex gap-4 group cursor-pointer bg-sako-green/5 border border-sako-green/10 p-4 rounded-xl">
              <span className="text-xs font-mono text-sako-green font-bold w-12 pt-1 group-hover:underline">01:45</span>
              <p className="text-sm text-gray-200 leading-relaxed flex-1">
                Now, let's look at the molecule level. Most developers make the mistake of over-complicating their base components. Instead, we want to focus on "stateless purity" as much as possible before we introduce context providers or state management.
              </p>
            </div>
            <div className="flex gap-4 group cursor-pointer">
              <span className="text-xs font-mono text-sako-green font-bold w-12 pt-1 group-hover:underline">03:22</span>
              <p className="text-sm text-gray-400 leading-relaxed flex-1 group-hover:text-white transition-colors">
                By utilizing CSS variables or Tailwind's theme configuration, we can ensure that our atomic units remain consistent regardless of which module of the application they are rendered in.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Right: Sidebar Area */}
      <div className="w-full xl:w-96 flex flex-col gap-8">
        {/* Curriculum */}
        <div className="bg-sako-gray/20 border border-sako-gray rounded-2xl overflow-hidden flex flex-col h-[500px]">
          <div className="p-6 border-b border-sako-gray flex justify-between items-center bg-sako-gray/40">
            <h3 className="font-bold">Course Curriculum</h3>
            <Settings className="w-4 h-4 text-gray-500" />
          </div>
          
          <div className="p-4 border-b border-sako-gray">
             <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Search lessons..."
                  className="w-full bg-sako-black border border-sako-gray rounded-lg pl-10 pr-4 py-2 text-xs focus:outline-none focus:border-sako-green transition-all"
                />
             </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {MOCK_MODULES.map(module => (
              <div key={module.id} className="border-b border-sako-gray last:border-0">
                <div className="p-4 bg-sako-black/20 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{module.title}</span>
                  <span className="text-[10px] font-bold bg-sako-green/10 text-sako-green px-2 py-0.5 rounded">{module.lessons.length}/{module.lessons.length}</span>
                </div>
                <div className="space-y-1 p-2">
                  {module.lessons.map(lesson => (
                    <button 
                      key={lesson.id}
                      onClick={() => !lesson.isLocked && setActiveLessonId(lesson.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all ${
                        activeLessonId === lesson.id 
                          ? 'bg-sako-green/10 border border-sako-green/30' 
                          : lesson.isLocked ? 'opacity-40 grayscale cursor-not-allowed' : 'hover:bg-white/5'
                      }`}
                    >
                      {lesson.isCompleted ? (
                        <CheckCircle2 className="w-4 h-4 text-sako-green" />
                      ) : activeLessonId === lesson.id ? (
                        <PlayCircle className="w-4 h-4 text-sako-green" />
                      ) : lesson.isLocked ? (
                        <Lock className="w-4 h-4" />
                      ) : (
                        <Circle className="w-4 h-4 text-gray-500" />
                      )}
                      
                      <div className="flex-1">
                        <p className={`text-xs font-medium ${activeLessonId === lesson.id ? 'text-sako-green' : ''}`}>
                          {lesson.title}
                        </p>
                        <p className="text-[10px] text-gray-500">{lesson.duration}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-sako-black border-t border-sako-gray">
             <button className="w-full text-xs font-bold text-gray-400 flex items-center justify-center gap-2 hover:text-white transition-colors">
               <Download className="w-4 h-4" /> Download All Resources
             </button>
          </div>
        </div>

        {/* AI Tutor Chat */}
        <div className="bg-sako-gray/20 border border-sako-gray rounded-2xl flex flex-col h-[500px]">
          <div className="p-6 border-b border-sako-gray flex items-center gap-3 bg-sako-green/5">
             <div className="w-8 h-8 rounded-full bg-sako-green flex items-center justify-center">
                <BrainCircuit className="w-5 h-5 text-black" />
             </div>
             <div>
                <h3 className="text-sm font-bold">SAKO AI Mentor</h3>
                <span className="text-[9px] text-sako-green font-black uppercase tracking-widest">Online • GPT-4 Contextual</span>
             </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {chatHistory.length === 0 && (
              <div className="text-center py-10 px-6">
                <MessageSquare className="w-10 h-10 text-gray-600 mx-auto mb-4" />
                <p className="text-xs text-gray-400 leading-relaxed">
                  Ask me anything about <span className="text-sako-green font-bold">Atomic Design</span> or specific code blocks in this lesson.
                </p>
              </div>
            )}
            
            {chatHistory.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-sako-green/10 border border-sako-green/20 text-white' 
                    : 'bg-sako-black border border-sako-gray text-gray-300'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            
            {isAiThinking && (
              <div className="flex justify-start">
                <div className="bg-sako-black border border-sako-gray p-3 rounded-2xl flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-sako-green rounded-full animate-bounce" />
                   <div className="w-1.5 h-1.5 bg-sako-green rounded-full animate-bounce [animation-delay:0.2s]" />
                   <div className="w-1.5 h-1.5 bg-sako-green rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-sako-gray">
            <div className="relative">
              <input 
                type="text" 
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAiChat()}
                placeholder="Ask SAKO AI..."
                className="w-full bg-sako-black border border-sako-gray rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-sako-green transition-all"
              />
              <button 
                onClick={handleAiChat}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-sako-green hover:brightness-125 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
