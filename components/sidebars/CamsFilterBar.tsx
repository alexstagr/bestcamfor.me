import BrandsFilter from "@/filters/BrandsFilter"
import MountsFilter from "@/filters/MountsFilter"

function CamsFilterBar() {
    return (
        <div className="w-full max-w-[300px] bg-white shrink-0 px-6 sm:px-8 min-h-screen py-6 z-100">
            <div className="flex items-center border-b border-gray-300 pb-2 mb-6">
                <h3 className="text-slate-900 text-lg font-semibold">Filter</h3>
                <button type="button" className="text-sm text-red-500 font-semibold ml-auto cursor-pointer">Clear all</button>
            </div>

            <BrandsFilter />
            <hr className="my-6 border-gray-300" />

            <MountsFilter/>
            <hr className="my-6 border-gray-300" />



        </div>
    )
}

export default CamsFilterBar