export default function Hero() {
    return (
        <>
            <section id="home" className="w-full">
                {/* Desktop View */}
                <div className="hidden md:block">
                    <img
                        src="/HERO SECTION.png"
                        alt="Hero Image Desktop"
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Mobile View */}
                <div className="block md:hidden">
                    <img
                        src="/HERO.png"
                        alt="Hero Image Mobile"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </section>
        </>
    )
}
