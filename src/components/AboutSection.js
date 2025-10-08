"use client";
export default function AboutSection() {
    return (
        <section id="about" style={{ backgroundColor: '#ECE3DA' }}>
            {/* Desktop View */}
            <div className="hidden md:block py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 gap-8 mb-12">
                        <div className="flex-4 flex-col items-center">
                            <img
                                src="/Frame 53.png"
                                alt="Frame 53"
                                className="w-118 h-48 object-contain mb-6"
                            />
                            <div className="text-left max-w-xl pl-4">
                                <p className="text-gray-700 text-base leading-relaxed font-bayon">
                                    Lorem ipsum dolor sit amet consectetur. Imperdiet accumsan faucibus accumsan euismod ac interdum eget. Venenatis congue morbi nullam amet id. Dapibus pretium amet enim consectetur ultrices risus elit pretium orci. Lacinia in ipsum vulputate a nulla sit dolor tortor pharetra. In facilisi nulla facilisi in dui sed. Mauris fringilla eu turpis nibh. Et eu odio felis massa maecenas dolor morbi elementum. Donec ornare nunc id sit duis malesuada. Nisl tincidunt ultrices condimentum quis ipsum semper convallis eget diam. Sed mi nulla volutpat duis morbi enim orci turpis quam. Nulla dictum eleifend sit nisl mi eros habitant. Nec donec cras ullamcorper varius vulputate purus etiam odio. Odio dolor tristique faucibus lorem lectus orci sit pharetra pharetra. Elementum in molestie diam molestie.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="/Group 93@2x.png"
                                alt="Group 93"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className="block md:hidden py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Frame 53 - Top Left */}
                    <div className="flex justify-start mb-6">
                        <img
                            src="/Frame 53.png"
                            alt="Frame 53"
                            className="w-58  object-contain"
                        />
                    </div>

                    {/* Group 93 - Second */}
                    <div className="flex justify-center mb-8">
                        <img
                            src="/group 93@2x.png"
                            alt="Group 93"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Text Section - Third */}
                    <div className="px-4">
                        <p className="text-gray-700 text-sm leading-relaxed text-left">
                            Lorem ipsum dolor sit amet consectetur. Imperdiet accumsan faucibus accumsan euismod ac interdum eget. Venenatis congue morbi nullam amet id. Dapibus pretium amet enim consectetur ultrices risus elit pretium orci. Lacinia in ipsum vulputate a nulla sit dolor tortor pharetra. In facilisi nulla facilisi in dui sed. Mauris fringilla eu turpis nibh. Et eu odio felis massa maecenas dolor morbi elementum. Donec ornare nunc id sit duis malesuada. Nisl tincidunt ultrices condimentum quis ipsum semper convallis eget diam. Sed mi nulla volutpat duis morbi enim orci turpis quam. Nulla dictum eleifend sit nisl mi eros habitant. Nec donec cras ullamcorper varius vulputate purus etiam odio. Odio dolor tristique faucibus lorem lectus orci sit pharetra pharetra. Elementum in molestie diam molestie.
                        </p>
                    </div>
                </div>
            </div>

            {/* Animated Moving Text Section */}
            <div className="mt-12 overflow-hidden relative">
                <div className="animate-scroll">
                    <img
                        src="/Group 16 (1).png"
                        alt="Moving Disclaimer"
                        className="h-12 w-auto object-contain block"
                    />
                    <img
                        src="/Group 16 (1).png"
                        alt="Moving Disclaimer"
                        className="h-12 w-auto object-contain block"
                    />
                    <img
                        src="/Group 16 (1).png"
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
