import React, { useEffect, useState } from "react";

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      className="container"
      style={{ width: "100vw", height: "100vh", background: color }}
    >
      <div className="buttons">
        <button onClick={() => setTypeOfColor("hex")}>Create HEX color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB color</button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
        >
          Generate Random Color
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          marginTop: "100px",
          fontSize: "30px",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <h3>{typeOfColor === "hex" ? "HEX Colors" : "RGB Colors"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default RandomColor;
