"use client";
import { useState } from 'react';

export default function FAQsSection() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqs = [
        {
            question: "What is RENESA HACK?",
            answer: "RENESA HACK is a 48-hour hackathon where participants collaborate to build innovative solutions to real-world problems using technology and creativity."
        },
        {
            question: "Who can participate?",
            answer: "The hackathon is open to students, professionals, and anyone passionate about technology and innovation. All skill levels are welcome!"
        },
        {
            question: "Do I need a team?",
            answer: "You can participate individually or in teams of up to 4 members. We also have team formation events before the hackathon starts."
        },
        {
            question: "What should I bring?",
            answer: "Bring your laptop, chargers, and any hardware you might need. We'll provide food, drinks, and a great coding environment!"
        },
        {
            question: "Are there prizes?",
            answer: "Yes! We have exciting prizes for different categories including Best Overall Project, Most Creative Solution, and People's Choice Award."
        },
        {
            question: "Is there a registration fee?",
            answer: "No, RENESA HACK is completely free to participate. This includes meals, snacks, and access to all workshops and events."
        }
    ]

    return (
        <section id="faqs" style={{ backgroundColor: '#ECE3DA' }} className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Frame 47(2) */}
                <div className="flex justify-start mb-12">
                    <img
                        src="/Frame 47 (2).png"
                        alt="Frame 47(2)"
                        className="w-88 h-auto object-contain"
                    />
                </div>

                <div className="space-y-8">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-black rounded-4xl pb-1 border-2 border-black flex flex-col">
                            {/* Question Part */}
                            <div
                                className={`p-8 shadow-lg cursor-pointer flex justify-between items-center ${openFAQ === index ? 'rounded-tr-4xl rounded-tl-4xl' : 'rounded-4xl'}`}
                                style={{ backgroundColor: '#ffffff', marginRight: '8px', marginBottom: openFAQ === index ? '2px' : '0px' }}
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="text-2xl font-medium text-black font-bayon">
                                    {faq.question}
                                </h3>
                                <img
                                    src={index % 2 === 0 ? "/Frame 63 (2).png" : "/Frame 63 (1).png"}
                                    alt="Expand"
                                    className={`w-8 h-8 transition-transform duration-300 ${openFAQ === index ? 'rotate-45' : ''}`}
                                />
                            </div>

                            {/* Answer Part - Only show when expanded */}
                            {openFAQ === index && (
                                <div
                                    className="rounded-br-4xl rounded-bl-4xl p-8 shadow-lg animate-fadeIn"
                                    style={{ backgroundColor: '#E3E3E3', marginRight: '8px' }}
                                >
                                    <p className="text-black leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}

                </div>
            </div>




            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        max-height: 0;
                    }
                    to {
                        opacity: 1;
                        max-height: 500px;
                    }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
            `}</style>
        </section>
    )
}
