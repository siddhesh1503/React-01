import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  const colors = [
    "red", "blue", "green", "yellow", "purple",
    "pink", "gray", "black", "white", "orange", "teal"
  ];

  const getButtonStyle = (color) => {
    const base =
      "px-5 py-2 rounded-full font-semibold shadow-md transition-all duration-200 transform hover:scale-105";
    const colorStyles = {
      red: "bg-red-500 text-white hover:bg-red-600",
      blue: "bg-blue-500 text-white hover:bg-blue-600",
      green: "bg-green-500 text-white hover:bg-green-600",
      yellow: "bg-yellow-400 text-black hover:bg-yellow-500",
      purple: "bg-purple-500 text-white hover:bg-purple-600",
      pink: "bg-pink-500 text-white hover:bg-pink-600",
      gray: "bg-gray-500 text-white hover:bg-gray-600",
      black: "bg-black text-white hover:bg-gray-800",
      white: "bg-white text-black hover:bg-gray-100",
      orange: "bg-orange-500 text-white hover:bg-orange-600",
      teal: "bg-teal-500 text-white hover:bg-teal-600",
      olive: "bg-emerald-700 text-white hover:bg-emerald-800",
    };

    return `${base} ${colorStyles[color] || "bg-gray-400 text-white"}`;
  };

  return (
    <div
      className="w-full h-screen duration-500 flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="backdrop-blur-md bg-white/10 rounded-xl shadow-2xl p-8 border border-white/30 max-w-xl text-center">
        <h1 className="text-4xl font-extrabold text-white drop-shadow mb-6">
          Choose a Background Color
        </h1>

        <div className="flex flex-wrap justify-center gap-4">
          {colors.map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              className={getButtonStyle(c)}
            >
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
