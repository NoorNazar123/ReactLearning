import { useState, useCallback, useEffect, useRef } from "react";
function App() {
  const [lenght, setLenght] = useState(6);
  const [number, setnumber] = useState(false);
  const [char, setchar] = useState(false);
  const [password, setpassword] = useState("");
  //useRef
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (char) str += ")(*&^%$#@!{}[]";
    for (let i = 0; i <= lenght; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [lenght, number, char, setpassword]);

  const copypasswordonCLicked = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [lenght, number, char, passwordGenerator]);

  return (
    <div className=" w-full h-screen bg-gray-500">
      <h1 className="text-center text-4xl text-black-900">
        Password Generator
      </h1>
      <div className=" w-full max-w-2xl bg-slate-900 mx-auto my-10 px-8 py-10 rounded-lg">
        <div className="flex rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            name="text"
            value={password}
            className=" outline-none w-full px-4 py-4 text-black"
            placeholder="Generate your own password"
            readOnly
            ref={passwordRef}
          />
          <button
            className=" outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copypasswordonCLicked}
          >
            copy
          </button>
        </div>

        <div className="felx text-sm gap-x-2">
          <div className="flex gap-x-1 items-center text-orange-500">
            <input
              type="range"
              min={6}
              max={100}
              className=" cursor-pointer"
              value={lenght}
              onChange={(e) => {
                setLenght(e.target.value);
              }}
            />
            <label> Lenght: {lenght} </label>
            <div className="flex item-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={number}
                id="numberInput"
                onChange={() => setnumber((prev) => !prev)}
              />
              <label htmlFor="numberInput"> Numbers</label>
            </div>
            <div className="flex item-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={char}
                id="charInput"
                onChange={() => setchar((prev) => !prev)}
              />
              <label htmlFor="charInput"> character</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
