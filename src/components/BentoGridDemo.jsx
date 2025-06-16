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

export function BentoGridDemo() {
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
    title: "EDUADMIN ERP SYSTEM ",
    description: <p><a href="https://github.com/nishwan810/EduAdmin" className=" text-emerald-400"> Github Repo </a></p>,
    header: <img src={imgerp} />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Microstructure prediction using AI & Ml",
    description: <p><a href="https://www.sciencedirect.com/science/article/abs/pii/S2214785324003626" className=" text-emerald-400"> Publication </a></p>,
    header: <img src={imgPub} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Student-Management-System",
    description: <p><a href="https://github.com/nishwan810/Student-Management-System" className=" text-emerald-400"> Github Repo </a></p>,
    header: <img src={imgsms} />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  

];


{/* <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br
     from-neutral-200 dark:from-neutral-900 dark:to-neutral-800  to-neutral-100">{header}  </div> */}