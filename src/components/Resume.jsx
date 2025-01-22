export const Resume = ({ generalInfoFields, educationFields }) => {
    console.log(generalInfoFields);
    console.log(educationFields)
    let fullName = generalInfoFields.firstName + ' ' + generalInfoFields.lastName;
    return (
        <>
            <section className="border-b-8 border-slate-400 pb-2">
                <h2 className="text-5xl font-bold mt-12 mb-3 text-slate-600">{fullName}</h2>
                <ul className="flex text-sm text-slate-400 uppercase  divide-solid divide-x-2">
                    <li className="pr-3">{generalInfoFields.address}</li>
                    <li className="px-3">{generalInfoFields.phone}</li>
                    <li className="px-3">{generalInfoFields.email}</li>
                </ul>
            </section>
            <section className="border-b-8 border-slate-400 pb-2">
                <h2 className="text-5xl font-bold mt-5 mb-3 text-slate-600">Education</h2>
                {educationFields.map(education => {
                    return <ul key={education.id}>
                        <li>{education.educationLevel}</li>
                        <li>{education.degreeTitle}</li>
                    </ul>
                })}
            </section>
        </>
    )
}