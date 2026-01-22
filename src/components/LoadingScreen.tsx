interface LoadingScreenProps {
    message?: string
}

function LoadingScreen({ message = "Loading..." }: LoadingScreenProps) {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
            <div className="flex flex-col items-center gap-6">
                {/* Animated Logo */}
                <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center text-white animate-pulse">
                        <span className="material-symbols-outlined text-5xl fill">school</span>
                    </div>
                    {/* Rotating ring */}
                    <div className="absolute inset-0 w-20 h-20 rounded-2xl border-4 border-primary/20 animate-spin" style={{ animationDuration: '2s' }}></div>
                </div>

                {/* Loading Text */}
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-xl font-bold text-slate-900">Scholar AI</h1>
                    <p className="text-slate-500 text-sm">{message}</p>
                </div>

                {/* Loading Dots */}
                <div className="flex items-center gap-2 mt-4">
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
            </div>
        </div>
    )
}

export default LoadingScreen
