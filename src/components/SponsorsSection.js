export default function SponsorsSection() {
    return (
        <section id="sponsors" style={{ backgroundColor: '#ECE3DA' }}>
            {/* Desktop View */}
            <div className="hidden md:block py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Frame 47 (1) */}
                    <div className="flex justify-start mb-12">
                        <img
                            src="/frame 47 (1).png"
                            alt="Frame 47 (1)"
                            className="w-88 h-auto object-contain"
                        />
                    </div>

                    {/* Sponsor Boxes */}
                    <div className="flex flex-col gap-8">
                        <div className="bg-black rounded-4xl   ">
                            <div className="relative bg-white rounded-4xl border-4 border-black shadow-lg overflow-hidden" style={{ marginRight: '8px', marginBottom: '8px' }}>
                                <div
                                    className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
                                ></div>
                                <div className="relative z-10">
                                    <div className="p-8">
                                        <div className="min-h-[200px] flex items-center justify-center">
                                            <span className="text-gray-600 text-sm font-medium"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black rounded-4xl">
                            <div className="relative bg-white rounded-4xl border-4 border-black shadow-lg overflow-hidden" style={{ marginRight: '8px', marginBottom: '8px' }}>
                                <div
                                    className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
                                ></div>
                                <div className="relative z-10">
                                    <div className="p-8">
                                        <div className="min-h-[200px] flex items-center justify-center">
                                            <span className="text-gray-600 text-sm font-medium"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black rounded-4xl ">
                            <div className="relative bg-white rounded-4xl border-4 border-black shadow-lg overflow-hidden" style={{ marginRight: '8px', marginBottom: '8px' }}>
                                <div
                                    className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
                                ></div>
                                <div className="relative z-10">
                                    <div className="p-8">
                                        <div className="min-h-[200px] flex items-center justify-center">
                                            <span className="text-gray-600 text-sm font-medium"></span>
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
                            src="/frame 47 (1).png"
                            alt="Frame 47 (1)"
                            className="w-88 h-auto object-contain"
                        />
                    </div>

                    {/* Sponsor Boxes */}
                    <div className="space-y-6">
                        <div className="bg-black rounded-4xl pb-0.5">
                            <div className="relative bg-white rounded-4xl border-2 border-black shadow-lg overflow-hidden" style={{ marginRight: '6px', marginBottom: '6px' }}>
                                <div
                                    className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
                                ></div>
                                <div className="relative z-10">
                                    <div className="p-6">
                                        <div className="min-h-[150px] flex items-center justify-center">
                                            <span className="text-gray-600 text-sm font-medium">Sponsor Content</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black rounded-4xl pb-0.5">
                            <div className="relative bg-white rounded-4xl border-2 border-black shadow-lg overflow-hidden" style={{ marginRight: '6px', marginBottom: '6px' }}>
                                <div
                                    className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
                                ></div>
                                <div className="relative z-10">
                                    <div className="p-6">
                                        <div className="min-h-[150px] flex items-center justify-center">
                                            <span className="text-gray-600 text-sm font-medium">Sponsor Content</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black rounded-4xl pb-0.5">
                            <div className="relative bg-white rounded-4xl border-2 border-black shadow-lg overflow-hidden" style={{ marginRight: '6px', marginBottom: '6px' }}>
                                <div
                                    className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
                                ></div>
                                <div className="relative z-10">
                                    <div className="p-6">
                                        <div className="min-h-[150px] flex items-center justify-center">
                                            <span className="text-gray-600 text-sm font-medium">Sponsor Content</span>
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
