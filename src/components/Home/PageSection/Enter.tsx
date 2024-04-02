import PageSection from "@/components/Home/PageSection.tsx";
import {BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon} from "@heroicons/react/24/outline";
import EnterSection from "@/components/Home/PageSection/Enter/EnterSection.tsx";

const Enter = () => <PageSection id={"enter"}>
  <div className={"flex flex-col gap-5 h-screen md:items-center md:justify-center"}>
    <div className={"items-center justify-center text-center"}>
      <h2 className={"text-2xl md:text-4xl font-black"}>Enter</h2>
      <p className={"text-sm md:text-md text-neutral-600 dark:text-neutral-200 mt-0.5"}>Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
    </div>
    <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 w-5/6 md:w-full"}>
      <EnterSection
        icon={GlobeAltIcon}
        title={"Alcance global"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
      />
      <EnterSection
        icon={ScaleIcon}
        title={"Sin comisiones escondidas"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
      />
      <EnterSection
        icon={BoltIcon}
        title={"Contacto instantáneo"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
      />
      <EnterSection
        icon={ChatBubbleBottomCenterTextIcon}
        title={"Respuesta a toda duda"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
      />
    </div>
  </div>
</PageSection>

export default Enter;