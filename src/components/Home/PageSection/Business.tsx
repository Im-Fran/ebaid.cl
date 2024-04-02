import PageSection from "@/components/Home/PageSection.tsx";
import {useState} from "react";
import BusinessTabSection from "@/components/Home/PageSection/Business/BusinessTabSection.tsx";

const Business = () => {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = ['SAP BIP', 'SAP BTP', 'LinkedIn']

  const tabsContent = [
    {
      title: "Innovation and Advisory Skills 2023 - Business Innovation for Partners",
      description: "Tengo la la capacidad de desencadenar, gestionar y ofrecer verdadera innovación empresarial respaldada por tecnologías y metodologías digitales de SAP. Esta insignia certifica el conocimiento sobre la innovación completa que enfrenta el cliente, desde el desarrollo de ideas hasta la creación de prototipos de soluciones.",
      image: "/sap_bip.png",
      imageAlt: "SAP Business Innovation for Partners",
      imageClass: 'bg-white',
      circle: true
    },
    {
      title: "Discover SAP Business Technology Platform 2023 - Record of Achievement",
      description: "He completado con éxito el viaje de aprendizaje \"Descubriendo la plataforma tecnológica empresarial SAP\" en el nivel fundamental para desarrolladores, consultores y administradores. También he descubierto las opciones para integrar y ampliar aplicaciones utilizando tecnologías inteligentes, así como incorporar análisis, administración de bases de datos y gestión de datos. También obtuve conocimientos sobre aspectos de seguridad y gestión de sostenibilidad.",
      image: "/sap_btp.png",
      imageAlt: "SAP Business Technology Platform",
      imageClass: 'bg-white',
    },
    {
      title: "Otras insignias de LinkedIn",
      description: <span>
        Tengo muchas insignias de LinkedIn que certifican mis habilidades en diferentes áreas, como: SAP Business Innovation for Partners, SAP Business Technology Platform, MCTS: Microsoft Dynamics Retail Management System 2.0 Store Operations, MCTS: Microsoft Dynamics GP 10.0 Manufacturing Applications, Certificaciones en Herramientas de gestion ERP - Microsoft - SAP y MBSS: Microsoft Dynamics GP 9.0 Installation & Configuration. Puedes descubrir más en <a className={"underline hover:text-blue-500 transition duration-300"} href={"https://www.linkedin.com/in/solisjose"} target={"_blank"}>mi perfil de LinkedIn</a>.
      </span>,
      image: "/LI-In-Bug.png",
      imageAlt: "LinkedIn",
    },
  ]

  return <PageSection id={"business"}>
    <div className="flex flex-col" id="business">
      <h2 className="text-3xl lg:text-4xl tracking-tight font-bold sm:text-xl md:text-2xl mt-16 md:mr-5 block xl:inline text-center">
        Business:
      </h2>
      <div className="flex flex-col items-center justify-center mt-3 w-full">
        {/* Tab */}
        <div className="inline-flex my-5">{tabs.map((it, index) => (
          <button
            key={index}
            data-tab-id={index}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setActiveTab(index)
            }}
            className={`transition-all duration-300 h-12 px-8 py-2 -mb-px text-sm text-center bg-transparent border-b-2 sm:text-base whitespace-nowrap focus:outline-none ${activeTab === index ? 'text-blue-600 border-blue-500' : 'text-neutral-400 border-neutral-400 hover:text-neutral-300 hover:border-neutral-300'} transition-colors duration-300`}
          >
            {it}
          </button>
        ))}</div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center w-full">
          {tabsContent.map((it, index) => (
            <BusinessTabSection
              key={index}
              title={it.title}
              description={it.description}
              image={it.image}
              imageAlt={it.imageAlt}
              imageClass={it.imageClass}
              active={index === activeTab}
              circle={it.circle}
            />
          ))}
        </div>
      </div>
    </div>
  </PageSection>
}

export default Business;