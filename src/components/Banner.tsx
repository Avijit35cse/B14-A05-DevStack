import heroLogo from "../assets/banner-stack.png"
const Banner = () => {
    return (
        <section className="flex flex-col md:flex-row lg:flex-row gap-8 lg:gap-4 container justify-between items-center mt-12 md:mt-24 mx-auto px-4 sm:px-10">
            <div className="w-full lg:w-1/2">
                <h2
                    className="text-[40px] sm:text-[48px] lg:text-[60px] text-[#0f172a] text-center lg:text-left font-inter font-semibold leading-[1.1] mb-4 max-w-162.5 ">
                    Build Your Ideal<br />
                    <span
                        className="brand-gradient text-center">
                        Development Stack</span>
                </h2>
                <p
                    className="text-[18px] text-[#475569] text-center lg:text-left font-normal mb-8">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>
                <div
                    className="flex gap-2 justify-center lg:justify-start">
                    <button
                        className="btn bg-linear-to-r from-[#f97316] to-[#ec4899] text-[#ffffff] text-[14px] font-semibold rounded-xl">
                        Explore Technologies</button>
                    <button className="btn bg-white hover:bg-[#E2E2E2] rounded-xl border border-[#E5E7EB] text-[14px] text-[#374151] hover:text-[#374151] font-normal">Learn More</button>
                </div>
            </div>

            <img className="w-70 sm:w-87.5 lg:w-125 " src={heroLogo} alt="heroLogo" />

        </section>
    );
};

export default Banner;