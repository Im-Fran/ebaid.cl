import React from "react";

export type BusinessTabSectionProps = {
  title: string;
  description: string | React.ReactNode;
  image: string;
  imageAlt: string;
  imageClass?: string;
  active: boolean;
  circle?: boolean;
}

const BusinessTabSection = ({ image, imageAlt, title, description, active, circle = false, imageClass }: BusinessTabSectionProps) => <div className={`my-5 pr-2 w-full flex flex-col md:flex-row items-start justify-center ${active ? 'block' : 'hidden'}`}>
  <img
    className={`object-cover hidden md:block h-36 md:h-48 mb-2.5 md:mb-5 ${circle === true ? 'rounded-full' : 'rounded-md'} ${imageClass || ''}`}
    src={image}
    alt={imageAlt}
  />

  <div className={"flex flex-col items-start justify-start md:w-1/2 ml-5"}>
    <div className={"flex items-start gap-2 text-md md:text-2xl text-gray-800 dark:text-neutral-50 font-bold"}>
      <img
        className={`object-cover md:hidden h-16 ${circle === true ? 'rounded-full' : 'rounded-md'} ${imageClass || ''}`}
        src={image}
        alt={imageAlt}
      />
      {title}
    </div>
    <p className="text-base mt-2 text-gray-600 dark:text-neutral-200">{description}</p>
  </div>
</div>

export default BusinessTabSection;