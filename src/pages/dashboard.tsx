import { useForm, type SubmitHandler } from "react-hook-form"
import CardDocument from "../components/CardDocument"
import Sidebar from "../components/Sidebar"

type FileInput = {
    file: FileList
}

function DashboardPage() {
    const { register, handleSubmit, watch } = useForm<FileInput>()

    const statusFile = watch("file")

    const onSubmit: SubmitHandler<FileInput> = (data) => {
        console.log(data);
    }

    return (
        <>
            <Sidebar />
            <div className="bg-background-light text-slate-90 font-display">
                <div className="flex min-h-screen">
                    <main className="flex-1 ml-64 min-h-screen">
                        <div className="max-w-5xl mx-auto px-8 py-8">
                            <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
                                <div className="flex flex-col gap-1">
                                    <h2 className="text-slate-900 text-3xl font-black tracking-tight">Documents</h2>
                                    <p className="text-slate-500 text-sm">You have 12 documents indexed in your
                                        research library.</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="relative w-64">
                                        <input className="w-full pl-10 pr-4 py-2 bg-white border text-black border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Search documents..." type="text" />
                                    </div>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className="mb-10">
                                <div
                                    className="relative flex flex-col items-center gap-4 rounded-xl border-2 border-dashed border-slate-300 bg-white/50/30 px-6 py-12 transition-all hover:bg-white hover:border-primary/50 group cursor-pointer">
                                    <input
                                        type="file"
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        {...register("file", {
                                            required: 'File is required'
                                        })}
                                    />
                                    <div className="pointer-events-none flex flex-col items-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                            <svg className="w-8 h-8 text-slate-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="pointer-events-none flex max-w-120 flex-col items-center gap-1 text-center">
                                        <p className="text-slate-900 text-lg font-bold">Upload Research Documents</p>
                                        <p className="text-slate-500 text-sm">
                                            Drag and drop your research PDFs here or click to browse. <br />
                                            Supported format: PDF (Max 50MB).
                                        </p>
                                    </div>
                                    {(statusFile && statusFile.length > 0) && (
                                        <button className="pointer-events-none mt-2 flex min-w-30 items-center bg-blue-700 justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold tracking-wide group-hover:bg-primary/90 transition-colors">
                                            Upload File
                                        </button>
                                    )}
                                </div>
                            </form>
                            <div className="flex items-center justify-between mb-4 px-1">
                                <h3 className="text-slate-900 text-xl font-bold tracking-tight">Your Library</h3>
                                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Sort by: <span className="text-primary cursor-pointer hover:underline font-bold">Date Added</span>
                                </div>
                            </div>
                            <div
                                className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr
                                            className="bg-slate-50/50 text-slate-500 text-[11px] font-bold uppercase tracking-widest">
                                            <th className="py-4 px-4">Name</th>
                                            <th className="py-4 px-4 w-40">Status</th>
                                            <th className="py-4 px-6 w-10"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <CardDocument />
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-6 flex items-center justify-between px-1">
                                <p className="text-sm text-slate-500">Showing 4 of 12 documents</p>
                                <div className="flex gap-2">
                                    <button
                                        className="px-4 py-1.5 text-sm font-medium border border-slate-200 rounded-lg hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                                    >Previous</button>
                                    <button
                                        className="px-4 py-1.5 text-sm font-medium border border-slate-200 rounded-lg bg-white hover:bg-slate-50 transition-colors">Next</button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default DashboardPage