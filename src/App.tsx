import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectSection } from './components/ProjectSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
function App() {
  return (
    <div className="w-full min-h-screen bg-black text-[#E8DFD8] selection:bg-[#cbb59d] selection:text-black">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
export default App;
