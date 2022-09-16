import { useState, useRef, useEffect } from 'react';
import NavigationButton from "../components/navigation/NavigationButton";

export default function Header ({ }){
    const [scrollY, setScrollY] = useState(0);
    const NavBar = useRef(null);
    const handleScroll = () => {
        setScrollY(() => window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    })

    return (
        <div className="sticky top-0 inset-x-0 w-full z-50">
            <div className={"flex flex-row items-center justify-center py-5 transition-all duration-300 ease-in-out " + (scrollY > 35 ? 'bg-gray-50 border-b border-gray-100 shadow-md' : '')} ref={NavBar}>
                <NavigationButton title="Inicio" />
                <NavigationButton title="Enter" />
                <NavigationButton title="Business" />
                <NavigationButton title="Analizar" />
                <NavigationButton title="Innovar" />
                <NavigationButton title="Desarrollar" />
            </div>
        </div>
    );
}