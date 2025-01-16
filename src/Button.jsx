export const Button = ({ text, handleClick }) => {
    return (
      <button
        onClick={handleClick}
        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
      >
        {text}
      </button>
    );
  };