import { Suspense, use, useState } from "react";
import TechCards from "./TechnologyCards/TechCards";
import Stack from "./TechnologyCards/Stack";
import type { Itech, ItechProps } from "../types/TechType";



const Technologies = ({techPromise}: ItechProps) => {
    const [selectedTechnology, setSelectedTechnology] = useState<Itech[]>([])
    const technologies = use(techPromise)

    return (
        <section className="container mx-auto mb-10 sm:px-8 xl:px-10 mt-16 sm:mt-20 lg:mt-24 xl:mt-28">
            <div className="flex flex-col gap-2 py-8 px-4 sm:px-0">
                <h2 className="text-[30px] text-[#0f172a] sm:text-[34px] lg:text-[36px] text-center lg:text-left  font-inter font-extrabold leading-9">Explore the <span className="bg-linear-to-r from-[#ec4899] to-[#8b5cf6] bg-clip-text text-transparent block lg:inline">Technologies</span></h2>
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-6 text-center lg:text-left text-[#64748B] font-normal mb-8 ">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-5">
                <Suspense fallback={<div className="flex items-center justify-center w-full">
                    <span className="loading loading-spinner text-secondary"></span>
                    </div>}>
                    <>
                        <div>
                            <TechCards technologies={technologies}
                                selectedTechnology={selectedTechnology}
                                setSelectedTechnology={setSelectedTechnology} />
                        </div>
                        <div>
                            <Stack technologies={selectedTechnology}
                                setSelectedTechnology={setSelectedTechnology} />
                        </div>
                    </>
                </Suspense>
            </div>
        </section>
    );
};

export default Technologies;