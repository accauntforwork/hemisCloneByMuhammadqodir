import React, { useState } from "react";
import Test from "./Test";
import uchnuqta from "/uchnuqta.svg";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [loginInput, setLoginInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  // Oldindan belgilangan login va parol
  const predefinedLogin = "sizdahosiz";
  const predefinedPassword = "sizdahosiz";

  const handleLogin = () => {
    if (
      loginInput === predefinedLogin &&
      passwordInput === predefinedPassword
    ) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        setIsAuthenticated(true);
      }, 4000);
    } else {
      alert("Login yoki parol noto'g'ri");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold mb-4">Ha, bilaman</h2>
            <p className="text-gray-600">Sizning ma'lumotlaringiz to'g'ri.</p>
          </div>
        </div>
      )}
      {isAuthenticated ? (
        <Test />
      ) : (
        <div>
          <div className="w-full max-w-md bg-white p-4 pb-4 shadow-md border-t-[3px] border-green-500 rounded-sm">
            <div className=" flex justify-end -mt-2">
              <span className="inline-block p-2 cursor-pointer hover:bg-slate-100 rounded-sm -mt-1">
                <img className="w-4" src={uchnuqta} alt="" />
              </span>
            </div>
            <div className="text-center mb-6 -mt-4">
              <img
                src="https://student.fbtuit.uz/assets/911bdccc/img/gerb.png"
                alt="Logo"
                className="w-20 mx-auto mb-4"
              />
              <h2 className="text-xl text-gray-700">
                Toshkent axborot texnologiyalari universiteti
                <br />
                Farg‘ona filiali
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                HEMIS Student axborot tizimi
              </p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Talaba ID"
                value={loginInput}
                onChange={(e) => setLoginInput(e.target.value)}
                className="w-full px-4 py-2 mb-4 border focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
              />
              <input
                type="password"
                placeholder="Parol"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full px-4 py-2 mb-4 border focus:outline-none focus:ring-1 focus:ring-blue-500  text-sm"
              />
              <hr />
              <div className="flex justify-between items-center mt-4">
                <label id="esla" className="w-60 cursor-pointer">
                  <input
                    className="w-10"
                    width={"40px"}
                    type="checkbox"
                    name="esla"
                    id="esla"
                  />
                  <span className="-mr-2">Eslab qolish</span>
                </label>
                <button
                  onClick={handleLogin}
                  className="w-full bg-[#367fa9] text-white py-2 rounded-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Kirish
                </button>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="w-full py-2 text-sm text-white bg-[#605ca8] hover:bg-purple-500 focus:outline-none focus:bg-purple-700"
          >
            OneID orqali kirish
          </button>
          <p className="text-sm text-center text-gray-900 mt-4">
            <span className="text-black font-semibold">Version</span>: 0.9.20 /{" "}
            <span className="text-black font-semibold">UID</span>: 345 /{" "}
            <span className="text-black font-semibold">Date</span>: 11.11.2024
            22:01:15
          </p>
        </div>
      )}
    </div>
  );
}

export default App;

// import React, { useEffect, useState } from "react";
// import Test from "./Test";
// // import test from "./test.txt";
// function App() {
//   // const [fileContent, setFileContent] = useState("");

//   // useEffect(() => {
//   //   const fetchFileContent = async () => {
//   //     try {
//   //       const response = await fetch(test);
//   //       const content = await response.text();
//   //       setFileContent(content);
//   //     } catch (error) {
//   //       console.error("Error fetching file:", error);
//   //     }
//   //   };

//   //   fetchFileContent();
//   // }, []);
//   return (
//     <div>
//       {/* <pre>{fileContent}</pre> */}
//       <Test />
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import Test from "./Test";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loginInput, setLoginInput] = useState("");
//   const [passwordInput, setPasswordInput] = useState("");

//   // Oldindan belgilangan login va parol
//   const predefinedLogin = "admin";
//   const predefinedPassword = "12345";

//   const handleLogin = () => {
//     if (
//       loginInput === predefinedLogin &&
//       passwordInput === predefinedPassword
//     ) {
//       setIsAuthenticated(true);
//     } else {
//       alert("Login yoki parol noto'g'ri");
//     }
//   };

//   return (
//     <div>
//       {isAuthenticated ? (
//         <Test />
//       ) : (
//         <div>
//           <h2>Login</h2>
//           <input
//             type="text"
//             placeholder="Login"
//             value={loginInput}
//             onChange={(e) => setLoginInput(e.target.value)}
//           />
//           <br />
//           <input
//             type="password"
//             placeholder="Parol"
//             value={passwordInput}
//             onChange={(e) => setPasswordInput(e.target.value)}
//           />
//           <br />
//           <button onClick={handleLogin}>Kirish</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
