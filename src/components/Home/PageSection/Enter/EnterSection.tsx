import React from "react";

export type EnterProps = {
  icon: React.ElementType;
  title: string;
  description: string;
}

const EnterSection = (props: EnterProps) => <div className={"col-span-1 w-full"}>
  <div className={"relative w-full"}>
    <dt className={"w-full"}>
      <div className={"absolute flex items-center justify-center h-8 md:h-12 w-8 md:w-12 rounded-md bg-blue-500 text-stone-100"}>
        {React.createElement(props.icon, {className: "h-5 md:h-8 w-5 md:w-8"})}
      </div>
      <p className={"ml-12 md:ml-16 text-md md:text-lg leading-6 font-bold text-gray-500 dark:text-neutral-50"}>{props.title}</p>
    </dt>
    <dd className={"ml-12 md:ml-16 text-xs md:text-sm w-11/12"}>{props.description}</dd>
  </div>
</div>

export default EnterSection;