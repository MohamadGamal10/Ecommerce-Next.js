"use client"
import { useState } from "react";

const Colors = ({ availableColors }: { availableColors: string[] }) => {
    const [selectedColor, setSelectedColor] = useState<string>("");

    const handleColorClick = (color: string) => {

        if (selectedColor === color) {
            setSelectedColor("");
            localStorage.removeItem("selectedColor");
            return;
        }

        setSelectedColor(color);
        localStorage.setItem("selectedColor", color);
    }
    
    return (
        <div className="flex gap-2">
            {availableColors.map((color: string) => (
                <span
                    onClick={() => handleColorClick(color)}
                    key={color}
                    className={`w-6 h-6 cursor-pointer rounded-full border-2 ${selectedColor === color ? "border-black" : "border-gray-300"} `}
                    style={{ backgroundColor: color }}
                ></span>
            ))}
        </div>
    )
}

export default Colors
