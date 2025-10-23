import Link from "next/link"


function HeroSection() {
    return (

        <div className="px-6 sm:px-10 py-12 animate-fade-up">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid lg:grid-cols-2 justify-center items-center gap-x-12 gap-y-16">
                    <div>
                        <div className="max-w-3xl max-lg:mx-auto max-lg:text-center">
                            <p className="mb-2 font-medium text-primary  uppercase"><span className="rotate-90 inline-block mr-2">|</span> Best camera For Me</p>
                            <h1 className="text-slate-900 md:text-5xl text-4xl font-bold !leading-tight">Don’t waste money on gear you don’t need.</h1>
                            <p className="text-slate-600 text-base leading-relaxed mt-6">Tell us what you’re looking for with a few filters, and we’ll match you with the best cameras and lenses. </p>
                            <div className="mt-12 flex flex-wrap gap-6 max-lg:justify-center">
                                <Link href="/cameras" type="button" className="bg-primary hover:bg-black border border-primary hover:border-black transition-all text-base text-white font-medium rounded-lg px-6 py-3 cursor-pointer outline-0">Find Cameras</Link>
                                <Link href="/lenses" type="button" className="bg-transparent hover:bg-black hover:text-white hover:border-black border border-black transition-all text-base text-slate-900 font-medium rounded-lg px-6 py-3 cursor-pointer outline-0">Find Lenses</Link>
                            </div>
                        </div>
                        {/* <div className="mt-12">
                                <div className="grid sm:grid-cols-3 gap-x-4 gap-y-6 max-lg:text-center">
                                    <div className="flex flex-col">
                                        <h5 className="text-primary font-semibold text-2xl mb-2">32</h5>
                                        <p className="text-base text-slate-600 font-medium">Camera Models</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <h5 className="text-primary font-semibold text-2xl mb-2">45</h5>
                                        <p className="text-base text-slate-600 font-medium">Lense Models</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <h5 className="text-primary font-semibold text-2xl mb-2">12</h5>
                                        <p className="text-base text-slate-600 font-medium">Users </p>
                                    </div>
                                </div>
                            </div> */}
                    </div>
                    <div className="columns-2 space-y-4">
                        <div className="break-inside-avoid">
                            <img src="/01.png" alt="img-1" className="w-full h-full object-cover object-top rounded-lg max-h-[360px]" />
                        </div>
                        <div className="break-inside-avoid">
                            <img src="/03.png" alt="img-2" className="w-full h-full object-cover object-top rounded-lg max-h-[360px]" />
                        </div>
                        <div className="break-inside-avoid">
                            <img src="/02.png" alt="img-3" className="w-full h-full object-cover object-top rounded-lg max-h-[360px]" />
                        </div>
                        <div className="break-inside-avoid">
                            <img src="/04.png" alt="img-4" className="w-full h-full object-cover object-top rounded-lg max-h-[360px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default HeroSection