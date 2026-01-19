function CardDocument() {
    return (
        <>
            <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-red-500 fill">picture_as_pdf</span>
                        <span
                            className="text-sm font-medium text-slate-900">Neural_Networks_Thesis_Final.pdf</span>
                    </div>
                </td>
                <td className="py-4 px-4">
                    <span
                        className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[11px] font-bold uppercase tracking-tight bg-emerald-100 text-emerald-700 ">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        Ready
                    </span>
                </td>
                <td className="py-4 px-6 text-right">
                    <button className="text-slate-400 hover:text-slate-600">
                        <span className="material-symbols-outlined">more_vert</span>
                    </button>
                </td>
            </tr>
        </>
    )
}

export default CardDocument