export default function SponsorsSection() {
    return (
        <section id="sponsors" style={{ backgroundColor: '#ECE3DA' }} className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 font-bayon mb-8">
                        Sponsors
                    </h2>
                    <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
                        Thank you to our amazing sponsors who make RENESA HACK possible.
                    </p>

                    <div className="space-y-12">
                        {/* Title Sponsors */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Title Sponsors</h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                                    <div className="h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                                        <span className="text-white text-xl font-bold">SPONSOR 1</span>
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-900">Technology Partner</h4>
                                </div>

                                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                                    <div className="h-24 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg mb-4 flex items-center justify-center">
                                        <span className="text-white text-xl font-bold">SPONSOR 2</span>
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-900">Platinum Partner</h4>
                                </div>
                            </div>
                        </div>

                        {/* Gold Sponsors */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Gold Sponsors</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                                    <div className="h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg mb-3 flex items-center justify-center">
                                        <span className="text-white font-bold">GOLD 1</span>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                                    <div className="h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg mb-3 flex items-center justify-center">
                                        <span className="text-white font-bold">GOLD 2</span>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                                    <div className="h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg mb-3 flex items-center justify-center">
                                        <span className="text-white font-bold">GOLD 3</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Become a Sponsor CTA */}
                        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Become a Sponsor</h3>
                            <p className="text-gray-700 mb-6">
                                Join us in supporting the next generation of innovators and connect with talented developers.
                            </p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                                Partner With Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
