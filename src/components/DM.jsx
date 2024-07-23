import React, { useState, useRef, useEffect } from 'react';

export function DM() {
    const [isHovered, setIsHovered] = useState(false);
    const btnMd = useRef(null);

    useEffect(() => {
        const btn = btnMd.current;
        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);

        if (btn) {
            btn.addEventListener('mouseenter', handleMouseEnter);
            btn.addEventListener('mouseleave', handleMouseLeave);
        }

        // Cleanup event listeners on component unmount
        return () => {
            if (btn) {
                btn.removeEventListener('mouseenter', handleMouseEnter);
                btn.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    useEffect(() => {
        console.log(isHovered);
    }, [isHovered]);

    return (
        <div ref={btnMd} className="mx-2 my-2 flex flex-row justify-between items-center hover:bg-zinc-500 py-2 px-2 rounded-md group transition">
            <a href="/" className="flex flex-row gap-4">
                <img 
                    src="https://cdn.discordapp.com/icons/662267976984297473/39128f6c9fc33f4c95a27d4c601ad7db.webp?size=96" 
                    height="32px" 
                    width="32px" 
                    className="rounded-full" 
                />
                <p className="text-zinc-400 font-semibold group-hover:text-white">Midjourney Bot</p>
            </a>
            {isHovered && (
                <a href="/" className="text-white">X</a>
            )}
        </div>
    );
}
