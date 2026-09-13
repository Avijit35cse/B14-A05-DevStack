import { FaStar } from "react-icons/fa";
import type { ItechCardProps } from "../../types/TechType";
import { toast } from "react-toastify";

// Bagde Color 
const badgeColor: Record<string, string> = {
    Popular: "bg-[#F0F9FF] text-[#5ED1F9]",
    Versatile: "bg-[#ECFDF5] text-[#5FB3A4]",
    Fast: "bg-[#FFF7ED] text-[#ED585B]",
    "SSR/Edge": "bg-[#F3E8FF] text-[#854DD6]",
    Standard: "bg-[#ECFDF5] text-[#5FB396]",
    "Top SQL": "bg-[#EFF6FF] text-[#736FEC]",
    Cache: "bg-[#FEE2E2] text-[#DC2626]",
    Ubiquitous: "bg-[#FEF3C7] text-[#D97706]",
    Essential: "bg-[#E0F2FE] text-[#0284C7]",
    Robust: "bg-[#E0F2FE] text-[#0284C7]",
    Modern: "bg-[#ECFEFF] text-[#0891B2]",
    Container: "bg-[#E0F2FE] text-[#0284C7]"
};

const TechCards = ({ technologies, selectedTechnology, setSelectedTechnology }: ItechCardProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-5 sm:px-0">

            {technologies.map((technology) => {

                const isSelected = selectedTechnology.some((item) => item.id === technology.id)

                const handleAdd = () => {
                    setSelectedTechnology((Previous) => [...Previous, technology])
                    toast.success(`${technology.name} added to you stack !`)
                }

                return (
                    <div key={technology.id} className="p-5 rounded-2xl border border-gray-200 bg-[#FFFFFF]">
                        <div className="flex items-center justify-between gap-4 mb-4">
                            <img className="w-9" src={technology.icon} alt="techIcon" />
                            <p className={`rounded-xl text-[10.4px] font-Inter font-bold px-2 py-0.5 ${badgeColor[technology.badge]}`}>{technology.badge}</p>
                        </div>
                        <h2 className="text-[#0F172A] text-[18px] font-jakarta font-bold leading-7">{technology.name}</h2>
                        <p className="text-[#64748B] text-[12px] font-jakarta font-normal leading-[19.5px] py-2 mb-2">{technology.description}</p>
                        <div className="grid grid-cols-[1fr_auto_1fr] items-center mb-4 py-3 border-t border-t-gray-100">
                            <p className="justify-self-start text-[#475569] text-[11px]  font-medium font-jakarta px-2 py-0.5 rounded-xl bg-[#f4f7fa] whitespace-nowrap">{technology.category}</p>
                            <p className="justify-self-center text-[#64748b] text-[10px]  font-normal py-1.5">{technology.difficulty}</p>
                            <span className="flex gap-1 justify-self-end items-center whitespace-nowrap text-center">
                                <FaStar className="text-[#FBBF24] w-2.5" />
                                <p className="text-center text-[#475569] text-[11px] font-semibold leading-[16.5px]">{technology.rating}</p>
                            </span>
                        </div >
                        <button
                            onClick={() =>
                                isSelected ? toast.error(`${technology.name} is already added to your stack!`) : handleAdd()
                            }
                            className={`btn w-full rounded-xl text-[12px] ${isSelected ? "bg-gray-200 text-black" : "bg-[#0A0F1D] text-[#ffffff]"}`}>{isSelected ? "✓ Added to Stack" : "Add To Stack"}

                        </button>
                    </div>
                )
            })}
        </div>
    );
};

export default TechCards;