import React from "react";
import features from "./features.json";

const Feature2 = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6">
        {features.map((feature) => {
          return (
            <span
              key={feature.id}
              className="group flex gap-y-6 size-full hover:bg-blue-100 focus:outline-none focus:bg-gray-100 rounded-lg p-5 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            >
              <svg
                className="shrink-0 size-8 text-gray-800 mt-0.5 me-6 dark:text-neutral-200"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="13.5" cy="6.5" r=".5" />
                <circle cx="17.5" cy="10.5" r=".5" />
                <circle cx="8.5" cy="7.5" r=".5" />
                <circle cx="6.5" cy="12.5" r=".5" />
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
              </svg>

              <div>
                <div>
                  <h3 className="block font-bold text-gray-800 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-neutral-400">{feature.description}</p>
                </div>
              </div>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Feature2;
