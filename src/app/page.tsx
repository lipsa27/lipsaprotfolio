import PageReveal from '@/components/PageReveal';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import WorkProcess from '@/components/WorkProcess';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import WireframesSection from '@/components/WireframesSection';
import AIWorkflowSection from '@/components/AIWorkflowSection';
import TestimonialsAndMetrics from '@/components/TestimonialsAndMetrics';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      {/* Intro Page Reveal Loader */}
      <PageReveal />

      {/* Main Navigation Header */}
      <Header />

      {/* Main Single Page Sections */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Process Section */}
        <WorkProcess />

        {/* Case Studies Section */}
        <CaseStudiesSection />

        {/* Wireframes Gallery Section */}
        <WireframesSection />

        {/* AI Workflow Section */}
        <AIWorkflowSection />

        {/* Testimonials & Stats Section */}
        <TestimonialsAndMetrics />

        {/* Contact Form Section */}
        <ContactSection />
      </main>
    </>
  );
}
