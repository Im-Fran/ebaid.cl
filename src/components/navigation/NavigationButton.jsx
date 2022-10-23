import { useRef, useEffect } from 'react'

export default function NavigationButton({ title }){
    const button = useRef(null);
    const handleClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        const id = (title || '').toLowerCase().replace(' ', '-')
        if(id === "inicio") {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        } else {
            const element = document.getElementById(id)
            if(element) {
                window.scrollTo({
                    top: element.offsetTop - 25,
                    behavior: 'smooth'
                })
            }
        }
    }

    useEffect(() => {
        const toggleBorderBottom = () => {
            const id = (title || '').toLowerCase().replace(' ', '-')
            const { offsetTop, offsetHeight } = document.getElementById(id)
            const { scrollY } = window
            if(id === "inicio" && scrollY >= 0 && scrollY < (offsetTop+offsetHeight+60)) {
                button.current.classList.add('pb-0', 'border-b-4')
            } else if(scrollY >= (offsetTop-50) && scrollY < (offsetTop+offsetHeight+60)) {
                button.current.classList.add('pb-0', 'border-b-4')
            } else if(id === "desarrollar" && scrollY >= offsetTop-30) {
                button.current.classList.add('pb-0', 'border-b-4')
            } else {
                button.current.classList.remove('pb-0', 'border-b-4')
            }
        };

        window.addEventListener('scroll', toggleBorderBottom)
        return () => window.removeEventListener('scroll', toggleBorderBottom)
    });


    return (
        <div ref={button} onClick={handleClick} data-nav={(title || '').toLowerCase().replace(' ', '-')} className="navigation-button px-5 border-yellow-500 mx-3 transition-all duration-150 pb-1 hover:pb-0 hover:border-b-4 cursor-pointer">
            {title}
        </div>
    );
}