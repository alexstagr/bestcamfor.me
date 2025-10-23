

function MountsFilter() {
    return (
        <div>
                <h6 className="text-slate-900 text-sm font-semibold">Mount</h6>
                <div className="flex flex-wrap gap-3 mt-4">
                    <button type="button" className="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14">Z Mount</button>
                    <button type="button" className="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14">E Mount</button>
                    <button type="button" className="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14">R Mount</button>
                </div>
            </div>
    )
}

export default MountsFilter