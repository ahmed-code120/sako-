
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  Compass, 
  LineChart, 
  Award, 
  Calendar, 
  CreditCard, 
  Settings, 
  Menu, 
  Search,
  Bell,
  Zap
} from 'lucide-react';
import { MOCK_USER } from '../constants';

interface SidebarItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ to, icon, label, active }) => (
  <Link
    to={to}
    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-250 ${
      active 
        ? 'bg-sako-green/10 text-sako-green neon-border' 
        : 'text-gray-400 hover:text-white hover:bg-white/5'
    }`}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </Link>
);

export const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { to: '/dashboard', icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard' },
    { to: '/courses', icon: <BookOpen className="w-5 h-5" />, label: 'My Courses' },
    { to: '/programs', icon: <Compass className="w-5 h-5" />, label: 'Programs' },
    { to: '/progress', icon: <LineChart className="w-5 h-5" />, label: 'Progress' },
    { to: '/certificates', icon: <Award className="w-5 h-5" />, label: 'Certificates' },
    { to: '/live', icon: <Calendar className="w-5 h-5" />, label: 'Live Sessions' },
  ];

  const bottomItems = [
    { to: '/billing', icon: <CreditCard className="w-5 h-5" />, label: 'Billing' },
    { to: '/settings', icon: <Settings className="w-5 h-5" />, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-sako-black flex text-white font-sans animate-fade-in">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-sako-black border-r border-sako-gray flex flex-col transition-transform duration-300 transform
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
      `}>
        <div className="p-6 flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-sako-green rounded flex items-center justify-center neon-glow shadow-[0_0_10px_rgba(0,255,136,0.3)]">
              <Zap className="text-black w-5 h-5 fill-black" />
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">Sako</span>
          </Link>
          <span className="text-[10px] bg-sako-green/20 text-sako-green px-1.5 py-0.5 rounded border border-sako-green/30 uppercase">Student</span>
        </div>

        <nav className="flex-1 px-4 space-y-1 mt-4">
          {menuItems.map(item => (
            <SidebarItem 
              key={item.to} 
              {...item} 
              active={location.pathname === item.to}
            />
          ))}
        </nav>

        <div className="px-4 py-6 space-y-1 border-t border-sako-gray">
          {bottomItems.map(item => (
            <SidebarItem 
              key={item.to} 
              {...item} 
              active={location.pathname === item.to}
            />
          ))}

          <div className="mt-8 p-4 bg-gradient-to-br from-sako-green/20 to-transparent rounded-xl border border-sako-green/20">
            <p className="text-xs font-bold text-sako-green uppercase mb-1">Pro Access</p>
            <p className="text-[11px] text-gray-400 mb-3 leading-relaxed">Unlock advanced AI mentorship & lab environments.</p>
            <button className="w-full bg-sako-green text-black text-xs font-bold py-2 rounded-lg hover:brightness-110 transition-all shadow-lg">
              Upgrade Now
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:ml-64 w-full">
        {/* Navbar */}
        <header className="h-16 border-b border-sako-gray flex items-center justify-between px-6 bg-sako-black/80 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center gap-4 flex-1">
            <button 
              className="lg:hidden p-2 text-gray-400 hover:text-white"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="relative max-w-md w-full hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search courses, lessons, topics..."
                className="w-full bg-sako-gray/50 border border-sako-gray rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-sako-green transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
               <button className="p-2 text-gray-400 hover:text-white relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-sako-green rounded-full shadow-[0_0_8px_rgba(0,255,136,0.6)] animate-pulse"></span>
              </button>
              <Link to="/settings" className="p-2 text-gray-400 hover:text-white">
                <Settings className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="flex items-center gap-3 border-l border-sako-gray pl-6">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold">{MOCK_USER.name}</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">CS Engineering</p>
              </div>
              <img 
                src={MOCK_USER.avatar} 
                alt="Profile" 
                className="w-9 h-9 rounded-full border border-sako-green/50 object-cover shadow-lg"
              />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-6 lg:p-10 flex-1 bg-sako-black grid-bg overflow-x-hidden min-h-0">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};
