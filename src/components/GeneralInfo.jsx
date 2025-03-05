import { useState } from "react";
import "./Component.css";
import { XCircleIcon } from '@heroicons/react/24/outline';

function capitalizeAndSplit(str) {
  // Capitalize the first letter and split the string at capital letters
  return str
    .replace(/([A-Z])/g, ' $1')   // Add a space before capital letters
    .replace(/^./, (match) => match.toUpperCase()) // Capitalize the first letter
    .trim();  // Remove leading/trailing whitespace
};

export const GeneralInformationForm = ({ formFields, handleUpdate }) => {
  return (
    <>
      <form className="w-full max-w-xl p-0.5">
        <XCircleIcon className="size-6 float-right" />
        {Object.keys(formFields).map((prop) => {
          if (prop !== "id")
            return (
              <>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      htmlFor="{prop}"
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    >
                      {capitalizeAndSplit(prop)}:
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      id={prop}
                      key={prop}
                      type={
                        prop === "email"
                          ? "email"
                          : prop === "phone"
                          ? "tel"
                          : "text"
                      }
                      name={prop}
                      value={formFields[prop]}
                      onChange={handleUpdate}
                      className={
                        ("bg-slate-50") +
                        " appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      }
                    />
                  </div>
                </div>
              </>
            );
        })}
      </form>
    </>
  );
};
