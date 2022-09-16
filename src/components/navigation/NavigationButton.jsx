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

    const toggleBorderBottom = () => {
        const element = document.getElementById((title || '').toLowerCase().replace(' ', '-'))
        if(element) {
            const position = window.scrollY
            if(position > (element.offsetTop-100) && position < ((element.offsetTop+element.offsetHeight)-25)){
                // button.classList.add('pb-0')
                // button.classList.add('border-b-4')
            } else { // Sale del elemento
                // button.classList.remove('pb-0')
                // button.classList.remove('border-b-4')
            }
        }
    }

    useEffect(() => {
        toggleBorderBottom()
        window.addEventListener('scroll', toggleBorderBottom)
        return () => window.removeEventListener('scroll', toggleBorderBottom)
    })


    return (
        <div ref={button} onClick={handleClick} data-nav={(title || '').toLowerCase().replace(' ', '-')} className="navigation-button px-5 border-yellow-500 mx-3 transition-all duration-150 pb-1 hover:pb-0 hover:border-b-4 cursor-pointer">
            {title}
        </div>
    );
}