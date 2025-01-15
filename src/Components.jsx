import { useState } from 'react';

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

const Button = ({ text, fontSize = 12, handleClick }) => {
    const buttonStyle = {
        fontSize: fontSize + 'px'
    };

    return (
        <button onClick={handleClick} style={buttonStyle}>
            {text}
        </button>
    );
}

export const Form = () => {
    const [editMode, setEditMode] = useState(false);

    const [generalFormData, setGeneralFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;

        setGeneralFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleButtonClick = (editMode) => {
        editMode === false ? setEditMode(true) : setEditMode(false);
    };

    return (
        <>
            <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '600px', margin: 'auto' }}>
                {Object.keys(generalFormData).map(prop => {
                    return editMode === false 
                                    ? <label>{prop}<span>{generalFormData[prop]}</span></label> 
                                    : <label>{prop}<input key={prop} type={prop === 'email' ? 'email': prop === 'phone' ? 'tel' : 'text'} name={prop} value={generalFormData[prop]} onChange={handleChange} /></label>
                })}
            </form>
            
            <Button text={editMode ? 'View' : 'Edit'} handleClick={() => handleButtonClick(editMode)}/>
        </>
    )
}