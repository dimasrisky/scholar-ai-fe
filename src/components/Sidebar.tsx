import { useNavigate } from "react-router-dom"

function Sidebar() {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        window.location.href = '/'
    }

    return (
        <>
            <aside className="w-64 border-r border-slate-200 bg-white flex flex-col fixed h-full z-20">
                <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white shrink-0">
                            <span className="material-symbols-outlined text-2xl fill">school</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-slate-900 text-base font-bold leading-none tracking-tight">Scholar AI</h1>
                            <p className="text-slate-500 text-[10px] font-semibold uppercase tracking-wider mt-1">Document Assistant</p>
                        </div>
                    </div>
                    <nav className="flex flex-col gap-1.5 flex-1">
                        <a onClick={() => navigate('/dashboard')} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors group">
                            <span className="material-symbols-outlined text-[22px] group-hover:text-slate-900">dashboard</span>
                            <span className="text-sm font-medium">Dashboard</span>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary hover:bg-slate-100 text-slate-600 shadow-sm shadow-primary/20 transition-colors" href="#">
                            <span className="material-symbols-outlined fill text-[22px]">description</span>
                            <span className="text-sm font-semibold">Documents</span>
                        </a>
                        <a onClick={() => navigate('/dashboard/chat')} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors group">
                            <span className="material-symbols-outlined text-[22px] group-hover:text-slate-900">chat_bubble</span>
                            <span className="text-sm font-medium">Chat</span>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors group" href="#">
                            <span className="material-symbols-outlined text-[22px] group-hover:text-slate-900">history</span>
                            <span className="text-sm font-medium">History</span>
                        </a>
                    </nav>
                    <div onClick={logout} className="pt-6 mt-6 border-t border-slate-100 cursor-pointer">
                        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors group">
                            <span className="material-symbols-outlined text-[22px] group-hover:text-slate-900">logout</span>
                            <span className="text-sm font-medium">Logout</span>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar