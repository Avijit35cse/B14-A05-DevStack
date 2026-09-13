import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/logo-text.png"

const aClass = "text-[#475569] text-[14px] font-medium font-jakarta leading-5"
const Nav = () => {
    return (
        <nav className="border-b border-gray-100 sticky top-0 bg-white">
            <div className="relative flex justify-between container mx-auto items-center py-4 px-4 sm:px-10">
                <div className="grid grid-cols-3 items-center">
                    <RxHamburgerMenu className="lg:hidden text-2xl" />
                    <img className="hidden lg:block justify-self-center" src={Logo} alt="logo" />
                </div>
                 <div className="hidden lg:flex gap-4 items-center absolute left-1/2 -translate-x-1/2">
                     <a className="text-(--primary-clr) text-[14px] font-medium font-jakarta leading-5" href="#">Home</a>
                     <a className={aClass} href="#">Technologies</a>
                     <a className={aClass} href="#">Projects</a>
                     <a className={aClass} href="#">About</a>
                     <a className={aClass} href="#">Contact</a>
                 </div>
                 <img className="lg:hidden mx-auto items-center w-30.5" src={Logo} alt="logo" />
                 <div className="flex gap-1.5 items-center text-[12px] sm:text-[14px] text-[#334155] leading-5 font-medium">
                     <button className="whitespace-nowrap">Sign In</button>
                     <button className="btn rounded-3xl bg-(--primary-clr) text-[#FFFFFF] text-[12px] sm:text-[14px] font-semibold px-3 sm:px-5 py-2">Sign Up</button>
                 </div>
            </div>
        </nav>
    );
};

export default Nav;