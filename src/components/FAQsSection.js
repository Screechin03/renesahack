export default function FAQsSection() {
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
                <div className="text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 font-bayon mb-8">
                        FAQs
                    </h2>
                    <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
                        Got questions? We've got answers! Here are some frequently asked questions about RENESA HACK.
                    </p>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-left hover:shadow-xl transition-shadow">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">
                                    {faq.question}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}

                        <div className="bg-blue-50 rounded-lg p-8 text-center mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Still have questions?
                            </h3>
                            <p className="text-gray-700 mb-6">
                                Feel free to reach out to us. We're here to help!
                            </p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
