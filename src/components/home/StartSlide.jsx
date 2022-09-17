export default function StartSlide({ normalTitle, boldTitle, text, link1, link2, image }) {
    const navigate = (e, url) => {
        e.preventDefault();
        e.stopPropagation();
        if(url.startsWith('#')) {
            window.scrollTo({
                top: document.getElementById(url.substring(1)).offsetTop+100,
                behavior: 'smooth'
            });
        } else {
            window.open(url, url.includes(location.hostname) ? '_self' : '_blank');
        }
    };

    return (
        <div className="relative bg-stone-100 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-stone-100 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-32 text-stone-100 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                    <div className="pt-6"/>
                    <div className="pr-8 mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">{normalTitle}&nbsp;</span>
                                <span className="block text-indigo-600 xl:inline">{boldTitle}</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">{text}</p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                {link1 && <div className="rounded-md shadow">
                                    <a onClick={e => navigate(e, link1.url)} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-stone-100 bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> { link1.text } </a>
                                </div>}
                                {link2 && <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <a onClick={e => navigate(e, link2.url)} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"> { link2.text } </a>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img className="lg:rounded-r-xl h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={image} alt=""/>
            </div>
        </div>
    );
}