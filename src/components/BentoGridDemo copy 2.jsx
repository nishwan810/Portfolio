import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import imgPub from "./../assets/pub.jpeg";
import imgnDegre from "./../assets/degree.jpeg";
import imgsms from "./../assets/sms.png";
import imgerp from "./../assets/erp.png";
import imgspring from "./../assets/Udemy_spring.jpg";
import imgUdemy1 from "./../assets/UDEMY1.jpg";

export function BentoGridDemoCopy() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
        //   className={i === 3 || i === 6 ? "md:col-span-2" : ""} 
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Spring 6 & Spring Boot 3: Al, Security, Docker, Cloud",
    description: <p><a href="https://www.udemy.com/certificate/UC-4ad9e68c-8438-41d6-bf1d-9dbd916a63ca/" className=" text-emerald-400"> Certificate URL </a></p>,
    header: <img src={imgspring} />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The-complete-web-development-bootcamp",
    description: <p><a href="https://www.udemy.com/certificate/UC-b5af1f48-2020-4e57-b1ba-eec619c6aa0f/" className=" text-emerald-400"> Certificate URL </a></p>,
    header: <img src={imgUdemy1} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
 

];


{/* <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br
     from-neutral-200 dark:from-neutral-900 dark:to-neutral-800  to-neutral-100">{header}  </div> */}