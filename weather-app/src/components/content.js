import React from "react";
import '@heroicons/react/outline';

export default function Content() {
    return (
        <div className="grid grid-cols-7">
            <div className="col-span-4 p-10 pl-20 block">
                <div><span className="text-5xl leading-10 font-sans text-yellow-50">Ysulat, Antique</span></div>
                <div className="mt-4 pl-1"><span className="py-4 text-base text-2xl text-yellow-50">July 10, 2023</span></div>
                <div className="mt-3 ml-3">
                    <div className="relative">

        
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-20 h-13 text-yellow-400">
                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="-mt-20 ml-5 w-24 h-24 text-yellow-50">
                    <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z" clipRule="evenodd" />
                    </svg>
                    </div>
             
                <div className=""><span className="text-4xl text-yellow-50">Sunny</span></div>
            </div>
            </div>
            <div className="col-span-3">
                <div className="flex justify-center pt-10">
                    <span className="text-9xl text-yellow-50 font-thin">72&deg;</span>
                </div>
                <div className="flex justify-center mt-20">
                    <span className="text-3xl text-yellow-50">72&deg;</span><span className="text-3xl text-yellow-50"> /</span><span className="text-3xl text-blue-900 ml-1"> 72&deg;</span>
                </div>
            </div>
        </div>

    )
}