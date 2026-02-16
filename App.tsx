
import React, { useState, useEffect, Suspense } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Zap, ChevronRight } from 'lucide-react';

// Components & Layout
import { DashboardLayout } from './components/Layout';

// Pages
import { LandingPage } from './pages/LandingPage';
import { AuthPage } from './pages/Auth';
import { Dashboard } from './pages/Dashboard';
import { CourseLibrary } from './pages/CourseLibrary';
import { MyCourses } from './pages/MyCourses';
import { CoursePlayer } from './pages/CoursePlayer';
import { ProgressPage } from './pages/Progress';
import { CertificatesPage } from './pages/Certificates';
import { LiveSessions } from './pages/LiveSessions';

// Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Global Preloader
const Preloader = () => (
  <div className="fixed inset-0 bg-sako-black z-[100] flex flex-col items-center justify-center">
    <div className="relative">
      <div className="w-16 h-16 bg-sako-green rounded-2xl flex items-center justify-center neon-glow animate-pulse">
        <Zap className="text-black w-10 h-10 fill-black" />
      </div>
      <div className="absolute inset-0 w-16 h-16 border-4 border-sako-green/20 rounded-2xl animate-spin [animation-duration:3s]" />
    </div>
    <div className="mt-8 text-center animate-fade-in">
      <span className="text-2xl font-black tracking-tighter uppercase text-white">Sako</span>
      <p className="text-[10px] font-bold text-sako-green tracking-[0.4em] uppercase mt-1">Initializing Infrastructure</p>
    </div>
  </div>
);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Preloader />;

  return (
    <HashRouter>
      <ScrollToTop />
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          
          {/* Dashboard Routes Wrapped in Layout */}
          <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
          <Route path="/programs" element={<DashboardLayout><CourseLibrary /></DashboardLayout>} />
          <Route path="/courses" element={<DashboardLayout><MyCourses /></DashboardLayout>} />
          <Route path="/course-player" element={<DashboardLayout><CoursePlayer /></DashboardLayout>} />
          <Route path="/progress" element={<DashboardLayout><ProgressPage /></DashboardLayout>} />
          <Route path="/certificates" element={<DashboardLayout><CertificatesPage /></DashboardLayout>} />
          <Route path="/live" element={<DashboardLayout><LiveSessions /></DashboardLayout>} />
          
          {/* Managed Utility Routes */}
          <Route path="/billing" element={<DashboardLayout>
            <div className="max-w-4xl mx-auto py-20 text-center space-y-6 animate-slide-up">
              <div className="w-20 h-20 bg-sako-gray rounded-full flex items-center justify-center mx-auto border border-sako-gray">
                <Zap className="w-8 h-8 text-sako-green" />
              </div>
              <h1 className="text-4xl font-black">Enterprise Billing</h1>
              <p className="text-gray-500 max-w-md mx-auto">Your account is currently managed by the SAKO Core infrastructure. Subscription details are being synchronized.</p>
              <button className="bg-sako-green text-black font-bold px-8 py-3 rounded-xl hover:brightness-110 transition-all">Download Last Invoice</button>
            </div>
          </DashboardLayout>} />
          
          <Route path="/settings" element={<DashboardLayout>
            <div className="max-w-4xl mx-auto py-20 animate-slide-up">
              <h1 className="text-4xl font-black mb-8">System Settings</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-sako-gray/20 border border-sako-gray">
                  <h3 className="font-bold mb-4">Profile Synchronization</h3>
                  <p className="text-sm text-gray-500 mb-6">Manage how your technical profile appears to instructors and enterprise admins.</p>
                  <button className="text-sako-green text-xs font-bold uppercase hover:underline">Edit Profile</button>
                </div>
                <div className="p-8 rounded-3xl bg-sako-gray/20 border border-sako-gray">
                  <h3 className="font-bold mb-4">Security Credentials</h3>
                  <p className="text-sm text-gray-500 mb-6">Update your password or enable hardware-based MFA for maximum infrastructure safety.</p>
                  <button className="text-sako-green text-xs font-bold uppercase hover:underline">Manage Security</button>
                </div>
              </div>
            </div>
          </DashboardLayout>} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;
