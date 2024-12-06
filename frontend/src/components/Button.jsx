import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";

const Button = ({ text, to, icon = false }) => {
  return (
    <a
      href={to}
      className="group inline-flex items-center justify-center px-6 py-2 text-sm font-bold uppercase tracking-wide text-stone-200 border-2 border-stone-200 rounded-lg hover:bg-stone-200 hover:text-slate-800 transition-all duration-300"
    >
      {text}
      {icon && (
        <ChevronRightIcon className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2" />
      )}
    </a>
  );
};

export default Button;
