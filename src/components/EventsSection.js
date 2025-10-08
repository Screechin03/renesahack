"use client";
export default function EventsSection() {
    return (
        <section id="events" style={{ backgroundColor: '#262626' }}>
            {/* Desktop View */}
            <div className="hidden md:block py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Frame 19 */}
                    <div className="flex justify-start mb-12">
                        <img
                            src="/Frame 19.png"
                            alt="Frame 19"
                            className="w-88 h-auto object-contain"
                        />
                    </div>

                    {/* Event Boxes - 2 columns, 3 rows */}
                    <div className="grid grid-cols-2 gap-8">
                        <div className="bg-white rounded-4xl shadow-lg overflow-hidden">
                            <div className="w-full h-48 ">
                                <img
                                    src="/Frame 26.png"
                                    alt="Event Image"
                                    className="w-full h-40 object-cover"
                                />
                            </div>
                            <div className="px-8">
                                <h3 className="text-xl font-bold text-gray-900 ">Event 1</h3>
                                <p className="text-gray-700 mb-3">Event description goes here</p>
                                <button >
                                    <img src="/frame 47.png" alt="Register Now" className="mx-auto w-30 mb-3" />
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-4xl shadow-lg overflow-hidden">
                            <div className="w-full h-48 mb-0">
                                <img
                                    src="/Frame 26 (1).png"
                                    alt="Event Image"
                                    className="w-full h-40 object-cover"
                                />
                            </div>
                            <div className="px-8">
                                <h3 className="text-xl font-bold text-gray-900 ">Event 2</h3>
                                <p className="text-gray-700 mb-3">Event description goes here</p>
                                <button >
                                    <img src="/frame 47.png" alt="Register Now" className="mx-auto w-30 mb-3" />
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-4xl shadow-lg overflow-hidden">
                            <div className="w-full h-48 mb-0">
                                <img
                                    src="/Frame 26 (2).png"
                                    alt="Event Image"
                                    className="w-full h-40 object-cover"
                                />
                            </div>
                            <div className="px-8">
                                <h3 className="text-xl font-bold text-gray-900 ">Event 3</h3>
                                <p className="text-gray-700 mb-3">Event description goes here</p>
                                <button >
                                    <img src="/frame 47.png" alt="Register Now" className="mx-auto w-30 mb-3" />
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-4xl shadow-lg overflow-hidden">
                            <div className="w-full h-48 mb-0">
                                <img
                                    src="/Frame 26 (3).png"
                                    alt="Event Image"
                                    className="w-full h-40 object-cover"
                                />
                            </div>
                            <div className="px-8">
                                <h3 className="text-xl font-bold text-gray-900">Event 4</h3>
                                <p className="text-gray-700 mb-3">Event description goes here</p>
                                <button >
                                    <img src="/frame 47.png" alt="Register Now" className="mx-auto w-30 mb-3" />
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-4xl shadow-lg overflow-hidden">
                            <div className="w-full h-48 mb-0">
                                <img
                                    src="/Frame 26 (4).png"
                                    alt="Event Image"
                                    className="w-full h-40 object-cover"
                                />
                            </div>
                            <div className="px-8">
                                <h3 className="text-xl font-bold text-gray-900">Event 5</h3>
                                <p className="text-gray-700 mb-3">Event description goes here</p>
                                <button >
                                    <img src="/frame 47.png" alt="Register Now" className="mx-auto w-30 mb-3" />
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-4xl shadow-lg overflow-hidden">
                            <div className="w-full h-48 mb-0">
                                <img
                                    src="/Frame 26 (5).png"
                                    alt="Event Image"
                                    className="w-full h-40 object-cover"
                                />
                            </div>
                            <div className="px-8">
                                <h3 className="text-xl font-bold text-gray-900 ">Event 6</h3>
                                <p className="text-gray-700 mb-3">Event description goes here</p>
                                <button >
                                    <img src="/frame 47.png" alt="Register Now" className="mx-auto w-30 mb-3" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className="block md:hidden py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Frame 19 */}
                    <div className="flex justify-start mb-12">
                        <img
                            src="/Frame 19.png"
                            alt="Frame 19"
                            className="w-88 h-auto object-contain"
                        />
                    </div>

                    {/* Event Boxes - 1 column */}
                    <div className="grid grid-cols-1 gap-6">
                        <div className="bg-white rounded-4xl shadow-lg overflow-hidden">
                            <div className="w-full h-32 mb-0">
                                <img
                                    src="/Frame 26.png"
                                    alt="Event Image"
                                    className="w-full h-28 object-cover"
                                />
                            </div>
                            <div className="px-6">
                                <h3 className="text-lg font-bold text-gray-900 ">Event 1</h3>
                                <p className="text-gray-700 mb-3 text-sm">Event description goes here</p>
                                <button >
                                    <img src="/frame 47.png" alt="Register Now" className="mx-auto w-30 mb-3" />
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-4xl shadow-lg overflow-hidden">
                            <div className="w-full h-32 mb-0">
                                <img
                                    src="/Frame 26 (1).png"
                                    alt="Event Image"
                                    className="w-full h-28 object-cover"
                                />
                            </div>
                            <div className="px-6">
                                <h3 className="text-lg font-bold text-gray-900 ">Event 2</h3>
                                <p className="text-gray-700 mb-3 text-sm">Event description goes here</p>
                                <button >
                                    <img src="/frame 47.png" alt="Register Now" className="mx-auto w-30 mb-3" />
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-4xl shadow-lg overflow-hidden">
                            <div className="w-full h-32 mb-0">
                                <img
                                    src="/Frame 26 (2).png"
                                    alt="Event Image"
                                    className="w-full h-28 object-cover"
                                />
                            </div>
                            <div className="px-6">
                                <h3 className="text-lg font-bold text-gray-900 ">Event 3</h3>
                                <p className="text-gray-700 mb-3 text-sm">Event description goes here</p>
                                <button >
                                    <img src="/frame 47.png" alt="Register Now" className="mx-auto w-30 mb-3" />
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-4xl shadow-lg overflow-hidden">
                            <div className="w-full h-32 mb-0">
                                <img
                                    src="/Frame 26 (3).png"
                                    alt="Event Image"
                                    className="w-full h-28 object-cover"
                                />
                            </div>
                            <div className="px-6">
                                <h3 className="text-lg font-bold text-gray-900 ">Event 4</h3>
                                <p className="text-gray-700 mb-3 text-sm">Event description goes here</p>
                                <button >
                                    <img src="/frame 47.png" alt="Register Now" className="mx-auto w-30 mb-3" />
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-4xl shadow-lg overflow-hidden">
                            <div className="w-full h-32 mb-0">
                                <img
                                    src="/Frame 26 (4).png"
                                    alt="Event Image"
                                    className="w-full h-28 object-cover"
                                />
                            </div>
                            <div className="px-6">
                                <h3 className="text-lg font-bold text-gray-900 ">Event 5</h3>
                                <p className="text-gray-700 mb-3 text-sm">Event description goes here</p>
                                <button >
                                    <img src="/frame 47.png" alt="Register Now" className="mx-auto w-30 mb-3" />
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-4xl shadow-lg overflow-hidden">
                            <div className="w-full h-32 mb-0">
                                <img
                                    src="/frame 26 (5).png"
                                    alt="Event Image"
                                    className="w-full h-28 object-cover"
                                />
                            </div>
                            <div className="px-6">
                                <h3 className="text-lg font-bold text-gray-900 ">Event 6</h3>
                                <p className="text-gray-700 mb-3 text-sm">Event description goes here</p>
                                <button >
                                    <img src="/frame 47.png" alt="Register Now" className="mx-auto w-30 mb-3" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 overflow-hidden relative">
                <div className="animate-scroll">
                    <img
                        src="/Group 10.png"
                        alt="Moving Disclaimer"
                        className="h-12 w-auto object-contain block"
                    />
                    <img
                        src="/Group 10.png"
                        alt="Moving Disclaimer"
                        className="h-12 w-auto object-contain block"
                    />
                    <img
                        src="/Group 10.png"
                        alt="Moving Disclaimer"
                        className="h-12 w-auto object-contain block"
                    />
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll-left {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                .animate-scroll {
                    display: flex;
                    animation: scroll-left 15s linear infinite;
                    white-space: nowrap;
                }
            `}</style>
        </section>
    )
}
