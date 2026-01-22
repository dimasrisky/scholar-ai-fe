import Sidebar from "../components/Sidebar"

function Chat() {
    return (
        <>
            <Sidebar />
            <main className="flex-1 flex flex-col relative bg-linear-to-br from-slate-50 to-slate-100">
                {/* Header */}
                <div className="border-b border-slate-200/60 backdrop-blur-sm bg-white/50 px-6 py-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3">
                            <div className="bg-linear-to-br from-primary to-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                                <span className="material-symbols-outlined text-xl">auto_awesome</span>
                            </div>
                            <div>
                                <h1 className="text-lg font-bold text-slate-800">Research Assistant</h1>
                                <p className="text-xs text-slate-500 flex items-center gap-1">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    Online & Ready
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto px-6 py-8 scroll-smooth">
                    <div className="max-w-4xl mx-auto w-full">
                        {/* Welcome Section */}
                        <div className="text-center py-10 mb-8">
                            <div className="bg-linear-to-br from-primary/10 to-blue-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-inner">
                                <span className="material-symbols-outlined text-4xl text-primary">auto_awesome</span>
                            </div>
                            <h2 className="text-2xl font-bold mb-3 text-slate-800">How can I help with your research today?</h2>
                            <p className="text-slate-500 max-w-lg mx-auto leading-relaxed">Ask questions about your uploaded documents. I'll provide comprehensive answers with citations from your sources.</p>
                        </div>

                        {/* Chat Messages */}
                        <div className="space-y-6">
                            {/* User Message */}
                            <div className="flex items-end gap-3 justify-end">
                                <div className="flex flex-col gap-1.5 items-end max-w-[75%]">
                                    <p className="text-slate-500 text-[12px] font-medium px-1">You</p>
                                    <div className="rounded-2xl rounded-br-md px-5 py-3.5 bg-linear-to-br from-primary to-blue-600 text-white shadow-lg shadow-primary/20">
                                        <p className="text-base font-normal leading-relaxed">What are the common themes regarding
                                            sustainable development in these papers?</p>
                                    </div>
                                    <p className="text-[10px] text-slate-400 px-1">2:30 PM</p>
                                </div>
                                <div className="bg-linear-to-br from-slate-200 to-slate-300 aspect-square rounded-full w-9 shrink-0 flex items-center justify-center overflow-hidden shadow-md">
                                    <span className="material-symbols-outlined text-slate-600 text-lg">person</span>
                                </div>
                            </div>

                            {/* Assistant Message */}
                            <div className="flex items-start gap-3">
                                <div className="bg-linear-to-br from-primary to-blue-600 text-white aspect-square rounded-full w-9 h-9 shrink-0 flex items-center justify-center shadow-lg shadow-primary/20">
                                    <span className="material-symbols-outlined text-lg">smart_toy</span>
                                </div>
                                <div className="flex flex-col gap-2 max-w-[85%]">
                                    <div className="flex flex-col gap-1.5">
                                        <p className="text-slate-500 text-[12px] font-medium px-1">Research Assistant</p>
                                        <div className="rounded-2xl rounded-bl-md px-5 py-4 bg-white border border-slate-200/60 shadow-md">
                                            <p className="text-slate-900 text-base font-normal leading-relaxed mb-3">
                                                Based on the 5 documents analyzed, the common themes include:
                                            </p>
                                            <ul className="list-disc ml-5 mt-3 space-y-2.5 text-slate-700">
                                                <li><strong className="text-slate-900">Carbon Sequestration:</strong> Emphasized in <span
                                                    className="text-primary font-medium underline decoration-primary/30 cursor-pointer hover:decoration-primary transition-all">Journal
                                                    A</span> as the primary driver for urban sustainability.</li>
                                                <li><strong className="text-slate-900">Community Engagement:</strong> Identified as a critical success factor
                                                    for policy implementation.</li>
                                                <li><strong className="text-slate-900">Resource Circularity:</strong> Detailed in <span
                                                    className="text-primary font-medium underline decoration-primary/30 cursor-pointer hover:decoration-primary transition-all">Methodology_V2</span>.
                                                </li>
                                            </ul>
                                            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Citations:</span>
                                                <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-50 text-slate-600 text-[11px] font-medium cursor-pointer hover:bg-slate-100 transition-colors border border-slate-200">
                                                    Source: Journal A, Page 12
                                                </span>
                                                <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-50 text-slate-600 text-[11px] font-medium cursor-pointer hover:bg-slate-100 transition-colors border border-slate-200">
                                                    Source: Methodology_V2, Section 4.1
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-slate-400 px-1">2:31 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Input Section */}
                <div className="p-6 bg-white/50 backdrop-blur-sm border-t border-slate-200/60">
                    <div className="max-w-4xl mx-auto w-full">
                        {/* Quick Actions */}
                        <div className="flex gap-2 mb-4 flex-wrap">
                            <button className="flex h-9 items-center justify-center gap-2 rounded-lg bg-white border border-slate-200 px-4 py-2 hover:border-primary hover:text-primary transition-all text-sm font-medium shadow-sm hover:shadow-md">
                                <span className="material-symbols-outlined text-[16px]">summarize</span>
                                Summarize key findings
                            </button>
                            <button className="flex h-9 items-center justify-center gap-2 rounded-lg bg-white border border-slate-200 px-4 py-2 hover:border-primary hover:text-primary transition-all text-sm font-medium shadow-sm hover:shadow-md">
                                <span className="material-symbols-outlined text-[16px]">psychology</span>
                                Analyze methodology
                            </button>
                            <button className="flex h-9 items-center justify-center gap-2 rounded-lg bg-white border border-slate-200 px-4 py-2 hover:border-primary hover:text-primary transition-all text-sm font-medium shadow-sm hover:shadow-md">
                                <span className="material-symbols-outlined text-[16px]">compare_arrows</span>
                                Find contradictions
                            </button>
                        </div>

                        {/* Input Field */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">attachment</span>
                            </div>
                            <input
                                className="w-full bg-white border border-slate-200 rounded-xl py-4 pl-12 pr-14 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-md placeholder:text-slate-400"
                                placeholder="Ask something across all your documents..." type="text" />
                            <button className="absolute right-3 inset-y-3 flex items-center justify-center bg-linear-to-r from-primary to-blue-600 text-white rounded-lg px-4 hover:shadow-lg hover:shadow-primary/30 transition-all">
                                <span className="material-symbols-outlined text-[20px]">send</span>
                            </button>
                        </div>

                        {/* Disclaimer */}
                        <div className="mt-3 text-center">
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">AI can make mistakes. Verify your research.</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Chat
