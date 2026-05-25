// src/layouts/Header/Header.layouts.jsx
import { InputField, Listbar, LogoContainer } from './HeaderContainer';

export default function Header(paramr) {
    return (
        <header className="fixed top-0 left-0 right-0 p-2.5 flex items-center justify-between bg-[#4f3695] border-b border-b-black/90 backdrop-blur-lg">
            <LogoContainer />
            <InputField />
            <Listbar />
        </header>
    );
};
