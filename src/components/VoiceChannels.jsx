import { useState } from "react"

export function VoiceChannels (props) {
    const [showOptions, setShowOptions] = useState(false)

    function clickOptions () {
        console.log("gkoji")
    }

    console.log("Componente")
    return (
        <button onClick={clickOptions} className="flex flex-row justify-between items-center w-full group mt-4 pr-3 pl-1">
            <div className="flex flex-row gap-1 items-center">
                <svg className="icon_a08117 group-hover:text-zinc-300" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" color="grey" width="15" height="15" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M5.3 9.3a1 1 0 0 1 1.4 0l5.3 5.29 5.3-5.3a1 1 0 1 1 1.4 1.42l-6 6a1 1 0 0 1-1.4 0l-6-6a1 1 0 0 1 0-1.42Z"></path></svg>
                <p className="text-zinc-400 group-hover:text-zinc-300 text-xs font-semibold">{props.title ?? "CANAL"}</p>
            </div>
            <svg className="addButtonIcon_a08117 group-hover:text-zinc-300" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" color="grey" width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z"></path></svg>
        </button>
    )
}