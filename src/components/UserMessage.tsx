type Props = {
    message: string;
    time: string;
}

function UserMessage({ message, time }: Props) {
    return (
        <>
            <div className="flex items-end gap-3 justify-end">
                <div className="flex flex-col gap-1.5 items-end max-w-[75%]">
                    <p className="text-slate-500 text-[12px] font-medium px-1">You</p>
                    <div className="rounded-2xl rounded-br-md px-5 py-3.5 bg-linear-to-br from-primary to-blue-600 shadow-lg shadow-primary/20">
                        <p className="text-base font-normal leading-relaxed text-slate-700">{message}</p>
                    </div>
                    <p className="text-[10px] text-slate-400 px-1">{time}</p>
                </div>
                <div className="bg-linear-to-br from-slate-200 to-slate-300 aspect-square rounded-full w-9 shrink-0 flex items-center justify-center overflow-hidden shadow-md">
                    <span className="material-symbols-outlined text-slate-600 text-lg">person</span>
                </div>
            </div>
        </>
    )
}

export default UserMessage