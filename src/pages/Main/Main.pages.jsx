import "../../styles/App.css";
import { useState } from "react";
import nonTechDocumentation from '../../data/non-tech-documentation.js';
import Header from "../../layouts/Header/Header.layouts";
import Sidebar from "../../layouts/Sidebar/Sidebar.jsx";
import { BlockRender } from "../../components/BlockRender.jsx";

export default function Main(params) {

    const defaultSelection = nonTechDocumentation[0]?.subChapters?.length > 0 
    ? nonTechDocumentation[0].subChapters[0] 
    : nonTechDocumentation[0];

    const [activeItem, setActiveItem] = useState(defaultSelection);

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
    return (
        <div className="">
            <Header 
                isSidebarOpen={isSidebarOpen} 
                onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            />
            <Sidebar 
                documentationData={nonTechDocumentation} 
                activeSubChapterId={activeItem?.id}
                onSelectSubChapter={(selectedNode) => setActiveItem(selectedNode)}
                isSidebarOpen={isSidebarOpen}
            />
            <main className={`flex-1 p-10 pt-6 max-w-4xl transition-all duration-300 ${
                isSidebarOpen ? 'ml-64' : 'ml-0 max-w-5xl mx-auto'
                }`}>
                
                <div className="border-b border-slate-100 pb-4 mt-16">
                    <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                    Documentation Article
                    </span>
                    <h1 className="text-3xl font-extrabold text-slate-900 mt-1">
                    {activeItem?.title}
                    </h1>
                </div>

                <div className="space-y-4">
                    {activeItem?.blocks?.map((block, index) => (
                        <BlockRender key={index} block={block} />
                    ))}
                </div>

                </main>
        </div>
    );
};
