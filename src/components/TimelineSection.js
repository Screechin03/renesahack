export default function TimelineSection() {
    return (
        <section id="timeline" style={{ backgroundColor: '#ECE3DA' }} className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 font-bayon mb-8">
                        Timeline
                    </h2>
                    <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
                        Important dates and schedule for RENESA HACK.
                    </p>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gray-300"></div>

                            {/* Timeline items */}
                            <div className="space-y-12">
                                <div className="relative flex items-center">
                                    <div className="flex-1 text-right pr-8">
                                        <div className="bg-white rounded-lg shadow-lg p-6">
                                            <h3 className="text-lg font-bold text-gray-900">Registration Opens</h3>
                                            <p className="text-gray-600">Sign up for the hackathon</p>
                                        </div>
                                    </div>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                                    <div className="flex-1 pl-8">
                                        <span className="text-sm font-medium text-gray-500">January 15, 2025</span>
                                    </div>
                                </div>

                                <div className="relative flex items-center">
                                    <div className="flex-1 text-right pr-8">
                                        <span className="text-sm font-medium text-gray-500">February 1, 2025</span>
                                    </div>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white"></div>
                                    <div className="flex-1 pl-8">
                                        <div className="bg-white rounded-lg shadow-lg p-6">
                                            <h3 className="text-lg font-bold text-gray-900">Team Formation</h3>
                                            <p className="text-gray-600">Form teams and submit project ideas</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative flex items-center">
                                    <div className="flex-1 text-right pr-8">
                                        <div className="bg-white rounded-lg shadow-lg p-6">
                                            <h3 className="text-lg font-bold text-gray-900">Hackathon Begins</h3>
                                            <p className="text-gray-600">48-hour coding challenge starts</p>
                                        </div>
                                    </div>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white"></div>
                                    <div className="flex-1 pl-8">
                                        <span className="text-sm font-medium text-gray-500">February 15, 2025</span>
                                    </div>
                                </div>

                                <div className="relative flex items-center">
                                    <div className="flex-1 text-right pr-8">
                                        <span className="text-sm font-medium text-gray-500">February 17, 2025</span>
                                    </div>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>
                                    <div className="flex-1 pl-8">
                                        <div className="bg-white rounded-lg shadow-lg p-6">
                                            <h3 className="text-lg font-bold text-gray-900">Final Presentations</h3>
                                            <p className="text-gray-600">Present your solutions and win prizes</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
