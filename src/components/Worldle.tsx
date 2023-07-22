import React from "react";

export function Worldle() {
  return (
    <span className="font-bold">
      HOKKAI<span className="text-green-600">D</span>LE
      <img
        src="hokkaido.png"
        alt="Hokkaido"
        style={{
          height: "20px",
          display: "inline",
          marginBottom: "2px",
          marginLeft: "4px",
        }}
      />
    </span>
  );
}
