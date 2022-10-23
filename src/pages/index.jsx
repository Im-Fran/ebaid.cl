import { useState } from "react";
import AliceCarousel from 'react-alice-carousel';

import AppLayout from "../layouts/AppLayout";
import StartSlide from "../components/home/StartSlide";

export default function Index({ }) {
    const meta = [
        { property: 'og:title', content: 'ebaid > Inicio' },
    ];
    const items = [
        <div className="item w-full" data-value="0" key="0">
            <StartSlide
                normalTitle="Servicios de hosting profesional con años de trayectoria en"
                boldTitle="SAP y MS Azure."
                text="Lorem ipsum dolor sit amet consectetur adipiscing elit porttitor sociosqu montes blandit venenatis turpis conubia diam tortor platea odio vitae"
                image="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                link1={{ url: '#enter', text: 'Enter' }}
            />
        </div>,
        <div className="item w-full" data-value="1" key="1">
            <StartSlide
                normalTitle="Servicios de hosting profesional con años de trayectoria en"
                boldTitle="SAP y MS Azure."
                text="Lorem ipsum dolor sit amet consectetur adipiscing elit porttitor sociosqu montes blandit venenatis turpis conubia diam tortor platea odio vitae"
                image="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                link1={{ url: '#business', text: 'Business' }}
            />
        </div>,
        <div className="item w-full" data-value="2" key="2">
            <StartSlide
                normalTitle="Servicios de hosting profesional con años de trayectoria en"
                boldTitle="SAP y MS Azure."
                text="Lorem ipsum dolor sit amet consectetur adipiscing elit porttitor sociosqu montes blandit venenatis turpis conubia diam tortor platea odio vitae"
                image="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                link1={{ url: '#analizar', text: 'Analizar' }}
            />
        </div>,
        <div className="item w-full" data-value="3" key="3">
            <StartSlide
                normalTitle="Servicios de hosting profesional con años de trayectoria en"
                boldTitle="SAP y MS Azure."
                text="Lorem ipsum dolor sit amet consectetur adipiscing elit porttitor sociosqu montes blandit venenatis turpis conubia diam tortor platea odio vitae"
                image="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                link1={{ url: '#innovar', text: 'Innovar' }}
            />
        </div>,
        <div className="item w-full" data-value="4" key="4">
            <StartSlide
                normalTitle="Servicios de hosting profesional con años de trayectoria en"
                boldTitle="SAP y MS Azure."
                text="Lorem ipsum dolor sit amet consectetur adipiscing elit porttitor sociosqu montes blandit venenatis turpis conubia diam tortor platea odio vitae"
                image="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                link1={{ url: '#desarrollar', text: 'Desarrollar' }}
            />
        </div>,
    ];

    const [activeTab, setActiveTab] = useState(0)
    const selectTabHandler = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setActiveTab(Number.parseInt(e.target.getAttribute('data-tab-id')))
    }

    const tabs = ['Google Cloud', 'Microsoft', 'SAP'].map((it, index) => (
        <button key={index} data-tab-id={index} onClick={selectTabHandler} className={"transition-all duration-300 h-12 px-8 py-2 -mb-px text-sm text-center bg-transparent border-b-2 sm:text-base whitespace-nowrap focus:outline-none " + (activeTab === index ? 'text-blue-600 border-blue-500' : 'text-gray-300 border-gray-300 hover:text-gray-500 hover:border-gray-500')}>{it}</button>
    ));

    return (
        <AppLayout title="Inicio" meta={meta}>
            <div id="inicio">
                <AliceCarousel
                    autoPlay
                    autoPlayStrategy="default"
                    autoPlayInterval={5000}
                    animationDuration={450}
                    animationType="slide"
                    disableButtonsControls
                    disableDotsControls
                    disableSlideInfo
                    mouseTracking
                    touchTracking
                    infinite
                    items={items}
                />
            </div>

            <div className="pt-[5rem]"/>

            {/* Enter */}
            <div className="mt-20 py-12" id="enter">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-600 sm:text-4xl">Enter</p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-stone-100">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                                        </svg>
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Alcance Global</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                            </div>

                            <div className="relative">
                                <dt>
                                    <div
                                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-stone-100">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
                                        </svg>
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Sin comisiones escondidas</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                            </div>

                            <div className="relative">
                                <dt>
                                    <div
                                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-stone-100">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                        </svg>
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Contacto Instantáneo</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                            </div>

                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-stone-100">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>
                                        </svg>
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Respuesta a toda duda</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

            <div className="pt-[5rem]"/>

            {/* Business */}
            <div className="flex flex-col" id="business">
                <h2 className="text-3xl lg:text-4xl tracking-tight font-bold text-blue-600 sm:text-xl md:text-2xl mt-16 md:mr-5 block xl:inline text-center">
                    Business:
                </h2>
                <div className="flex flex-col items-center justify-center mt-3 w-full">
                    {/* Tab */}
                    <div className="inline-flex my-5">
                        {tabs}
                    </div>

                    {/* Content */}
                    <div className="relative flex flex-col items-center justify-center w-2/3">
                        <div className={"my-5 px-2 py-10 w-full " + (activeTab === 0 ? 'block' : 'hidden')}>
                            <img
                                className="object-cover w-full rounded-lg h-32"
                                src="https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                                alt="Business"
                            />

                            <div className="flex flex-col items-top justify-start mt-5">
                                <h3 className="text-2xl text-gray-800">Lorem Ipsum</h3>
                                <p className="text-base mt-2 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                            </div>
                        </div>
                        <div className={"my-5 px-2 py-10 w-full " + (activeTab === 1 ? 'block' : 'hidden')}>
                            <img
                                className="object-cover w-full rounded-lg h-32"
                                src="https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                                alt="Business"
                            />

                            <div className="flex flex-col items-top justify-start mt-5">
                                <h3 className="text-2xl text-gray-800">Lorem Ipsum</h3>
                                <p className="text-base mt-2 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                            </div>
                        </div>
                        <div className={"my-5 px-2 py-10 w-full " + (activeTab === 2 ? 'block' : 'hidden')}>
                            <img
                                className="object-cover w-full rounded-lg h-32"
                                src="https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                                alt="Business"
                            />

                            <div className="flex flex-col items-top justify-start mt-5">
                                <h3 className="text-2xl text-gray-800">Lorem Ipsum</h3>
                                <p className="text-base mt-2 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-[5rem]"/>

            {/* Analizar */}
            <div className="flex flex-col w-full" id="analizar">
                <h2 className="text-3xl lg:text-4xl tracking-tight font-bold text-blue-600 sm:text-xl md:text-2xl mt-16 md:mr-5 block xl:inline text-center">
                    Analizar:
                </h2>
                <div className="relative justify-center items-center mt-5">
                    <div className="grid grid-cols-7 w-full h-52">
                        <div className="absolute grid grid-cols-10 w-full mt-6">
                            <img src="https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="Analizando" className="z-10 col-span-2 col-start-2 h-42 w-full flex items-center justify-center rounded-lg border border-brand-100"/>
                        </div>
                        <div className="grid grid-cols-7 col-span-5 col-start-2 bg-brand-100 rounded-lg items-center justify-center flex flex-col w-full h-64">
                            <div className="col-span-4 col-start-3 w-full">
                                <p className="text-left text-lg text-stone-100 max-w-xl font-italic font-medium">Lorem ipsum dolor sit amet consectetur adipiscing elit porttitor sociosqu montes blandit venenatis turpis conubia diam tortor platea odio vitae</p>
                                <p className="text-right text-md text-stone-100 font-italic font-medium">- Jose Solís</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-[5rem]"/>

            {/* Innovar */}
            <div className="flex flex-col w-full" id="innovar">
                <h2 className="text-3xl lg:text-4xl tracking-tight font-bold text-blue-600 sm:text-xl md:text-2xl mt-16 md:mr-5 block xl:inline text-center">
                    Innovar:
                </h2>
            </div>

            <div className="py-[5rem]"/>

            {/* Desarrollar */}
            <div className="flex flex-col w-full" id="desarrollar">
                <h2 className="text-3xl lg:text-4xl tracking-tight font-bold text-blue-600 sm:text-xl md:text-2xl mt-16 md:mr-5 block xl:inline text-center">
                    Desarrollar:
                </h2>
            </div>

            <div className="py-[15rem]"/>
        </AppLayout>
    )
}