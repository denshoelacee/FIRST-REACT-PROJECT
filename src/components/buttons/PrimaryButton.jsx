import React from "react";

function PrimaryButton({ className, children }) {
  return (
    <div className="flex gap-4">
      <button>
        <a
          className={`${className} inline-flex hover:scale-110 transition-all duration-300 justify-center whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-emerald-700 to-emerald-500 dark:from-emerald-600 dark:to-emerald-400 shadow-lg focus:outline-none focus:ring focus:ring-emerald-400/60 focus-visible:outline-none focus-visible:ring focus-visible:ring-emerald-400/60 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.emerald.200/.6)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.emerald.100/.8)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]`}
        >
          {children}
        </a>
      </button>
    </div>
  );
}

export default PrimaryButton;
