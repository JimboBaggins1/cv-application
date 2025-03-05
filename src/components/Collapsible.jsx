export const Collapsible = ({ title, content, addButton}) => {
    return (
        <>
            <details>
                <summary className='text-2xl font-bold text-slate-600 p-3.5'>{title}</summary>
                {content}
                <div>{addButton}</div>
            </details>
        </>
    );
};