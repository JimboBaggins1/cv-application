import { useState } from "react";
import "./Component.css";
import { Button } from "./Button";

export const GeneralInformationForm = () => {
  const [editMode, setEditMode] = useState(false);

  const [generalFormData, setGeneralFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setGeneralFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleButtonClick = (editMode) => {
    editMode === false ? setEditMode(true) : setEditMode(false);
  };

  return (
    <>
      <form className="w-full max-w-xl p-0.5">
        {Object.keys(generalFormData).map((prop) => {
          return (
            <>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    htmlFor="{prop}"
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  >
                    {prop}:
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
                    value={generalFormData[prop]}
                    onChange={handleChange}
                    disabled={!editMode}
                    className= {(editMode ? "bg-slate-50" : "bg-gray-200") + " appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"}
                  />
                </div>
              </div>
            </>
          );
        })}
      </form>

      <Button
        text={editMode ? "View" : "Edit"}
        handleClick={() => handleButtonClick(editMode)}
      />
    </>
  );
};
