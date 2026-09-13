import footerLogo from "../assets/logo-text.png"

const h2Class = "text-[#0f172a] text-[12px] font-bold"
const liClass = "text-[#64748b] text-[12px] font-normal py-1.5";
const Footer = () => {
    return (
        <>
            <footer className="bg-[#ffffff] border-t border-gray-100">
                <div className="flex flex-col lg:flex-row justify-between container mx-auto py-1 sm:py-12 px-5 sm:px-8 lg:px-10 bg-[#ffffff] mt-16">
                    <div>
                        <img className="mx-auto lg:mx-0" src={footerLogo} alt="footerLogo" />
                        <p className="text-[12px] text-[#64748b] font-normal py-4 max-w-75 text-center lg:text-left mx-auto lg:mx-0">Curated tools, technologies, and resources for developers building
                            modern software.</p>
                        <div className="flex gap-4 justify-center lg:justify-start text-[12px] font-semibold">
                            <a href="#">GitHub</a>
                            <a href="#">Twitter</a>
                            <a href="#">LinkedIn</a>
                        </div>
                    </div>
                    <div className="hidden lg:flex gap-20 lg:gap-60 mr-20">
                        <div>
                            <h2 className={h2Class}>PRODUCT</h2>
                            <ul>
                                <li className={liClass}>Home</li>
                                <li className={liClass}>Technologies</li>
                                <li className={liClass}>Projects</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className={h2Class}>COMPANY</h2>
                            <ul>
                                <li className={liClass}>About</li>
                                <li className={liClass}>Contact</li>
                                <li className={liClass}>Careers</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-[#0f172a] text-[12px] font-bold">LEGAL</h2>
                            <ul>
                                <li className={liClass}>Privacy Policy</li>
                                <li className={liClass}>Terms Of Service</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="flex justify-between container mx-auto py-4 px-10">
                <p className="container mx-auto text-[#94a3b8] text-[12px] font-normal">© 2026 Dev Stack. All rights reserved.</p>
                <ul className="flex gap-4 text-[#94a3b8] text-[12px] font-normal">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                </ul>
            </div>
        </>
    );
};

export default Footer;