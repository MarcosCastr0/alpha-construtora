'use client'

import { ReactElement } from "react";

type DataButton = {
    text?: string;
    icon?: ReactElement;
    type?: "button" | "submit" | "reset";
    onclick?: ()=> void; 
}

export default function AlternativeButton ({text, icon, type="button", onclick}:DataButton){
    return(
        <button onClick={onclick} type={type} className="bg-light text-primary px-5 py-2 rounded-full w-full flex justify-center items-center hover:bg-secundary trasition ease-in-out delay-100">       
            {text && <span className="mr-2">{text}</span>}
            {icon}
        </button>
    );
}