
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  ChevronRight, 
  BrainCircuit, 
  Cpu, 
  ShieldCheck, 
  Globe, 
  Layers, 
  ArrowRight,
  CheckCircle2,
  Users,
  Building2,
  Bot,
  Play
} from 'lucide-react';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-sako-black/80 backdrop-blur-xl border-b border-sako-green/10 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-sako-green rounded flex items-center justify-center neon-glow">
            <Zap className="text-black w-5 h-5 fill-black" />
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase">Sako</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#features" className="hover:text-sako-green transition-colors">Platform</a>
          <a href="#enterprise" className="hover:text-sako-green transition-colors">Enterprise</a>
          <a href="#curriculum" className="hover:text-sako-green transition-colors">Curriculum</a>
          <a href="#pricing" className="hover:text-sako-green transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/auth" className="text-sm font-bold hover:text-sako-green transition-colors">Login</Link>
          <Link to="/auth" className="bg-sako-green text-black text-sm font-bold px-6 py-2.5 rounded-full hover:brightness-110 transition-all neon-glow shadow-[0_0_15px_rgba(0,255,136,0.3)]">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="p-8 rounded-3xl bg-sako-gray/20 border border-sako-gray/50 hover:border-sako-green/30 transition-all group animate-slide-up">
    <div className="w-12 h-12 rounded-xl bg-sako-green/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6 text-sako-green" />
    </div>
    <h3 className="text-xl font-bold mb-3 group-hover:text-sako-green transition-colors">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

