import React from "react";

function SecondaryButton({ className, children, link}) {
  return (
    <div className="flex gap-4">
      <button>
        <a href={`#${link}`}
          className={`${className} inline-flex hover:scale-110 transition-all duration-300 justify-center whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium text-white border hover:text-emerald-500 `}
        >
          {children}
        </a>
      </button>
    </div>
  );
}

export default SecondaryButton;
