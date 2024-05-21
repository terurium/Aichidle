import React from "react";

interface Props {
  handleOpenInfo: () => void;
  handleOpenSettings: () => void;
}

export const Header: React.FC<Props> = ({
  handleOpenInfo,
  handleOpenSettings,
}) => {
  return (
    <header className="border-b-2 border-gray-200 flex">
      <button className="mx-3 text-xl" type="button" onClick={handleOpenInfo}>
        ❓
      </button>
      <h1 className="text-4xl font-bold tracking-wide text-center my-1 flex-auto">
        HOKKAI<span className="text-green-600">D</span>LE
        <img
          src="hokkaido.png"
          alt="Hokkaido"
          style={{
            height: "33px",
            display: "inline",
            marginBottom: "8px",
            marginLeft: "6px",
          }}
        />
      </h1>
      <button
        className="mx-3 text-xl"
        type="button"
        onClick={handleOpenSettings}
      >
        ⚙️
      </button>
    </header>
  );
};