export const LandingPage: React.FC = () => {
  return (
    <div className="bg-sako-black text-white selection:bg-sako-green selection:text-black min-h-screen">
      <Nav />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden grid-bg">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-sako-green/5 blur-[120px] -z-10 rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sako-green/10 text-sako-green text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-sako-green/20 mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sako-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sako-green"></span>
            </span>
            SAKO 2.0: The Enterprise AI LMS is here
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[1.1] mb-8 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent animate-slide-up">
            Infrastructure for the <br />
            <span className="text-white">Future of </span> 
            <span className="text-sako-green neon-text">Intelligence.</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in">
            SAKO provides the premium education infrastructure needed to train the next generation of engineers. Context-aware AI tutoring, modular curriculums, and enterprise-grade controls.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/auth" className="w-full sm:w-auto bg-sako-green text-black font-black px-10 py-5 rounded-2xl flex items-center justify-center gap-3 hover:brightness-110 transition-all neon-glow text-lg">
              Start Learning <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="w-full sm:w-auto bg-white/5 border border-white/10 text-white font-bold px-10 py-5 rounded-2xl hover:bg-white/10 transition-all text-lg flex items-center justify-center gap-3">
              <Play className="w-5 h-5 fill-white" /> View Demo
            </button>
          </div>

          <div className="mt-24 relative animate-fade-in">
             <div className="absolute inset-0 bg-gradient-to-t from-sako-black via-transparent to-transparent z-10" />
             <div className="p-1 bg-gradient-to-br from-sako-green/50 via-white/10 to-transparent rounded-3xl">
                <div className="bg-sako-black rounded-[22px] overflow-hidden border border-white/5 shadow-2xl">
                   <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
                    alt="Platform Preview" 
                    className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-700"
                   />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 border-y border-sako-gray/30 bg-sako-black/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-12">Trusted by Technical Teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all hover:opacity-100 duration-500">
            <span className="text-2xl font-black tracking-tighter">ANTHROPIC</span>
            <span className="text-2xl font-black tracking-tighter">LINEAR</span>
            <span className="text-2xl font-black tracking-tighter">VERCEL</span>
            <span className="text-2xl font-black tracking-tighter">STRIPE</span>
            <span className="text-2xl font-black tracking-tighter">SCALE AI</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-sako-green text-sm font-bold uppercase tracking-widest mb-4">Core Capabilities</h2>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <h3 className="text-4xl md:text-5xl font-black max-w-2xl leading-tight">
                Built for deep technical mastery and enterprise scale.
              </h3>
              <p className="text-gray-400 max-w-sm">
                Every component of SAKO is engineered to deliver high-retention learning through advanced AI feedback loops.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Bot}
              title="Neural AI Mentorship"
              description="Context-aware AI tutors that understand your current lesson, previous errors, and code submissions in real-time."
            />
            <FeatureCard 
              icon={Layers}
              title="Modular Infrastructure"
              description="Deploy full training ecosystems with bulk access keys, role management, and granular progress tracking."
            />
            <FeatureCard 
              icon={ShieldCheck}
              title="Enterprise Security"
              description="SAML SSO, encrypted audit logs, and data isolation for corporate training programs at any scale."
            />
            <FeatureCard 
              icon={Globe}
              title="Global Grid Labs"
              description="Browser-based coding environments that scale instantly, allowing students to build in production-grade sandboxes."
            />
            <FeatureCard 
              icon={BrainCircuit}
              title="Predictive Analytics"
              description="Identify skill gaps before they happen with AI-driven reporting on completion rates and student sentiment."
            />
            <FeatureCard 
              icon={Zap}
              title="Live Hybrid Learning"
              description="Seamlessly blend recorded curriculum with live instructor sessions and synchronized workshop calendars."
            />
          </div>
        </div>
      </section>

      {/* Curriculum Showcase */}
      <section id="curriculum" className="py-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
             <div className="bg-sako-gray/20 border border-sako-gray rounded-[40px] p-2">
                <div className="bg-sako-black rounded-[32px] overflow-hidden border border-white/5 shadow-2xl">
                   <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070" className="w-full h-auto" alt="Curriculum" />
                </div>
             </div>
          </div>
          <div className="space-y-8 order-1 lg:order-2">
             <h2 className="text-sako-green text-sm font-bold uppercase tracking-widest">Global Curriculum</h2>
             <h3 className="text-4xl md:text-5xl font-black leading-tight">Engineering-first <br /> Education paths.</h3>
             <p className="text-gray-400 text-lg">Our programs are built by active industry practitioners. No fluff, just production-ready architectural training.</p>
             <div className="space-y-4">
                {["Distributed Systems", "LLM Fine-tuning", "Infrastructure as Code", "Adversarial Machine Learning"].map(item => (
                  <div key={item} className="flex items-center gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-sako-green group-hover:scale-150 transition-transform" />
                    <span className="font-bold text-gray-200 group-hover:text-white">{item}</span>
                  </div>
                ))}
             </div>
             <Link to="/auth" className="inline-flex items-center gap-2 text-sako-green font-bold group">
               Browse full directory <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
        </div>
      </section>

      {/* Enterprise / Infrastructure Showcase */}
      <section id="enterprise" className="py-32 bg-sako-gray/5 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-sako-black rounded-[40px] border border-sako-gray p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-sako-green/5 blur-[100px] -z-0" />
            
            <div className="flex-1 space-y-8 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-sako-green text-black flex items-center justify-center neon-glow">
                <Building2 className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Corporate Training, <br />
                <span className="text-sako-green">Simplified.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Onboard 10 or 10,000 employees instantly. Generate bulk license keys, assign departments, and export performance reports directly to your HRIS.
              </p>
              <div className="space-y-4">
                {[
                  "Bulk Key Management System",
                  "Departmental Progress Dashboards",
                  "Custom Learning Path Builder",
                  "Whitelabel Dashboard Options"
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sako-green" />
                    <span className="font-medium text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <button className="bg-white text-black font-black px-8 py-4 rounded-xl hover:bg-sako-green transition-all shadow-xl">
                Book Enterprise Demo
              </button>
            </div>

            <div className="flex-1 relative z-10">
               <div className="bg-sako-gray/40 border border-sako-gray rounded-3xl p-6 shadow-2xl backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-8">
                     <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-sako-green" />
                        <span className="text-sm font-bold">Admin Panel Preview</span>
                     </div>
                     <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/20" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20" />
                     </div>
                  </div>
                  <div className="space-y-4">
                     <div className="h-4 w-3/4 bg-sako-gray rounded animate-pulse" />
                     <div className="h-12 w-full bg-sako-black rounded-xl border border-sako-gray" />
                     <div className="grid grid-cols-2 gap-4">
                        <div className="h-20 bg-sako-black rounded-xl border border-sako-gray" />
                        <div className="h-20 bg-sako-black rounded-xl border border-sako-gray" />
                     </div>
                     <div className="h-24 w-full bg-sako-green/10 rounded-xl border border-sako-green/20" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Simple, Scalable Pricing.</h2>
          <p className="text-gray-400 text-lg">Choose the tier that fits your technical trajectory.</p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Individual Plan */}
          <div className="p-10 rounded-3xl bg-sako-gray/10 border border-sako-gray hover:border-white/20 transition-all flex flex-col">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Individual</h4>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-black">$29</span>
              <span className="text-gray-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-10 text-left flex-1">
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-sako-green" /> Access to all core courses
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-sako-green" /> Standard AI Chat limits
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-sako-green" /> Community support
              </li>
            </ul>
            <Link to="/auth" className="w-full py-4 text-center border border-white/10 rounded-xl font-bold hover:bg-white/5 transition-all">
              Choose Plan
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="p-10 rounded-3xl bg-sako-gray/20 border-2 border-sako-green neon-glow relative flex flex-col scale-105 z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sako-green text-black text-[10px] font-black uppercase px-4 py-1 rounded-full">
              Most Popular
            </div>
            <h4 className="text-sm font-bold text-sako-green uppercase tracking-widest mb-4">Pro Mentor</h4>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-black">$59</span>
              <span className="text-gray-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-10 text-left flex-1">
              <li className="flex items-center gap-3 text-sm text-white">
                <CheckCircle2 className="w-4 h-4 text-sako-green" /> Unlimited AI Tutoring
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <CheckCircle2 className="w-4 h-4 text-sako-green" /> 2 Live Sessions / month
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <CheckCircle2 className="w-4 h-4 text-sako-green" /> Advanced Lab Access
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <CheckCircle2 className="w-4 h-4 text-sako-green" /> Portfolio Reviews
              </li>
            </ul>
            <Link to="/auth" className="w-full py-4 text-center bg-sako-green text-black rounded-xl font-black hover:brightness-110 transition-all shadow-[0_0_20px_rgba(0,255,136,0.3)]">
              Start Pro Trial
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="p-10 rounded-3xl bg-sako-gray/10 border border-sako-gray hover:border-white/20 transition-all flex flex-col">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Enterprise</h4>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-black">Custom</span>
            </div>
            <ul className="space-y-4 mb-10 text-left flex-1">
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-sako-green" /> Bulk Access Key Engine
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-sako-green" /> Dedicated Instructor
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-sako-green" /> Custom Lab Integration
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-sako-green" /> Enterprise SLA & Support
              </li>
            </ul>
            <button className="w-full py-4 border border-white/10 rounded-xl font-bold hover:bg-white/5 transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-sako-gray/30 bg-sako-black relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-sako-green rounded flex items-center justify-center">
                <Zap className="text-black w-5 h-5 fill-black" />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase">Sako</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Leading the technological frontier through AI-enhanced education systems for serious teams.
            </p>
          </div>
          
          <div>
            <h5 className="font-bold mb-6 text-sm">Platform</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-sako-green transition-colors">Curriculum</a></li>
              <li><a href="#" className="hover:text-sako-green transition-colors">AI Mentor</a></li>
              <li><a href="#" className="hover:text-sako-green transition-colors">Live Lab</a></li>
              <li><a href="#" className="hover:text-sako-green transition-colors">Certificates</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-sm">Enterprise</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-sako-green transition-colors">Bulk Access</a></li>
              <li><a href="#" className="hover:text-sako-green transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-sako-green transition-colors">Team Dashboard</a></li>
              <li><a href="#" className="hover:text-sako-green transition-colors">Custom Paths</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-sm">Company</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-sako-green transition-colors">About</a></li>
              <li><a href="#" className="hover:text-sako-green transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-sako-green transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-sako-green transition-colors">Privacy</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-sm">Social</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-sako-green transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-sako-green transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-sako-green transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-sako-green transition-colors">Discord</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-sako-gray/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">© 2025 SAKO INFRASTRUCTURE INC. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Status: Operational</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
