import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import EventsSection from '../components/EventsSection'
import TimelineSection from '../components/TimelineSection'
import SponsorsSection from '../components/SponsorsSection'
import FAQsSection from '../components/FAQsSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <AboutSection />
        <EventsSection />
        <TimelineSection />
        <SponsorsSection />
        <FAQsSection />
      </div>
    </div>
  );
}