import { Menu, X } from 'lucide-react'; // Import menu navigation icons
import { InputField, Listbar, LogoContainer } from './HeaderContainer';

export default function Header({ isSidebarOpen, onToggleSidebar }) {
    return (
        <header className="fixed top-0 left-0 right-0 p-2.5 h-16 flex items-center justify-between bg-[#4f3695] border-b border-b-black/90 backdrop-blur-lg">
            <div className="flex items-center space-x-2">
                <button 
                    onClick={onToggleSidebar}
                    className="p-2 m-0 rounded-md text-white hover:bg-white/10 transition-colors focus:outline-none"
                    aria-label="Toggle Sidebar"
                >
                    {/* Switch between a Hamburger icon or an 'X' icon depending on state */}
                    {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
                <LogoContainer />
            </div>
            <InputField />
            <Listbar />
        </header>
    );
};
