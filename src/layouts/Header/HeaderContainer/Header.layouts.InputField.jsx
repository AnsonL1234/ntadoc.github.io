

export function InputField(params) {
    return (
        <div className="flex items-center border rounded-[1000px] border-white/90 w-80 h-10 max-[630px]:hidden focus-within:shadow-sm focus-within:shadow-white/50">
            <div className="h-full pl-2 pr-2">
                <svg className="w-6 h-full text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input 
                className="flex-1 h-full ml-2 focus:outline-none text-white/90" 
                type="text"  
                name="searchInput" 
                id="searchInput" 
                placeholder="Enter the key words" 
            />
        </div>
    );
};
