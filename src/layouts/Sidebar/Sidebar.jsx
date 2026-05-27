import React, { useState } from 'react';
import { ChevronDown, ChevronRight, BookOpen, Layers } from 'lucide-react';

export default function Sidebar({ documentationData, activeSubChapterId, onSelectSubChapter, isSidebarOpen }) {
  // State to track which parent chapters are toggled open (supports multiple open chapters)
  const [openChapters, setOpenChapters] = useState({
    'ch-getting-started': true, // Keep the first chapter open by default
  });

  // Toggle chapter open/collapsed state
  const toggleChapter = (chapterId) => {
    setOpenChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  return (
    <aside className={`w-64 h-[calc(100vh-4rem)] border-r border-slate-200 bg-slate-50 flex flex-col fixed left-0 top-16 z-40 transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>


      {/* Navigation Tree Container */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {/* Added "|| []" as a safety fallback to keep it bulletproof */}
        {(documentationData || []).map((chapter) => {
          const hasSubChapters = chapter.subChapters && chapter.subChapters.length > 0;
          const isChapterOpen = openChapters[chapter.id];
          const isDirectActive = activeSubChapterId === chapter.id; // Tracks if standalone chapter is selected

          return (
            <div key={chapter.id} className="space-y-1">
              {/* Parent Chapter Row */}
              <button
                onClick={() => {
                  if (hasSubChapters) {
                    toggleChapter(chapter.id); // It has children, open dropdown
                  } else {
                    onSelectSubChapter(chapter); // It has no children, load its blocks directly!
                  }
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm font-semibold rounded-md transition-colors group ${
                  isDirectActive && !hasSubChapters
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-slate-700 hover:bg-slate-200/60 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4 text-slate-400 group-hover:text-slate-600" />
                  <span>{chapter.title}</span>
                </div>
                
                {/* Only show arrows if there are actually sub-chapters to look at */}
                {hasSubChapters && (
                  isChapterOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />
                )}
              </button>

              {/* Nested Dropdown Menu (Only runs if subChapters exist) */}
              {hasSubChapters && isChapterOpen && (
                <div className="pl-6 space-y-1 border-l border-slate-200 ml-5 mt-1">
                  {chapter.subChapters.map((sub) => {
                    const isActive = activeSubChapterId === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => onSelectSubChapter(sub)}
                        className={`w-full text-left block px-3 py-1.5 text-sm rounded-md ${
                          isActive ? 'bg-indigo-50 text-indigo-600 font-medium' : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {sub.title}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
} // <--- FIXED: This closing brace was missing in your snippet!