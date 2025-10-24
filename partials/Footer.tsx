import Link from "next/link"

import { Facebook, Linkedin, Instagram, X } from "@/components/SocialVectors"

import menu from "@/menu"


function Footer() {
    return (
        <footer className="tracking-wide bg-white px-8 w-full sm:px-12 pt-12 pb-6 absolute z-100 border-2 border-t-primary">
            <div className="grid min-[1200px]:grid-cols-3 gap-12 xl:gap-16">
                <div className="min-[1200px]:max-w-sm max-w-lg w-full">
                    <Link href="javascript:void(0)">
                        <img src="https://readymadeui.com/readymadeui.svg" alt="logo" className="w-36" />
                    </Link>
                    <div className="mt-6">
                        <p className="text-slate-600 leading-relaxed text-sm">ReadymadeUI is a library of pre-designed UI components built for Tailwind CSS. It offers a collection of versatile and ready-to-use components.</p>
                    </div>
                    <ul className="mt-6 flex space-x-5">
                        <li>
                            <Link href="javascript:void(0)">
                                <Facebook />
                            </Link>
                        </li>
                        <li>
                            <Link href="javascript:void(0)">
                                <Linkedin />
                            </Link>
                        </li>
                        <li>
                            <Link href="javascript:void(0)">
                                <Instagram />
                            </Link>
                        </li>
                        <li>
                            <Link href="javascript:void(0)">
                                <X />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="min-[1200px]:col-span-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="max-lg:min-w-[140px]">
                        <h4 className="text-slate-900 font-semibold text-base relative">Menu</h4>
                        <ul className="mt-6 space-y-4">
                            {menu.map((item) => {
                                return <li>
                                <Link href={item.href} className="hover:text-slate-900 text-slate-600 text-sm font-normal">{item.text}</Link>
                            </li>
                            })}

                         
                        </ul>
                    </div>
                    <div className="max-lg:min-w-[140px]">
                        <h4 className="text-slate-900 font-semibold text-base relative">Useful Links</h4>
                        <ul className="space-y-4 mt-6">
                            <li>
                                <a href="https://dofsimulator.net/en" className="hover:text-slate-900 text-slate-600 text-sm font-normal">DOF Simulator</a>
                            </li>
                            <li>
                                <a href="https://cropfactorcalculator.com" className="hover:text-slate-900 text-slate-600 text-sm font-normal">CropFactor Calculator</a>
                            </li>
                            <li>
                                <a href="https://petapixel.com/types-of-camera-lenses/" className="hover:text-slate-900 text-slate-600 text-sm font-normal">Lenses Types</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" className="hover:text-slate-900 text-slate-600 text-sm font-normal">UIPath</a>
                            </li>
                        </ul>
                    </div>
                    <div className="max-lg:min-w-[140px]">
                        <h4 className="text-slate-900 font-semibold text-base relative">Brands</h4>
                        <ul className="space-y-4 mt-6">
                            <li>
                                <a href="https://www.nikon.com/" className="hover:text-slate-900 text-slate-600 text-sm font-normal">Nikon</a>
                            </li>
                            <li>
                                <a href="https://global.canon/en/index.html" className="hover:text-slate-900 text-slate-600 text-sm font-normal">Canon</a>
                            </li>
                            <li>
                                <a href="https://www.sony.com/en/" className="hover:text-slate-900 text-slate-600 text-sm font-normal">Sony</a>
                            </li>
                            <li>
                                <a href="https://global.fujifilm.com/en" className="hover:text-slate-900 text-slate-600 text-sm font-normal">Fujifilm</a>
                            </li>
                           
                        </ul>
                    </div>
                    <div className="max-lg:min-w-[140px]">
                        <h4 className="text-slate-900 font-semibold text-base relative">Softwares</h4>
                        <ul className="space-y-4 mt-6">
                            <li>
                                <a href="https://www.adobe.com/" className="hover:text-slate-900 text-slate-600 text-sm font-normal">Adobe</a>
                            </li>
                             <li>
                                <a href="https://affinity.serif.com/en-gb/photo/" className="hover:text-slate-900 text-slate-600 text-sm font-normal">Afinity Photo</a>
                            </li>
                            
                            <li>
                                <a href="https://www.captureone.com/en" className="hover:text-slate-900 text-slate-600 text-sm font-normal">CaptureOne</a>
                            </li>
                            <li>
                                <a href="https://www.polarr.com" className="hover:text-slate-900 text-slate-600 text-sm font-normal">Polarr</a>
                            </li>
                
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="mt-10 mb-6 border-gray-300" />
            <div className="flex flex-wrap max-md:flex-col gap-4">
                <ul className="md:flex md:space-x-6 max-md:space-y-2">
                    <li>
                        <a href="javascript:void(0)" className="hover:text-slate-900 text-slate-600 text-sm font-normal">Terms of Service</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" className="hover:text-slate-900 text-slate-600 text-sm font-normal">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" className="hover:text-slate-900 text-slate-600 text-sm font-normal">Security</a>
                    </li>
                </ul>
                <p className="text-slate-600 text-sm md:ml-auto">© 2025 Bestcamfor.me - Powered by <a className="text-primary" href="https://alexanast.gr">alexstagr</a></p>
            </div>
        </footer>

    )
}

export default Footer