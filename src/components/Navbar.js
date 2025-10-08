"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // Handle smooth scrolling and active state
    const handleNavClick = (sectionId) => {
        setActiveSection(sectionId)
        setIsMobileMenuOpen(false) // Close mobile menu when navigating

        if (sectionId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
            const element = document.getElementById(sectionId)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    // Update active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'events', 'timeline', 'sponsors', 'faqs']
            const scrollPosition = window.scrollY + 100

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(sectionId)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <nav style={{ backgroundColor: '#ECE3DA' }} className="fixed top-0 left-0 right-0 z-50 shadow-sm border-b-2 border-gray-700 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <img
                                src="/frame 80.png"
                                alt="RENESA HACK Logo"
                                className="h-10 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:block font-bayon text-2xl">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <button
                                onClick={() => handleNavClick('home')}
                                className={`px-3 py-2 font-medium transition-colors duration-300 ${activeSection === 'home'
                                    ? 'text-neutral-700'
                                    : 'text-neutral-400 hover:text-neutral-700'
                                    }`}
                            >
                                HOME
                            </button>
                            <button
                                onClick={() => handleNavClick('about')}
                                className={`px-3 py-2 font-medium transition-colors duration-300 ${activeSection === 'about'
                                    ? 'text-neutral-700'
                                    : 'text-neutral-400 hover:text-neutral-700'
                                    }`}
                            >
                                ABOUT US
                            </button>
                            <button
                                onClick={() => handleNavClick('events')}
                                className={`px-3 py-2 font-medium transition-colors duration-300 ${activeSection === 'events'
                                    ? 'text-neutral-700'
                                    : 'text-neutral-400 hover:text-neutral-700'
                                    }`}
                            >
                                EVENTS
                            </button>
                            <button
                                onClick={() => handleNavClick('timeline')}
                                className={`px-3 py-2 font-medium transition-colors duration-300 ${activeSection === 'timeline'
                                    ? 'text-neutral-700'
                                    : 'text-neutral-400 hover:text-neutral-700'
                                    }`}
                            >
                                TIMELINE
                            </button>
                            <button
                                onClick={() => handleNavClick('sponsors')}
                                className={`px-3 py-2 font-medium transition-colors duration-300 ${activeSection === 'sponsors'
                                    ? 'text-neutral-700'
                                    : 'text-neutral-400 hover:text-neutral-700'
                                    }`}
                            >
                                SPONSORS
                            </button>
                            <button
                                onClick={() => handleNavClick('faqs')}
                                className={`px-3 py-2 font-medium transition-colors duration-300 ${activeSection === 'faqs'
                                    ? 'text-neutral-700'
                                    : 'text-neutral-400 hover:text-neutral-700'
                                    }`}
                            >
                                FAQS
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-gray-900 hover:text-black focus:outline-none focus:text-black"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-30 md:hidden">
                    {/* Black transparent background */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-70"
                        onClick={toggleMobileMenu}
                    ></div>

                    {/* Menu content */}
                    <div className="fixed top-16 left-0 right-0 bg-black bg-opacity-90 border-t border-gray-600">
                        <div className="px-4 py-6 space-y-4">
                            <button
                                onClick={() => handleNavClick('home')}
                                className={`block w-full text-left px-4 py-3 font-bayon text-xl transition-colors duration-300 ${activeSection === 'home'
                                    ? 'text-white'
                                    : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                HOME
                            </button>
                            <button
                                onClick={() => handleNavClick('about')}
                                className={`block w-full text-left px-4 py-3 font-bayon text-xl transition-colors duration-300 ${activeSection === 'about'
                                    ? 'text-white'
                                    : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                ABOUT US
                            </button>
                            <button
                                onClick={() => handleNavClick('events')}
                                className={`block w-full text-left px-4 py-3 font-bayon text-xl transition-colors duration-300 ${activeSection === 'events'
                                    ? 'text-white'
                                    : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                EVENTS
                            </button>
                            <button
                                onClick={() => handleNavClick('timeline')}
                                className={`block w-full text-left px-4 py-3 font-bayon text-xl transition-colors duration-300 ${activeSection === 'timeline'
                                    ? 'text-white'
                                    : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                TIMELINE
                            </button>
                            <button
                                onClick={() => handleNavClick('sponsors')}
                                className={`block w-full text-left px-4 py-3 font-bayon text-xl transition-colors duration-300 ${activeSection === 'sponsors'
                                    ? 'text-white'
                                    : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                SPONSORS
                            </button>
                            <button
                                onClick={() => handleNavClick('faqs')}
                                className={`block w-full text-left px-4 py-3 font-bayon text-xl transition-colors duration-300 ${activeSection === 'faqs'
                                    ? 'text-white'
                                    : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                FAQS
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
