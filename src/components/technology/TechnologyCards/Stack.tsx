
import { RxCross2 } from "react-icons/rx";
import type { IstackProps } from "../../types/TechType";
import { toast } from "react-toastify";


const Stack = ({ technologies , setSelectedTechnology }: IstackProps) => {

    const handleCross =(id: string) =>{
    setSelectedTechnology((previous)=> previous.filter((technology) =>technology.id !== id) )
    }
    return (
        <div className="px-5 sm:px-0">
            <div className="border border-gray-300 rounded-xl p-5 bg-[#FFFFFF]">
                <h2 className="text-[16px] font-bold leading-6 p-1">Your Stack</h2>
                <p className="text-[12px] font-jakarta leading-1 text-[#64748b] mb-2 p-1">{technologies.length > 0 ? `${technologies.length} Technology Selected` : `No technologies selected yet`}</p>
                {technologies.length === 0 && (
                    <div className="flex justify-center py-2 w-full">
                        <p className="badge badge-neutral badge-dash text-center text-[#64748b] text-[12px] w-full p-6" >Your stack is empty</p>
                    </div>
                )}
                {technologies.map((technology)=>(
                    <div key={technology.id}
                    className="py-2 px-4 mb-2 rounded-2xl border border-gray-200 flex gap-4 items-center ">
                        <img className="w-8" src={technology.icon} alt={technology.name} />
                        <div className="flex gap-4 justify-between items-center w-full">
                            <div>
                                <h3 className="text-[10px] font-semibold">{technology.name}</h3>
                                <p className="text-[10px] text-[#64748b]">{technology.category}</p>
                            </div>
                            <RxCross2 onClick={()=>{handleCross(technology.id)
                                toast.error(`${technology.name} removed from your stack !`)
                            }}/>
                        </div>
                    </div>
            
                ))}
                { technologies.length > 0 && (
                    <button
                onClick={()=> {setSelectedTechnology([])
                    toast.error(`All technologies removed from your stack !`)
                }}
                className="btn rounded-xl border border-red-500 w-full text-red-500 hover:bg-red-200 ">Remove All</button>
                )}
            </div>
        </div>
    );
};

export default Stack;