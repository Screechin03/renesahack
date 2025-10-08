"use client";
export default function TimelineSection() {
    return (
        <section id="timeline" style={{ backgroundColor: '#ECE3DA' }}>
            {/* Desktop View */}
            <div className="hidden md:block py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Frame 53(1) */}
                    <div className="flex justify-start mb-12">
                        <img
                            src="/Frame 53 (1).png"
                            alt="Frame 53(1)"
                            className="w-88 h-auto object-contain"
                        />
                    </div>

                    {/* Timeline Boxes */}
                    <div className="bg-black rounded-4xl pb-2 pr-0.5 border-3 border-black flex flex-col gap-1">
                        <div className="rounded-tr-4xl rounded-tl-4xl p-8 shadow-lg" style={{ backgroundColor: '#E67E22', marginRight: '8px', marginBottom: '2px' }}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-3xl font-bold text-black mb-2 font-bayon">EVENT NAME</h3>
                                    <p className="text-black text-sm">small description of the event</p>
                                </div>
                                <div className="text-right">
                                    <h4 className="text-3xl font-bold text-black font-bayon">DAY 01</h4>
                                    <p className="text-black text-sm">DATE : 69.69.6969 | TIME : 69:69 AM/PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 shadow-lg" style={{ backgroundColor: '#E8A5C4', marginRight: '8px', marginBottom: '2px' }}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-3xl font-bold text-black mb-2 font-bayon">EVENT NAME</h3>
                                    <p className="text-black text-sm">small description of the event</p>
                                </div>
                                <div className="text-right">
                                    <h4 className="text-3xl font-bold text-black font-bayon">DAY 01</h4>
                                    <p className="text-black text-sm">DATE : 69.69.6969 | TIME : 69:69 AM/PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-br-4xl rounded-bl-4xl p-8 shadow-lg" style={{ backgroundColor: '#F4D03F', marginRight: '8px' }}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-3xl font-bold text-black mb-2 font-bayon">EVENT NAME</h3>
                                    <p className="text-black text-sm">small description of the event</p>
                                </div>
                                <div className="text-right">
                                    <h4 className="text-3xl font-bold text-black font-bayon">DAY 01</h4>
                                    <p className="text-black text-sm">DATE : 69.69.6969 | TIME : 69:69 AM/PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Day 2 Timeline Boxes */}
                    <div className="bg-black rounded-4xl pb-2 pr-0.5 border-3 border-black flex flex-col gap-1 mt-8">
                        <div className="rounded-tr-4xl rounded-tl-4xl p-8 shadow-lg" style={{ backgroundColor: '#E67E22', marginRight: '8px', marginBottom: '2px' }}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-3xl font-bold text-black mb-2 font-bayon">EVENT NAME</h3>
                                    <p className="text-black text-sm">small description of the event</p>
                                </div>
                                <div className="text-right">
                                    <h4 className="text-3xl font-bold text-black font-bayon">DAY 02</h4>
                                    <p className="text-black text-sm">DATE : 69.69.6969 | TIME : 69:69 AM/PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 shadow-lg" style={{ backgroundColor: '#E8A5C4', marginRight: '8px', marginBottom: '2px' }}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-3xl font-bold text-black mb-2 font-bayon">EVENT NAME</h3>
                                    <p className="text-black text-sm">small description of the event</p>
                                </div>
                                <div className="text-right">
                                    <h4 className="text-3xl font-bold text-black font-bayon">DAY 02</h4>
                                    <p className="text-black text-sm">DATE : 69.69.6969 | TIME : 69:69 AM/PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-br-4xl rounded-bl-4xl p-8 shadow-lg" style={{ backgroundColor: '#F4D03F', marginRight: '8px' }}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-3xl font-bold text-black mb-2 font-bayon">EVENT NAME</h3>
                                    <p className="text-black text-sm">small description of the event</p>
                                </div>
                                <div className="text-right">
                                    <h4 className="text-3xl font-bold text-black font-bayon">DAY 02</h4>
                                    <p className="text-black text-sm">DATE : 69.69.6969 | TIME : 69:69 AM/PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Day 3 Timeline Boxes */}
                    <div className="bg-black rounded-4xl pb-2 pr-0.5 border-3 border-black flex flex-col gap-1 mt-8">
                        <div className="rounded-tr-4xl rounded-tl-4xl p-8 shadow-lg" style={{ backgroundColor: '#E67E22', marginRight: '8px', marginBottom: '2px' }}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-3xl font-bold text-black mb-2 font-bayon">EVENT NAME</h3>
                                    <p className="text-black text-sm">small description of the event</p>
                                </div>
                                <div className="text-right">
                                    <h4 className="text-3xl font-bold text-black font-bayon">DAY 03</h4>
                                    <p className="text-black text-sm">DATE : 69.69.6969 | TIME : 69:69 AM/PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 shadow-lg" style={{ backgroundColor: '#E8A5C4', marginRight: '8px', marginBottom: '2px' }}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-3xl font-bold text-black mb-2 font-bayon">EVENT NAME</h3>
                                    <p className="text-black text-sm">small description of the event</p>
                                </div>
                                <div className="text-right">
                                    <h4 className="text-3xl font-bold text-black font-bayon">DAY 03</h4>
                                    <p className="text-black text-sm">DATE : 69.69.6969 | TIME : 69:69 AM/PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-br-4xl rounded-bl-4xl p-8 shadow-lg" style={{ backgroundColor: '#F4D03F', marginRight: '8px' }}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-3xl font-bold text-black mb-2 font-bayon">EVENT NAME</h3>
                                    <p className="text-black text-sm">small description of the event</p>
                                </div>
                                <div className="text-right">
                                    <h4 className="text-3xl font-bold text-black font-bayon">DAY 03</h4>
                                    <p className="text-black text-sm">DATE : 69.69.6969 | TIME : 69:69 AM/PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className="block md:hidden py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Frame 53(1) */}
                    <div className="flex justify-start mb-12">
                        <img
                            src="/Frame 53 (1).png"
                            alt="Frame 53(1)"
                            className="w-88 h-auto object-contain"
                        />
                    </div>

                    {/* Timeline Boxes */}
                    <div className="bg-black rounded-4xl pb-0.5 border-3 border-black flex flex-col gap-1">
                        <div className="rounded-tr-4xl rounded-tl-4xl p-6 shadow-lg" style={{ backgroundColor: '#E67E22', marginRight: '6px', marginBottom: '1px' }}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-2 font-bayon">EVENT NAME</h3>
                                    <p className="text-black text-xs">small description of the event</p>
                                </div>
                                <div className="text-right">
                                    <h4 className="text-xl font-bold text-black font-bayon">DAY 01</h4>
                                    <p className="text-black text-xs">DATE : 69.69.6969</p>
                                    <p className="text-black text-xs">TIME : 69:69 AM/PM</p>
                                </div>
                            </div>
                        </div>

                        <div className=" p-6 shadow-lg" style={{ backgroundColor: '#E8A5C4', marginRight: '6px', marginBottom: '1px' }}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-2 font-bayon">EVENT NAME</h3>
                                    <p className="text-black text-xs">small description of the event</p>
                                </div>
                                <div className="text-right">
                                    <h4 className="text-xl font-bold text-black font-bayon">DAY 01</h4>
                                    <p className="text-black text-xs">DATE : 69.69.6969</p>
                                    <p className="text-black text-xs">TIME : 69:69 AM/PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-br-4xl rounded-bl-4xl p-6 shadow-lg" style={{ backgroundColor: '#F4D03F', marginRight: '6px' }}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-2 font-bayon">EVENT NAME</h3>
                                    <p className="text-black text-xs">small description of the event</p>
                                </div>
                                <div className="text-right">
                                    <h4 className="text-xl font-bold text-black font-bayon">DAY 01</h4>
                                    <p className="text-black text-xs">DATE : 69.69.6969</p>
                                    <p className="text-black text-xs">TIME : 69:69 AM/PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Day 2 Timeline Boxes */}
                    <div className="bg-black rounded-4xl pb-0.5 border-3 border-black flex flex-col gap-1 mt-8">
                        <div className="rounded-tr-4xl rounded-tl-4xl p-6 shadow-lg" style={{ backgroundColor: '#E67E22', marginRight: '6px', marginBottom: '1px' }}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-2 font-bayon">EVENT NAME</h3>
                                    <p className="text-black text-xs">small description of the event</p>
                                </div>
                                <div className="text-right">
                                    <h4 className="text-xl font-bold text-black font-bayon">DAY 02</h4>
                                    <p className="text-black text-xs">DATE : 69.69.6969</p>
                                    <p className="text-black text-xs">TIME : 69:69 AM/PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 shadow-lg" style={{ backgroundColor: '#E8A5C4', marginRight: '6px', marginBottom: '1px' }}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-2 font-bayon">EVENT NAME</h3>
                                    <p className="text-black text-xs">small description of the event</p>
                                </div>
                                <div className="text-right">
                                    <h4 className="text-xl font-bold text-black font-bayon">DAY 02</h4>
                                    <p className="text-black text-xs">DATE : 69.69.6969</p>
                                    <p className="text-black text-xs">TIME : 69:69 AM/PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-br-4xl rounded-bl-4xl p-6 shadow-lg" style={{ backgroundColor: '#F4D03F', marginRight: '6px' }}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-2 font-bayon">EVENT NAME</h3>
                                    <p className="text-black text-xs">small description of the event</p>
                                </div>
                                <div className="text-right">
                                    <h4 className="text-xl font-bold text-black font-bayon">DAY 02</h4>
                                    <p className="text-black text-xs">DATE : 69.69.6969</p>
                                    <p className="text-black text-xs">TIME : 69:69 AM/PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Day 3 Timeline Boxes */}
                    <div className="bg-black rounded-4xl pb-0.5 border-3 border-black flex flex-col gap-1 mt-8">
                        <div className="rounded-tr-4xl rounded-tl-4xl p-6 shadow-lg" style={{ backgroundColor: '#E67E22', marginRight: '6px', marginBottom: '1px' }}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-2 font-bayon">EVENT NAME</h3>
                                    <p className="text-black text-xs">small description of the event</p>
                                </div>
                                <div className="text-right">
                                    <h4 className="text-xl font-bold text-black font-bayon">DAY 03</h4>
                                    <p className="text-black text-xs">DATE : 69.69.6969</p>
                                    <p className="text-black text-xs">TIME : 69:69 AM/PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 shadow-lg" style={{ backgroundColor: '#E8A5C4', marginRight: '6px', marginBottom: '1px' }}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-2 font-bayon">EVENT NAME</h3>
                                    <p className="text-black text-xs">small description of the event</p>
                                </div>
                                <div className="text-right">
                                    <h4 className="text-xl font-bold text-black font-bayon">DAY 03</h4>
                                    <p className="text-black text-xs">DATE : 69.69.6969</p>
                                    <p className="text-black text-xs">TIME : 69:69 AM/PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-br-4xl rounded-bl-4xl p-6 shadow-lg" style={{ backgroundColor: '#F4D03F', marginRight: '6px' }}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-2 font-bayon">EVENT NAME</h3>
                                    <p className="text-black text-xs">small description of the event</p>
                                </div>
                                <div className="text-right">
                                    <h4 className="text-xl font-bold text-black font-bayon">DAY 03</h4>
                                    <p className="text-black text-xs">DATE : 69.69.6969</p>
                                    <p className="text-black text-xs">TIME : 69:69 AM/PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 overflow-hidden relative">
                <div className="animate-scroll">
                    <img
                        src="/Group 10 (1).png"
                        alt="Moving Disclaimer"
                        className="h-12 w-auto object-contain block"
                    />
                    <img
                        src="/Group 10 (1).png"
                        alt="Moving Disclaimer"
                        className="h-12 w-auto object-contain block"
                    />
                    <img
                        src="/Group 10 (1).png"
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
