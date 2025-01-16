import { useState } from "react";
import "./Component.css";

// const CustomInput = () => {
//     const [value, setValue] = useState("");

//     function handleChange(e) {
//         setValue(e.target.value);
//     };

//     return (
//         <input
//             type="text"
//             value={value}
//             onChange={handleChange}
//         />
//     );
// }

// export const General = () => {
//     // states
//     const [editMode, setEditMode] = useState(0);        // 0 === readOnly, 1 === editMode
//     const [fName, setFName] = useState("");
//     const [lName, setLName] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");
//     const [address, setAddress] = useState("");

//     function handleChange(e) {
//         setFName(e.target.value);
//     };

//     const fieldsList = ['First Name', 'Last Name', 'Email', 'Phone Number', 'Address'];
//     return (
//         <>
//             { fieldsList.map(field => {
//                 return editMode === 0 ? <label>{field}<div key={field}>{fName}</div></label> : <input type='text' value={fName} onChange={handleChange} />;
//             })}
//         </>
//     )
// }

const Button = ({ text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
    >
      {text}
    </button>
  );
};

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
