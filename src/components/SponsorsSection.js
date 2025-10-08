"use client";
export default function SponsorsSection() {
    return (
        <section id="sponsors" style={{ backgroundColor: '#ECE3DA' }}>
            {/* Desktop View */}
            <div className="hidden md:block py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Frame 47 (1) */}
                    <div className="flex justify-start mb-12">
                        <img
                            src="/Frame 47 (1).png"
                            alt="Frame 47 (1)"
                            className="w-88 h-auto object-contain"
                        />
                    </div>

                    {/* Sponsor Boxes */}
                    <div className="flex flex-col gap-8">
                        <div className="relative bg-black rounded-4xl">
                            {/* TIER I Badge */}
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                                <div className="bg-[#E67E22] px-4 py-2 rounded-2xl border-4 border-black">
                                    <span className="text-black font-medium font-bayon text-2xl">TIER I</span>
                                </div>
                            </div>
                            <div className="relative bg-white rounded-4xl border-2 border-black shadow-lg overflow-hidden" style={{ marginRight: '8px', marginBottom: '8px' }}>
                                <div
                                    className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
                                ></div>
                                <div className="relative z-10">
                                    <div className="pt-12">
                                        <div className="min-h-[200px] flex items-center justify-center relative">
                                            <span className="text-gray-600 text-sm font-medium"></span>
                                            {/* Modalita Image */}
                                            <img
                                                src="/Modalità_Isolamento.png"
                                                alt="Modalita"
                                                className="absolute bottom-0 right-0 w-32 h-32 object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative bg-black rounded-4xl">
                            {/* TIER I Badge */}
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                                <div className="bg-[#F4D03F] px-4 py-2 rounded-2xl border-4 border-black">
                                    <span className="text-black font-medium font-bayon text-2xl">TIER II</span>
                                </div>
                            </div>
                            <div className="relative bg-white rounded-4xl border-2 border-black shadow-lg overflow-hidden" style={{ marginRight: '8px', marginBottom: '8px' }}>
                                <div
                                    className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
                                ></div>
                                <div className="relative z-10">
                                    <div className="pt-12">
                                        <div className="min-h-[200px] flex items-center justify-center">
                                            <span className="text-gray-600 text-sm font-medium"></span>
                                            <img
                                                src="/Modalità_Isolamento (1).png"
                                                alt="Modalita"
                                                className="absolute bottom-0 left-0 w-32 h-32 object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative bg-black rounded-4xl">
                            {/* TIER I Badge */}
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                                <div className=" bg-[#E8A5C4] px-4 py-2 rounded-2xl border-4 border-black">
                                    <span className="text-black font-medim font-bayon text-2xl">TIER III</span>
                                </div>
                            </div>
                            <div className="relative bg-white rounded-4xl border-2 border-black shadow-lg overflow-hidden" style={{ marginRight: '8px', marginBottom: '8px' }}>
                                <div
                                    className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
                                ></div>
                                <div className="relative z-10">
                                    <div className="p-8 pt-12">
                                        <div className="min-h-[200px] flex items-center justify-center">
                                            <span className="text-gray-600 text-sm font-medium"></span>
                                            <img
                                                src="/Modalità_Isolamento (2).png"
                                                alt="Modalita"
                                                className="absolute bottom-0 right-0 w-32 h-32 object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className="block md:hidden py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Frame 47 (1) */}
                    <div className="flex justify-start mb-12">
                        <img
                            src="/Frame 47 (1).png"
                            alt="Frame 47 (1)"
                            className="w-88 h-auto object-contain"
                        />
                    </div>

                    {/* Sponsor Boxes */}
                    <div className="space-y-8">
                        <div className="relative bg-black rounded-4xl pb-0.5">
                            {/* TIER I Badge */}
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                                <div className="bg-[#E67E22] px-3 py-1.5 rounded-xl border-3 border-black">
                                    <span className="text-black font-medium font-bayon text-lg">TIER I</span>
                                </div>
                            </div>
                            <div className="relative bg-white rounded-4xl border-2 border-black shadow-lg overflow-hidden" style={{ marginRight: '6px', marginBottom: '6px' }}>
                                <div
                                    className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
                                ></div>
                                <div className="relative z-10">
                                    <div className="pt-8">
                                        <div className="min-h-[150px] flex items-center justify-center relative">
                                            <span className="text-gray-600 text-sm font-medium"></span>
                                            {/* Modalita Image */}
                                            <img
                                                src="/Modalità_Isolamento.png"
                                                alt="Modalita"
                                                className="absolute bottom-0 right-0 w-24 h-24 object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative bg-black rounded-4xl pb-0.5">
                            {/* TIER I Badge */}
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                                <div className="bg-[#F4D03F] px-3 py-1.5 rounded-xl border-3 border-black">
                                    <span className="text-black font-medium font-bayon text-lg">TIER I</span>
                                </div>
                            </div>
                            <div className="relative bg-white rounded-4xl border-2 border-black shadow-lg overflow-hidden" style={{ marginRight: '6px', marginBottom: '6px' }}>
                                <div
                                    className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
                                ></div>
                                <div className="relative z-10">
                                    <div className="p-6 pt-8">
                                        <div className="min-h-[150px] flex items-center justify-center">
                                            <span className="text-gray-600 text-sm font-medium"></span>
                                            <img
                                                src="/Modalità_Isolamento (1).png"
                                                alt="Modalita"
                                                className="absolute bottom-0 left-0 w-24 h-24 object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative bg-black rounded-4xl pb-0.5">
                            {/* TIER I Badge */}
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                                <div className="bg-[#E8A5C4] px-3 py-1.5 rounded-xl border-3 border-black">
                                    <span className="text-black font-medium font-bayon text-lg">TIER I</span>
                                </div>
                            </div>
                            <div className="relative bg-white rounded-4xl border-2 border-black shadow-lg overflow-hidden" style={{ marginRight: '6px', marginBottom: '6px' }}>
                                <div
                                    className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
                                ></div>
                                <div className="relative z-10">
                                    <div className="p-6 pt-8">
                                        <div className="min-h-[150px] flex items-center justify-center">
                                            <span className="text-gray-600 text-sm font-medium"></span>
                                            <img
                                                src="/Modalità_Isolamento (2).png"
                                                alt="Modalita"
                                                className="absolute bottom-0 right-0 w-24 h-24 object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 overflow-hidden relative">
                <div className="animate-scroll">
                    <img
                        src="/Group 10 (2).png"
                        alt="Moving Disclaimer"
                        className="h-12 w-auto object-contain block"
                    />
                    <img
                        src="/Group 10 (2).png"
                        alt="Moving Disclaimer"
                        className="h-12 w-auto object-contain block"
                    />
                    <img
                        src="/Group 10 (2).png"
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
