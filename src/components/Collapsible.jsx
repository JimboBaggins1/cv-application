export const Collapsible = ({ title, content, buttons }) => {
    return (
        <>
            <details>
                <summary className='text-2xl font-bold text-slate-600 p-3.5'>{title}</summary>
                {content}
                <div>{buttons}</div>
            </details>
        </>
    );
};