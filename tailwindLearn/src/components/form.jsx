import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  let massageHandler = (event) => {
    event.preventDefault();

    navigate("/Massage");
  };

  return (
    <div className="my-9 text-xs text-gray-800 font-bold font-serif">
      <p className="text-xs mt-8">Email address</p>
      <form onSubmit={massageHandler}>
        <input
          type="email"
          placeholder="emial@company.com"
          className=" w-full py-4 px-2 rounded-lg border-2 mb-4 mt-2"
          required
        />
        <button
         
          type="submit"
          className=" w-full py-5 px-2 rounded-lg text-white bg-gradient-to-r from-gray-800 to-gray-700 hover:from-pink-400 hover:to-orange-500 "
        >
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
}
export default Form;
