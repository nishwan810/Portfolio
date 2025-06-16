import { useState } from "react";
import {
    IconCopy,
    IconCheck,
  } from "@tabler/icons-react";

const CopySnippet = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (

    <div className="relative flex items-center justify-center">

<div className="bg-gray-950  z-50    text-emerald-400 px-4 py-2 rounded-md flex items-center justify-between w-fit max-w-full">
      <code className="whitespace-nowrap overflow-x-auto text-sm">{code}</code>
      <button
        onClick={handleCopy}
        className="ml-4 text-xl text-emerald-400 hover:text-white  animate-bounce transition"
      >
         {copied ? <IconCheck size={18} /> : <IconCopy size={18} />}
        {/* {copied ? <Check size={18} /> : <Copy size={18} />} */}
      </button>
    </div>



    </div>
  
  );
};

export default CopySnippet;
