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

        <img
          src="/Union@2x.png"
          alt="Footer Section"
          className="w-full h-auto object-cover"
        />
        <div className="relative hidden md:block">
          <img
            src="/Frame 12.png"
            alt="Footer Section"
            className="w-full h-auto object-cover"
          />

          {/* Dummy Links - 3 Column Layout */}
          <div className="absolute top-1/4 left-1/11 grid grid-cols-3 gap-8 text-white">
            {/* Column 1 */}
            <div className="flex flex-col space-y-3">
              <h4 className="font-bold text-lg mb-2">Quick Links</h4>
              <a href="#" className="hover:text-orange-300 transition-colors">Home</a>
              <a href="#" className="hover:text-orange-300 transition-colors">About</a>
              <a href="#" className="hover:text-orange-300 transition-colors">Events</a>
              <a href="#" className="hover:text-orange-300 transition-colors">Timeline</a>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col space-y-3">
              <h4 className="font-bold text-lg mb-2">Resources</h4>
              <a href="#" className="hover:text-orange-300 transition-colors">Sponsors</a>
              <a href="#" className="hover:text-orange-300 transition-colors">FAQs</a>
              <a href="#" className="hover:text-orange-300 transition-colors">Guidelines</a>
              <a href="#" className="hover:text-orange-300 transition-colors">Support</a>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col space-y-3">
              <h4 className="font-bold text-lg mb-2">Connect</h4>
              <a href="#" className="hover:text-orange-300 transition-colors">Contact Us</a>
              <a href="#" className="hover:text-orange-300 transition-colors">Social Media</a>
              <a href="#" className="hover:text-orange-300 transition-colors">Newsletter</a>
              <a href="#" className="hover:text-orange-300 transition-colors">Updates</a>
            </div>
          </div>

          {/* New Logo 1 positioned in middle right */}
          <img
            src="/NEW LOGO 1.png"
            alt="New Logo"
            className="absolute top-1/3 right-1/6 transform -translate-y-1/2 w-60 h-60 object-contain"
          />
        </div>
        <div className="relative block md:hidden flex flex-col items-center -mt-20 ">
          <img
            src="/Frame 12.png"
            alt="Footer Section"
            className="w-full h-auto object-cover"
          />

          {/* Dummy Links - 3 Column Layout */}
          <div className=" grid grid-cols-3 gap-8 text-white px-4">
            {/* Column 1 */}
            <div className="flex flex-col space-y-3">
              <h4 className="font-bold text-lg mb-2">Quick Links</h4>
              <a href="#" className="hover:text-orange-300 transition-colors">Home</a>
              <a href="#" className="hover:text-orange-300 transition-colors">About</a>
              <a href="#" className="hover:text-orange-300 transition-colors">Events</a>
              <a href="#" className="hover:text-orange-300 transition-colors">Timeline</a>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col space-y-3">
              <h4 className="font-bold text-lg mb-2">Resources</h4>
              <a href="#" className="hover:text-orange-300 transition-colors">Sponsors</a>
              <a href="#" className="hover:text-orange-300 transition-colors">FAQs</a>
              <a href="#" className="hover:text-orange-300 transition-colors">Guidelines</a>
              <a href="#" className="hover:text-orange-300 transition-colors">Support</a>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col space-y-3">
              <h4 className="font-bold text-lg mb-2">Connect</h4>
              <a href="#" className="hover:text-orange-300 transition-colors">Contact Us</a>
              <a href="#" className="hover:text-orange-300 transition-colors">Social Media</a>
              <a href="#" className="hover:text-orange-300 transition-colors">Newsletter</a>
              <a href="#" className="hover:text-orange-300 transition-colors">Updates</a>
            </div>
          </div>

          {/* New Logo 1 positioned in middle right */}
          <img
            src="/NEW LOGO 1.png"
            alt="New Logo"
            className="w-60 h-60 object-contain -mt-10"
          />
        </div>

      </div>

    </div>
  );
}